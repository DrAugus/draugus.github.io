# 算法与数据结构

## LeetCode

- 多数元素 [169](https://leetcode-cn.com/problems/majority-element/solution/qiu-/)
- 按序打印 [1114](https://leetcode-cn.com/problems/print-in-order/)
- 爬楼梯 [70](https://leetcode-cn.com/problems/climbing-stairs/)
- 路径总和 [112](https://leetcode-cn.com/problems/path-sum/)
- 用 `Rand7()` 实现 `Rand10()` [470](https://leetcode-cn.com/problems/implement-rand10-using-rand7/)
- 字符串解码 [394](https://leetcode-cn.com/problems/decode-string/)
- 不同路径 [62](https://leetcode-cn.com/problems/unique-paths/) [63](https://leetcode-cn.com/problems/unique-paths-ii/) [980](https://leetcode-cn.com/problems/unique-paths-iii/)
- 对角线遍历 [498](https://leetcode-cn.com/problems/diagonal-traverse/)
- 有效的括号 [678](https://leetcode-cn.com/problems/valid-parentheses/)
- 青蛙跳台阶问题 [剑指 Offer 10 II.](https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)
- x 的平方根 [69](https://leetcode-cn.com/problems/sqrtx/)
- 旋转图像 [48](https://leetcode-cn.com/problems/rotate-image/)

### 子序列

- 最长公共子序列 [1143](https://leetcode-cn.com/problems/longest-common-subsequence/)
- 最长上升子序列 [300](https://leetcode-cn.com/problems/longest-increasing-subsequence/)
- 最大子序和 [53](https://leetcode-cn.com/problems/maximum-subarray/)
- 最长和谐子序列 [594](https://leetcode-cn.com/problems/longest-harmonious-subsequence/comments/)
- 最小覆盖子串 [76](https://leetcode-cn.com/problems/minimum-window-substring/)

### 二叉树

- 二叉树的最近公共祖先 [236](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- 从前序与中序遍历序列构造二叉树 [105](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
- 二叉树的锯齿形层次遍历 [103](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
- 二叉树的中序、后序遍历 [106](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
- 翻转二叉树 [226](https://leetcode-cn.com/problems/invert-binary-tree/solution/fan-zhuan-er-cha-shu-by-leetcode/)
- 二叉树的层序遍历 [102](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/) [107](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/solution/)
- 二叉搜索树的第k大节点 [剑指 Offer 54](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

### 栈和队列

- 用栈实现队列 [232](https://leetcode-cn.com/problems/implement-queue-using-stacks/solution/)
- 用队列实现栈 [225](https://leetcode-cn.com/problems/implement-stack-using-queues/)
- 最大栈 [716](https://leetcode-cn.com/problems/max-stack/solution/716-zui-da-zhan-by-klb/)

### 数组

- 旋转数组 [189](https://leetcode-cn.com/problems/rotate-array/)
- 数组中的第 K 个最大元素 [215](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
- 合并两个有序数组 [88](https://leetcode-cn.com/problems/merge-sorted-array/)

### 链表

- 链表倒数第K个数 [面试题02.02](https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/)
- 删除排序链表中的重复元素 [83](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/) [82](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)
- 删除链表的倒数第N个节点 [19](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
- 环形链表 [141](https://leetcode-cn.com/problems/linked-list-cycle/)
- 合并两个有序链表 [21](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
- 反转链表 [剑指Offer24](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/) [92](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

## OTHERS

| | 查找 | 插入 | 删除|
|-|-|-|-|
|数组 | o(n)| o(1) | o(n)|
|有序数组 | o(logn)| o(n)| o(n)|
|链表 | o(n)| o(1)  | o(n)|
|有序链表 | o(n)| o(n)| o(n)
|二叉树最坏 | o(n)| o(n)| o(n)
|二叉树一般 | o(logn)| o(logn)| o(logn)
|平衡树 | o(logn)| o(logn) | o(logn)
|哈希表 | o(1)| o(1)| o(1)



<table style="text-align: center">
<tr>
<td rowspan="2">类别</td>
<td rowspan="2">排序方法</td>
<td colspan="3">时间复杂度</td>
<td>空间复杂度</td>
<td rowspan="2">稳定性</td>
</tr>
<tr>
<td>平均情况</td><td>最好情况</td><td>最坏情况</td><td>辅助存储</td>
</tr>
<tr>
<td rowspan="2">插入排序</td>
<td>直接插入</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>稳定</td>
</tr>
<tr>
<td>Shell排序</td><td>O(n^1.3)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>不稳定</td>
</tr>
<tr>
<td rowspan="2">选择排序</td>
<td>直接选择</td><td>O(n^2)</td><td>O(n^2)</td><td>O(n^2)</td><td>O(1)</td><td>不稳定</td>
</tr>
<tr>
<td>堆排序</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(1)</td><td>不稳定</td>
</tr>
<tr>
<td rowspan="2">交换排序</td>
<td>冒泡排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>稳定</td>
</tr>
<tr>
<td>快速排序</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(n^2)</td><td>O(nlog2n)</td><td>不稳定</td>
</tr>
<tr>
<td colspan="2">归并排序</td>
<td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(n)</td><td>稳定</td>
</tr>
<tr>
<td colspan="2">基数排序</td>
<td>O(d(r+n))</td><td>O(d(n+rd))</td><td>O(d(r+n))</td><td>O(rd+n)</td><td>稳定</td>
</tr>
</table>

::: tip
基数排序的复杂度中，r代表关键字的基数，d代表长度，n代表关键字的个数
:::

- 有序链表插入的时间复杂度是多少？
- 实现 `LRU` 算法，实现带有过期时间的 `LRU` 算法，简述 `LRU` 算法及其实现方式
  > [如何实现LRU算法](https://www.bookstack.cn/read/fucking-algorithm/%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95%E7%B3%BB%E5%88%97-LRU%E7%AE%97%E6%B3%95.md)
- 常用的排序方式有哪些，时间复杂度是多少？
- 什么是排序算法中的稳定性？
- 实现快速排序
    * 使用递归及非递归两种方式实现快速排序
    * 快速排序的空间复杂度是多少？时间复杂度的最好最坏的情况是多少，有哪些优化方案
- 如何从一个数组输出随机数组（洗牌算法）
- 手写无锁队列
- 如何实现大数运算
- 给定一个包含 40亿 个无符号整数的大型文件，使用最多 1G 内存，对此文件进行排序
- 10亿个数中如何高效地找到最大的一个数以及最大的第 K 个数
- 两个 10G 大小包含 URL 数据的文件，最多使用 1G 内存，将这两个文件合并，并找到相同的 URL
- 给定 100G 的 URL 磁盘数据，使用最多 1G 内存，统计出现频率最高的 Top K 个 URL
- 10亿条数据包括 id，上线时间，下线时间，请绘制每一秒在线人数的曲线图
- 两个文件包含无序的数字，数字的大小范围是0500w左右。如何求两个文件中的重复的数据？
- 1000 台机器，每台机器 1000个 文件，每个文件存储了 10亿个 整数，如何找到其中最小的 1000个 值？
- 如何随机生成不重复的 10个100 以内的数字？
- 如何通过一个不均匀的硬币得到公平的结果？
- 常用的限流算法有哪些？简述令牌桶算法原理
- 简述布隆过滤器原理及其使用场景
- Hash 表常见操作的时间复杂度是多少？遇到 Hash 冲突是如何解决的？
- 什么是跳表
- 一个两层的跳表查询时可以降低倒多大的复杂度
- 如何计算循环链表的长度
- AVL 树和红黑树有什么区别？
- 红黑树是怎么实现平衡的？它的优点是什么？
- 二叉搜索树和平衡二叉树，红黑树的区别
- 红黑树删除数据是怎么调整的



  
