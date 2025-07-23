---
icon: simple-icons:xcode
---

# Xcode

## hot keys

control + shift + I: format file

## download version

[link](https://developer.apple.com/download/all/?q=Xcode)

## support

Minimum requirements and supported SDKs

[link](https://developer.apple.com/support/xcode/)

## sol

### error: unable to find utility "simctl"

:::danger unable to find utility "simctl"
xcrun: error: unable to find utility "simctl", not a developer tool or in PATH  
error Could not get the simulator list from Xcode. Please open Xcode and try running project directly from there to resolve the remaining issues.  
Error: Command failed: xcrun simctl list --json devices
:::

[refer](https://stackoverflow.com/a/53046024/17744936)

While running Xcode, open the **Xcode** menu, go to **Preferences**, then select **Locations**  
In Locations, "Command Line Tools", choose your version of Xcode.  
It should be fine.
