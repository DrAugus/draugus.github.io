# 复杂度

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

:::tip
基数排序的复杂度中，r代表关键字的基数，d代表长度，n代表关键字的个数
:::
