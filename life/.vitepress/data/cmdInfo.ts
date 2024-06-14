import { OfficialInfo } from "../type";

export const CMD_INFO: OfficialInfo[] = [
    {
        id: 'fish',
        name: 'fish',
        intro: 'fish is a smart and user-friendly command line shell for Linux, macOS, and the rest of the family.',
        repo: 'https://github.com/fish-shell/fish-shell',
        homepage: 'https://fishshell.com/',
        platform: ['Windows', 'Linux', 'Mac'],
    }, {
        id: 'iterm2',
        name: 'iTerm2',
        intro: 'iTerm2 is a terminal emulator for Mac OS X that does amazing things.',
        repo: 'https://github.com/gnachman/iTerm2',
        homepage: 'https://iterm2.com/',
        platform: 'Mac',
    }, {
        id: 'mobaxterm',
        name: 'MobaXterm',
        intro: 'Enhanced terminal for Windows with X11 server, tabbed SSH client, network tools and much more',
        homepage: 'https://mobaxterm.mobatek.net/',
        platform: 'Windows',
    }, {
        id: 'tabby',
        name: 'Tabby',
        intro: 'A terminal for the modern age</br>Tabby is an infinitely customizable cross-platform terminal app for local shells, serial, SSH and Telnet connections.',
        repo: 'https://github.com/eugeny/tabby',
        homepage: 'https://tabby.sh/',
        platform: ['Windows', 'Linux', 'Mac'],
    }, {
        id: 'warp',
        name: 'Warp',
        intro: 'Great software starts on the command line</br>Warp is the terminal reimagined with AI and collaborative tools for better productivity.',
        repo: 'https://github.com/warpdotdev/Warp',
        homepage: 'https://www.warp.dev/',
        platform: ['Linux', 'Mac'],
    }, {
        id: 'xshell',
        name: 'Xshell',
        intro: 'The Industry’s Most Powerful SSH Client',
        homepage: 'https://www.xshell.com/',
        platform: 'Windows',
    },
];