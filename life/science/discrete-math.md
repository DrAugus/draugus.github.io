# 离散数学

<style>
/* .MathJax{
  overflow-x: auto;
  overflow-y: hidden;
} */
</style>

:::tip 要学到的
离散数学基础: 集合、偏序集、良序、数学归纳法、级数、递归、递推
:::

## 概念定义

**集合基数**: 集合 A 中元素的数目称为集合A的基数(base number), 记为|A|

- 如|A|是有限的, 则称A为**有限集**
- 如|A|是无限的, 则称A为**无限集**

**m元子集**: 如果一个集合A中含有n个元素, 则称集合A为**n元集**, 称A的含有m个($0\le m\le n$)元素的子集为**A的m元子集**.

**子集总数**: 一般来说, 对于n元集A, 它的m($0\le m\le n$)元子集$C_n^m$个, 所以不同的子集总数有:  
$C_n^0+C_n^1+C_n^2+...+C_n^n=2^n$ 所以, n元集共有$2^n$个子集

**幂集**: 设A为任意集合, 把A的**所有不同子集**为元素构成的集合叫做A的**幂集**(power set), 记为 **P(A)** 或$2^A$  
符号化表示:  
$P(A) = \{ x| 一切 \subseteq A\}$  
该集合又称为**集族**(family of set)  
对集族的研究在数学方面、知识库和表处理语言及人工智能等方面都有十分重要的意义  
显然, 若集合A有n个元素, 则集合A共有$2^{|A|}$个子集, 即  
$|P(A)| = 2^{|A|}$

**集合的运算**:  
设A、B为任意集合, U为全集

- **并集** $A \bigcup B = \{ X | X \in A 或 X \in B\}$
- **交集** $A \bigcap B = \{ X | X \in A 且 X \in B\}$
- **差集** $A - B = \{ X | X \in A 且 X \notin B\}$
- **补集** $\bar{A} = U - A = \{ X | X \in U 且 X \notin A\}  \space\space({A}',\space \sim A, \space A^C)$
- **对称差集** $A \oplus B = \{ X| ((X \in A) 且 (X \notin B)) 或((X \in B)且(X \notin A)) \}$

推广:  
$$\bigcup_{i=1}^{n} A_{i} = \bigcup_{i\in\{1,2,...,n\}}^{n} A_{i} = A_1\bigcup A_2\bigcup A_3\bigcup ... \bigcup A_n = \{ X | (X \in A_1) 或 (X \in A_2) 或 ... 或 (X \in A_n) \} $$
$$\bigcap_{i=1}^{n} A_{i} = \bigcap_{i\in\{1,2,...,n\}}^{n} A_{i} = A_1\bigcap A_2\bigcap A_3\bigcap ... \bigcap A_n = \{ X | (X \in A_1) 且 (X \in A_2) 且 ... 且 (X \in A_n) \} $$
当n无限增大时, 可以记为
$$\bigcup_{i=1}^{\infty } A_{i} = \bigcup_{i\in Z^+ } A_{i} = A_1\bigcup A_2\bigcup A_3\bigcup ... $$
$$\bigcap_{i=1}^{\infty } A_{i} = \bigcap_{i\in Z^+ } A_{i} = A_1\bigcap A_2\bigcap A_3\bigcap ... $$

差和补运算的几个性质

- $A - A = \Phi$
- $A - B = A - (A\bigcap B)$
- $A \bigcup (B-A)=A\bigcup B$
- $A-B=A\bigcap \bar {B}$
- $(A-B)-C=A-(B\bigcup C)$

定理  
设A、B、C为任意集合, U为全集, $\Phi$为空集

- **幂等律** $A \bigcup A=A; \space\space A\bigcap A=A$
- **恒等律** $A \bigcup \Phi =A; \space\space A\bigcap U=A$
- **零律** $A \bigcup U =U; \space\space A\bigcap \Phi=\Phi$
- **否定律** $\bar{\bar{A}}=A$
- **矛盾律** $A\bigcap \bar{A}=\Phi$
- **排中律** $A\bigcup \bar{A}=U$
- **交换律** $A\bigcup B=B\bigcup A; \space\space A\bigcap B=B\bigcap A$
- **吸收率** $A\bigcap(A\bigcup B)=A;\space\space A\bigcup(A\bigcap B)=A$
- **DeMorgAn律** $\overline{A\bigcup{B}}=\bar{A}\bigcap\bar{B};\space\space\overline{A\bigcap{B}}=\bar{A}\bigcup\bar{B}$
- **结合律** $A\bigcup(B\bigcup{C})=(A\bigcup{B})\bigcup{C};\space\space A\bigcap(B\bigcap{C})=(A\bigcap{B})\bigcap{C}$
- **分配律** $A\bigcap(B\bigcup{C})=(A\bigcap{B})\bigcup(A\bigcap{C});\space\space A\bigcup(B\bigcap{C})=(A\bigcup{B})\bigcap(A\bigcup{C})$
