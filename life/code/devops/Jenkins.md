# Jenkins

## pipeline

## [matrix](https://www.jenkins.io/doc/book/pipeline/syntax/#declarative-matrix)

```groovy
stage("compile-all") {
    when {
        anyOf {
            branch 'dev'
            branch 'release'
            branch 'master'
        }
    }
    failFast false
    
    matrix {
        axes {
            axis {
                name "MODULE_NAME"
                values "module1", "module2"
            }                 
        }
        stages {
            stage("compile") {
                steps {
                    container('docker') {
                        echo "build-${MODULE_NAME}"
                        script {}
                    }
                }
            }
        }
    }
}
```

### use method

在 Jenkins pipeline 中，可以使用 Groovy 语言定义函数，然后在 pipeline 中调用该函数。定义函数的方式如下：

```groovy
def myFunc(name) {
    println "Hello ${name}, welcome to Jenkins Pipeline!"
}
```

然后可以在 pipeline 中调用该函数：

```groovy
myFunc('John')
```

也可以通过 `@Library` 注解，将函数放入类中，然后在 pipeline 中调用：

```groovy
@Library('my-lib@master')
class MyLib {
    def myFunc(name) {
        println "Hello ${name}, welcome to Jenkins Pipeline!"
    }
}

// call the function
MyLib.myFunc('John')
```

### curl

#### async curl

在 Jenkins Pipeline 中使用 curl 异步发送 HTTP 请求非常容易。首先，您需要安装 curl 插件，然后使用sh 'curl'命令来发送请求。例如：

```groovy
pipeline {
    agent any
    stages {
        stage('Request') {
            steps {
                sh 'curl http://example.com'
            }
        }
    }
}
```

另外，如果您需要在 Pipeline 中等待远程请求的响应，则可以利用 Jenkins 内置的 waitUntil 方法，如下所示：

```groovy
pipeline {
    agent any
    stages {
        stage('Request') {
            steps {
                script {
                    def response = sh(returnStdout: true, script: 'curl http://example.com')
                    waitUntil { response == 'expected response' }
                }
            }
        }
    }
}
```

此外，您还可以使用 Jenkins 的 HTTP Request 插件，它提供了一种更加可靠和易于使用的方式来发送和管理 HTTP 请求，如下所示：

```groovy
pipeline {
    agent any
    stages {
        stage('Request') {
            steps {
                httpRequest url: 'http://example.com'
            }
        }
    }
}
```

---

refer:

- [Using Docker with Pipeline](https://www.jenkins.io/doc/book/pipeline/docker/)
- [Using a Jenkinsfile](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/)

```bash
curl -d '{"msgtype": "text","text": {"content":"'"$JOB_NAME"': 镜像构建成功'"${BASIN_IMAGE}, ${DEPS_IMAGE}"'，已推送至镜像仓库"}, "at": { "atMobiles": ["'"$OWNER_PHONE"'"] }}' \ 
    -H 'Content-Type: application/json' "$DINGTALK_URL"
```
