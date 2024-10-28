# 微积分

:::tip 学习地址

- [微积分的本质](https://www.bilibili.com/video/BV1qW411N7FU/) by 3blue1brown  
- math is fun: [Calculus](https://www.mathsisfun.com/calculus/)

Current Progress: [Differential Equations](https://www.mathsisfun.com/calculus/differential-equations.html)  
中断，先去听 3blue1brown 的课，或者 mooc

todo todo

1. [Magic Hexagon for Trig Identities](https://www.mathsisfun.com/algebra/trig-magic-hexagon.html)
2. [Factorial !](https://www.mathsisfun.com/numbers/factorial.html)
3. [Combinations and Permutations](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
4. [Gamma Function](https://www.mathsisfun.com/numbers/gamma-function.html)

:::

:::warning Confusions

1. Did it just drop out of the sky?
$$f(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \dots$$
2. confuse all pages: [Fourier Series](https://www.mathsisfun.com/calculus/fourier-series.html)
3. todo todo
:::

## Derivative

We write **dx** instead of **"Δx heads towards 0"**.

$\frac{\mathrm{d} \sin (x) }{\mathrm{d} x}$ and $sin'(x)$ both mean "The derivative of sin(x)"

$$\frac{\mathrm{d} \sin (x) }{\mathrm{d} x} = cos(x)$$
or
$$sin'(x)=cos(x)$$

Derivative Rules TABLE

|Common Functions|Function|Derivative|
|:------|:------:|:------:|
|Constant|$c$|$0$|
|Line|$x$|$1$|
||$ax$|$a$|
|Square|$x^2$|$2x$|
|Square Root|$\sqrt{x}$|$\frac{1}{2}x ^{-\frac{1}{2} }$|
|Exponential|$e^x$|$e^x$|
||$ax$|$\ln(a) ax$|
|Logarithms|$ln(x)$|$1/x$|
||$\log_a(x)$|$1 / (x ln(a))$|
|Trigonometry (x is in radians)|$sin(x)$|$cos(x)$|
||$cos(x)$|$−sin(x)$|
||$tan(x)$|$sec2(x)$|
|Inverse Trigonometry|$sin^{-1}(x)$|$1/\sqrt(1−x^2)$|
||$cos^{-1}(x)$|$−1/\sqrt(1−x^2)$|
||$tan^{-1}(x)$|$1/(1+x^2)$|

|Rules|Function|Derivative|
|:------|:------:|:------:|
|Multiplication by constant|$cf$|$cf'$|
|Power Rule|$x^n$|$nx^{n−1}$|
|Sum Rule|$f + g$|$f' + g'$|
|Difference Rule|$f - g$|$f' − g'$|
|Product Rule|$fg$|$f g' + f' g$|
|Quotient Rule|$f/g$| $\frac{f' g − g' f}{g^2}$|
|Reciprocal Rule|$1/f$|$−f'/f^2$|

:::tip Chain Rule
|Notation|Chain Rule|
|:-----|:-----:|
|Using $\frac{\mathrm{d} }{\mathrm{d} x}$|$\frac{\mathrm{d} y }{\mathrm{d} x} = \frac{\mathrm{d} y }{\mathrm{d} u} \frac{\mathrm{d} u }{\mathrm{d} x}$|
|Using $'$ (meaning derivative of)|$f(g(x)) = f'(g(x))g'(x)$|
|As "Composition of Functions"|$f°g = (f'°g) \times g'$|

:::

:::info Composition of Functions
The result of $f()$ is sent through $g()$  
It is written: $(g°f)(x)$  
Which means: $g(f(x))$
:::

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

## Differentiable

Differentiable means that the derivative exists

## Taylor Series

$$f(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \dots$$

$$f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots$$

:::warning Maclaurin Series
A Maclaurin Series is a Taylor Series where a=0, so all the examples we have been using so far can also be called Maclaurin Series.
:::

||Taylor Series expansion|As Sigma Notation|
|:----:|:-----|:-----|
|$e^x$|$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$|$\sum_{n=0}^{\infty} \frac{x^n}{n!}$|
|$sinx$|$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$|$\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1}$|
|$cosx$|$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$|$\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} x^{2n}$|
|$\frac{1}{1-x}$ for $\|x\| < 1$|$\frac{1}{1-x} = 1 + x + x^2 + x^3 + x^4 + \cdots$|$\sum_{n=0}^{\infty} x^n$|

## Integration

![svg](/img/course/integral_vs_derivative.svg)

Integration Rules TABLE

|Common Functions|Function|Integral|
|:------|:------:|:------:|
|Constant|$\int a dx$|ax + C$|
|Variable|$\int x dx$|$x^2/2 + C$|
|Square|$\int x^2 dx$|$x^3/3 + C$|
|Reciprocal|$\int (1/x) dx$|$ln\|x\| + C$|
|Exponential|$\int e^x dx$|$e^x + C$|
||$\int a^x dx$|$a^x/ln(a) + C$|
||$\int ln(x) dx$|$x ln(x) − x + C$|
|Trigonometry (x in radians)|$\int cos(x) dx$|$sin(x) + C$|
||$\int sin(x) dx$|$-cos(x) + C$|
||$\int sec^2(x) dx$|$tan(x) + C$|

|Rules|Function|Integral|
|:------|:------:|:------:|
|Multiplication by constant|$\int cf(x) dx$|$c\int f(x) dx$|
|Power Rule (n≠−1)|$\int xn dx$|$\frac{x^{n+1}}{n+1}+C$|
|Sum Rule|$\int (f + g) dx$|$\int f dx + \int g dx$|
|Difference Rule|$\int (f - g) dx$|$\int f dx - \int g dx$|

:::tip Integration by Parts
$$\int u v dx = u \int v dx - \int u' (\int v dx) dx$$

![svg](/img/course/integral_parts_general.svg)

how to say $\int u v dx$ : (u integral v) minus integral of (derivative u, integral v)

come from where?  

1. $(uv)' = uv' + u'v$
2. $\int (uv)' dx = \int uv'dx+\int u'vdx$
3. $uv = \int uv'dx+\int u'vdx$
4. $\int uv'dx=uv-\int u'vdx$
5. replace **v' with w** and **v with $\int w dx$**

$$\int u w dx = u \int w dx - \int u' (\int w dx) dx$$

:::

:::danger Choose u and v carefully

A helpful rule of thumb is **I LATE**. Choose u based on which of these comes first:

- **I**: Inverse trigonometric functions such as $sin^{-1}(x)$, $cos^{-1}(x)$, $tan^{-1}(x)$
- **L**: Logarithmic functions such as $ln(x)$, $log(x)$
- **A**: Algebraic functions such as $x^2$, $x^3$
- **T**: Trigonometric functions such as $sin(x)$, $cos(x)$, $tan (x)$
- **E**: Exponential functions such as $e^x$, $3^x$
:::

Definite Integrals

$$\int\limits_{a}^{b} uvdx=[u\int vdx-\int u' (\int v dx) dx]_{a}^{b}$$
$$\int\limits_{a}^{b} uvdx=[u\int vdx]_{a}^{b}-\int\limits_{a}^{b} u' (\int v dx) dx$$

:::tip Integration by Substitution

![svg](/img/course/integral_subs.svg)
:::

:::tip Notation
It is usual to show the indefinite integral (without the +C) inside square brackets, with the limits a and b after, like this:  
$\int\limits_{1}^{2} 2xdx= \left [ x^2 \right ] _{1}^{2}$
:::

:::info Properties
$$\int\limits_{a}^{b} f(x)+g(x) dx=\int\limits_{a}^{b} f(x) dx+\int\limits_{a}^{b} g(x) dx$$
$$\int\limits_{a}^{b} f(x) dx=-\int\limits_{b}^{a} f(x) dx$$
$$\int\limits_{a}^{a} f(x) dx=0$$
$$\int\limits_{a}^{b} f(x) dx=\int\limits_{a}^{c} f(x) dx+\int\limits_{c}^{b} f(x) dx$$
:::

Definite vs Indefinite Integrals

The Definite Integral between **a** and **b** is the Indefinite Integral at **b** minus the Indefinite Integral at **a**.

## Arc Length

Using Calculus to find the length of a curve.

:::warning The Arc Length Formula
$S= \int\limits_a^b\sqrt{1+(f'(x))^2} dx$
:::

## Integral Approximations

We can estimate the area under a curve by slicing a function up. There are many ways of finding the area of each slice such as:

- Left Rectangular Approximation Method (LRAM)
- Right Rectangular Approximation Method (RRAM)
- Midpoint Rectangular Approximation Method (MRAM)
- Trapezoidal Rule
- Simpson's Rule

:::info Riemann Sums
the previous 4 methods are also called **Riemann Sums** after the mathematician Bernhard Riemann.
:::

::::warning Maximum Error

- For Midpoint: $\left |E  \right | = \frac{K(b-a)^3}{24n^2}$
- For Trapezoidal: $\left |E  \right | = \frac{K(b-a)^3}{12n^2}$
- For Simpson's: $\left |E  \right | = \frac{M(b-a)^5}{180n^4}$

:::details where

- **|E|** is the absolute value of the maximum error (could be plus or minus)
- **a** is the start of the interval
- **b** is the end of the interval
- **n** is the number of slices
- **K** is the greatest second derivative over the interval.
- **M** is the greatest fourth derivative over the interval.  
(By "greatest" we mean the maximum absolute value.)
:::

::::

## Fourier Series

confusion

## Differential Equations

::::warning Compound Interest

![svg](/img/course/fv_formula.svg)

:::details where

- **FV** = Future Value
- **PV** = Present Value
- **r** = annual interest rate
- **n** = number of periods
:::

Effective Annual Rate = (1+(r/n))n − 1

Where:

- r = **Nominal Rate** (the rate they mention)
- n = number of periods that are compounded (example: for monthly n=12)

**APR** means "Annual Percentage Rate": it shows how much you will actually be paying for the year (including compounding, fees, etc).

:::details Examples

Example 1: "**1% per month**" actually works out to be **12.683% APR** (if no fees).

Example 2: "**6% interest with monthly compounding**" works out to be **6.168% APR** (if no fees).

:::

::::

confusion
