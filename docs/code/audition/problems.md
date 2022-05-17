# 疑难排查

- Q: div标签设置背景时发现实际显示效果图片高度为0  
  A: 增加 padding-bottom 即可显示

- Q: div background-image url路径错误 或者 该路径下无此文件  
  A: 增加多个url

- Q: img src路径错误 或者 该路径下无此文件  
  A: onerror="this.src=''"

- Q: 反思  
  A: 知识的匮乏让你想思考都没东西去思考

- Q: css层级问题 div span 与 div > span  
  A: div span 设置是的div下的所有span div > span 设置的是紧挨着的二级span

- Q: css文字竖向排列   
  A: 标签writing-mode vertical-lr; 从左向右 从右向左是 vertical-rl;IE浏览器的从左向右 从右向左是tb-rl

- Q: querySelector .开头和#开头  
  A: .开头是class \#开头是id

- Q: Linux删除某个字母开头的所有文件  
  A: 比如删除temp目录下以a开头的所有文件：<br>首先要进到temp目录下<br>在删除前先使用ls a*查看要删除哪些文件，防止误删除<br>确认无误后，使用 rm -rf a* 命令，删除a开头的所有文件

- Q: slice不会改变原始数组  
  A:

- Q: jQuery $ .# 区别  
  A: html自带标签 直接写标签 类用. id用#

- Q: clion如何编译so库  
  A:

- Q: clion如何链接使用dll库  
  A:

- Q: run libuv, got "Process finished with exit code -1073741515 (0xC0000135)"  
  A: if you are using visual studio toolchains in CLion, You need to paste in folder cmake-build-debug or
  cmake-build-release the files .dll, but no only SDL2_image.dll, all files from folder lib/x86.
  refer https://stackoverflow.com/a/65268629/17744936

- Q:  
  A: