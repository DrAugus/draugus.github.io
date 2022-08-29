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
