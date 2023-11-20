# fish cmd

## switch to fish as your [default]

To change your login shell to fish:

1. Add the shell to `/etc/shells` with:

    ```shell
    echo /usr/local/bin/fish | sudo tee -a /etc/shells
    ```

2. Change your default shell with:

    ```shell
    chsh -s /usr/local/bin/fish
    ```

[default]: https://fishshell.com/docs/current/index.html?highlight=set+default#default-shell
