# 微积分

:::tip 学习地址
[微积分的本质](https://www.bilibili.com/video/BV1qW411N7FU/) by 3blue1brown  
[math is fun](https://www.mathsisfun.com/calculus/)
:::

## Derivative

$\frac{\mathrm{d} \sin (x) }{\mathrm{d} x}$ and $sin'(x)$ both mean "The derivative of sin(x)"

$$\frac{\mathrm{d} \sin (x) }{\mathrm{d} x} = cos(x)$$
or
$$sin'(x)=cos(x)$$

## L'Hôpital's Rule

:::tip L'Hôpital
L'Hôpital is pronounced "lopital". He was a French mathematician from the 1600s. 
:::

$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$$

## Concave Upward and Downward

Derivatives:

- When the slope continually **increases**, the function is **concave upward**.
- When the slope continually **decreases**, the function is **concave downward**.

second derivative:

- When the second derivative is **positive**, the function is **concave upward**.
- When the second derivative is **negative**, the function is **concave downward**.

:::info Example
the function $x^2$
:::

:::warning Slope Stays the Same
Example: y = 2x + 1  
**2x + 1** is a straight line.

It is **concave upward**.  
It is also **concave downward**.

It is not **strictly concave upward**.  
And it is not **strictly concave downward**.
:::

## Chain Rule

|Notation|Chain Rule|
|:-----|:-----:|
|Using $\frac{\mathrm{d} }{\mathrm{d} x}$|$\frac{\mathrm{d} y }{\mathrm{d} x} = \frac{\mathrm{d} y }{\mathrm{d} u} \frac{\mathrm{d} u }{\mathrm{d} x}$|
|Using $'$ (meaning derivative of)|$f(g(x)) = f'(g(x))g'(x)$|
|As "Composition of Functions"|$f°g = (f'°g) \times g'$|

:::info Composition of Functions
The result of $f()$ is sent through $g()$  
It is written: $(g°f)(x)$  
Which means: $g(f(x))$
:::

## Taylor Series

||Taylor Series expansion|As Sigma Notation|
|:----:|:-----|:-----|
|$e^x$|$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$|$\sum_{n=0}^{\infty} \frac{x^n}{n!}$|
|$sinx$|$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$|$\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1}$|
|$cosx$|$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$|$\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} x^{2n}$|
|$\frac{1}{1-x}$ for $\|x\| < 1$|$\frac{1}{1-x} = 1 + x + x^2 + x^3 + x^4 + \cdots$|$\sum_{n=0}^{\infty} x^n$|
