# 特性

## C++23 有什么新特性

:::tip Link [cppreference](https://en.cppreference.com/w/cpp/23)
...etc
:::

## C++20 有什么新特性

:::tip Link [cppreference](https://en.cppreference.com/w/cpp/20)

- Feature test macros
- Three-way comparison operator `<=>` and operator==() = default
- Designated initializers
- Init-statements and initializers in range-for
- char8_t
- New attributes: [[no_unique_address]], [[likely]], [[unlikely]]
- Pack-expansions in lambda init-captures
- Removed the requirement to use typename to disambiguate types in many contexts
- consteval, constinit
- Further relaxed constexpr
- Signed integers are 2's complement
- Bitwise shift operators unified behavior
- aggregate initialization using parentheses
- coroutines
- modules
- Constraints and concepts
- Abbreviated function template
- DR11: array new can deduce array size
:::

## C++17 有什么新特性

:::tip Link [cppreference](https://en.cppreference.com/w/cpp/17)
...etc
:::

## C++14 有什么新特性

:::tip Link [cppreference](https://en.cppreference.com/w/cpp/14)

- variable templates
- generic lambdas
- lambda init-capture
- new/delete elision
- relaxed restrictions on constexpr functions
- binary literals
- digit separators
- return type deduction for functions
- aggregate classes with default non-static member initializers.

:::

## C++11 有什么新特性

:::tip Link [cppreference](https://en.cppreference.com/w/cpp/11)

- auto and decltype
- defaulted and deleted functions
- final and override
- trailing return type
- rvalue references
- move constructors and move assignment operators
- scoped enums
- constexpr and literal types
- list initialization
- delegating and inherited constructors
- brace-or-equal initializers
- nullptr
- long long
- char16_t and char32_t
- type aliases
- variadic templates
- generalized (non-trivial) unions
- generalized PODs (trivial types and standard-layout types)
- Unicode string literals
- user-defined literals
- attributes
- lambda expressions
- noexcept specifier and noexcept operator
- alignof and alignas
- multithreaded memory model
- thread-local storage
- GC interface (removed in C++23)
- range-for (based on a Boost library)
- static_assert (based on a Boost library)

:::

## by stroustrup

:::details C++11 features

> C++11 feels like a new language -- stroustrup

> [page29](https://www.stroustrup.com/hopl20main-p5-p-bfc9cd4--final.pdf)

C++11 introduced a bewildering number of language features, including:

- memory model - an efficient low level-model of modern hardware as a foundation for concurrency
- auto and decltype - avoiding redundant repetition of type names
- range-for - simple linear traversal of ranges
- move semantics and rvalue references - minimizing copying of data
- uniform initialization - an (almost) completely general syntax and semantics for initializing objects of all kinds and
  types
- nullptr - a name for the null pointer
- constexpr functions - compile-time evaluated functions
- user-defined literals - literals for user-defined types
- raw string literals - literals where escape characters are not needed, mostly for regular expressions
- attributes - associating essentially arbitrary information with a name
- lambdas - unnamed function objects
- variadic templates - templates that can handle an arbitrary number of arguments of arbitrary types
- template aliases - the ability to rename a template and to bind some template arguments for the new name
- noexcept - a way of ensuring that an exception isn’t thrown from a function
- override and final - explicit syntax for managing large class hierarchies
- static_assert - compile-time assertions
- long long - a longer integer type
- default member initializers - give a data member a default value that can be superseded by initialization in a
  constructor
- enum classes - strongly typed enumerations with scoped enumerators

And here is a list of the major standard-library components:

- unique_ptr and shared_ptr - resource-management pointers relying on RAII
- memory model and atomic variables
- thread, mutex, condition_variable, etc. - type-safe and portable support for basic system- level concurrency
- future, promise, and packaged_task, etc. - slightly higher-level concurrency
- tuple - unnamed simple composite types
- type traits - testable properties of types for use in metaprogramming
- regular expression matching
- random numbers - with many generators (engines) and distributions
- Time - time_point and duration
- unordered_map, etc. - hash tables
- forward_list - a singly-linked list
- array - a fixed-constant-sized array that knows its size
- emplace operations - construct objects right within a container to avoid copying
- exception_ptr - enables transfer of exceptions between threads
:::
:::details  C++17 features

C++17 had about 21 new language features (depending on how you count), including:

- Constructor template argument deduction - simplify object definitions
- Deduction guides - an explicit notation for resolving constructor template argument deduction ambiguities
- Structured bindings - simplify notation and eliminate a source of uninitialized variables
- inline variables - simplify the use of statically allocated variables in header-only libraries
- Fold expressions - simplify some uses of variadic templates
- Explicit test in conditions - a bit like conditions in for-statements
- Guaranteed copy elision - eliminate many redundant copy operations
- Stricter expression evaluation order - prevents some subtle order-of-evaluation mistakes
- auto as a template argument type - type deduction for value template arguments
- Standard attributes to catch common mistakes - `[[maybe_unused]]`, `[[nodiscard]]`, and `[[fallthrough]]`
- Hexadecimal floating-point literals
- Constant expression if - simplify compile-time evaluated code

The C++17 standard-library added about 13 new features plus many minor modifications:

- optional, variant, and any - standard-library types for expressing alternatives
- shared_mutex and shared_lock (reader-writer locks) and scoped_lock
- parallel STL - multi-threaded and/or vectorized versions of standard-library algorithms
- file system - the ability to portably manipulate file-system paths and directories
- string_view - a non-owning reference to an immutable sequence of characters
- Mathematical special functions - including Laguerre and Legendre polynomials, beta func- tions, Riemann zeta function
:::
