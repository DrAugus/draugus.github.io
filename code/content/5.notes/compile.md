---
icon: fluent-emoji-flat:person-running-light
---
# Compile

## QA

- **make[1]: *** No rule to make target**  
    清除之前生成的 build
- **can not be used when making a shared object**

    ```shell
    /usr/bin/ld: /usr/lib/gcc/x86_64-linux-gnu/7/crtbeginT.o: relocation R_X86_64_32 against hidden symbol `__TMC_END__' can not be used when making a shared object
    ```
