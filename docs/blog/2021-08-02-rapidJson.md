---
sidebar: false   
title: rapidJson::Document doc
date: 2021-08-02 15:00:03 
category: 
  - 编程
tag: 
  - RapidJSON 
  - C++
---

`RapidJSON`是一个C++的JSON解析器及生成器。

解析一个JSON字符串至一个document (DOM)，对DOM作出简单修改，最终把DOM转换（stringify）至JSON字符串。

```c++
#include "rapidjson/document.h"
#include "rapidjson/writer.h"
#include "rapidjson/stringbuffer.h"
#include <iostream>
using namespace rapidjson;
int main() {
    // 1. 把JSON解析至DOM。
    const char* json = "{\"project\":\"rapidjson\",\"stars\":10}";
    Document d;
    d.Parse(json);
    // 2. 利用DOM作出修改。
    Value& s = d["stars"];
    s.SetInt(s.GetInt() + 1);
    // 3. 把DOM转换（stringify）成JSON。
    StringBuffer buffer;
    Writer<StringBuffer> writer(buffer);
    d.Accept(writer);
    // Output {"project":"rapidjson","stars":11}
    std::cout << buffer.GetString() << std::endl;
    return 0;
}
//对json里的数据遍历：
for (rapidjson::SizeType i = 0; i < doc.Size(); ++i)
{}
const rapidjson::Value &gameObject = doc[i];
```