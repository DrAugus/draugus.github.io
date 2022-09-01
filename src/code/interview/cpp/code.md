---
index: false
---

# 程序题

1. 输出

    ```cpp
    int a = 4;
    
    int &f(int x) {
        a = a + x;
        return a;
    }
    
    int main() {
        int t = 5;
        cout << f(t) << endl; //a = 9
        f(t) = 20; //a = 20
        cout << f(t) << endl; //a = 25
        t = f(t); //a = 30 t = 30
        cout << f(t) << endl; // a = 60
    }
    ```

2. 求下面函数的返回值

    ```cpp
    int func(int x) {
      int countx = 0;
      while (x) {
        countx++;
        x = x & (x - 1);
      }
      return countx;
    }
    ```

   假定x = 9999。 答案：8

   思路：将x转化为2进制，看含有的1的个数。

3. 输出

    ```cpp
    int main()
    {
        int i = 1;
        printf("%d,%d\n", ++i, ++i);    
        printf("%d,%d\n", ++i, i++);   
        printf("%d,%d\n", i++, i++);    
        printf("%d,%d\n", i++, ++i);   
        system("pause");
        return 0;
    }
    ```

   3 3 5 3 6 5 8 9

4. 栈内存与文字常量区

   ```cpp
   char str1[] = "abc";
   char str2[] = "abc";
   
   const char str3[] = "abc";
   const char str4[] = "abc";
   
   const char *str5 = "abc";
   const char *str6 = "abc";
   
   char *str7 = "abc";
   char *str8 = "abc";
   
   cout << (str1 == str2) << endl;//0  分别指向各自的栈内存
   cout << (str3 == str4) << endl;//0  分别指向各自的栈内存
   
   cout << (str5 == str6) << endl;//1指向文字常量区地址相同
   cout << (str7 == str8) << endl;//1指向文字常量区地址相同
   ```

   结果是：0 0 1 1

   解答：str1,str2,str3,str4是数组变量，它们有各自的内存空间；而str5,str6,str7,str8是指针，它们指向相同的常量区域。

