# 数据结构与算法

学习[链接](https://dsa.cs.tsinghua.edu.cn/~deng/ds/dsacpp/)

## 绪论

### 迭代与递归

减而治之 decrease conquer

```cpp
void reverse(int* A, int lo, int hi)
// 递归版
if (lo < hi) {
  std::swap(A[lo], A[hi]);
  reverse(A, lo + 1, hi - 1);
}
// 迭代原始
next:
  if (lo < hi) {
    std::swap(A[lo], A[hi]);
    lo++;
    hi--;
    goto next;
  }
// 迭代精简
while (lo < hi) {
  std::swap(A[lo++], A[hi--]);
}
```

```cpp
int sum(int A[], int n) {
  return (n < 1) ? 0 : sum(A, n - 1) + A[n - 1];
}
```

分而治之 divide conquer

```cpp
int sum(int A[], int lo, int hi) {
  if (lo == hi)
    return A[lo];
  int mi = (lo + hi) >> 1;
  return sum(A, lo, mi) + sum(A, mi + 1, hi);
}
```

Master Theorem

**分治**策略对应的递推式，**通常**（尽管**不总是**）形如：$T(n)=a\cdot T(n/b)+O(f(n))$  
（原问题被分为 a 个规模均为 n/b 的子任务；任务的划分、解的合并耗时 f(n)）

若 $f(n)= O(n^{log_{b}a-\epsilon  } )$，则 $T(n)=\Theta (n^{log_{b}a  } )$

- kd-search: $T(n)=2\cdot T(n/4)+O(1)=O(\sqrt{n} )$

若 $f(n)=\Theta (n^{log_{b}a}  \cdot   { log^{k}n  }   )$，则 $T(n)=\Theta (n^{log_{b}a}  \cdot   { log^{k+1}n  }   )$

- binary search: $T(n)=1\cdot T(n/2)+O(1)=O(logn )$
- mergesort: $T(n)=2\cdot T(n/2)+O(n)=O(n\cdot logn )$
- STL mergesort: $T(n)=2\cdot T(n/2)+O(n\cdot logn)=O(n\cdot log^{2}n  )$

若 $f(n)= \Omega (n^{log_{b}a+\epsilon  } )$，则 $T(n)=\Theta (f(n))$

- quick select(average case): $T(n)=1\cdot T(n/2)+O(n)=O(n )$

### 动态规划

:::tip Kent Beck
make it work, make it right, make it fast.
:::

fib() 递归

$fib(n) = fib(n-1) + fib(n-2) : {0, 1, 1, 2, 3, 5, 8, ...}$

```cpp
int fib(n) {
    return (2 > n) ? n : fib(n - 1) + fib(n - 2);
}
```
