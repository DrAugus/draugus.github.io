# LuaJIT

LuaJIT is a Just-In-Time (JIT) compiler for the Lua programming language.

- Repo: <https://github.com/LuaJIT/LuaJIT>
- Project Homepage: <https://luajit.org/>

实践：<https://github.com/DrAugus/lua>

sample

:::code-group

```cpp [register]
ELuna::registerClass<LuaHandle>(p_lua, "LuaHandle", ELuna::constructor<LuaHandle, std::string>);
ELuna::registerMethod<LuaHandle>(p_lua, "ResultAddition", &LuaHandle::ResultAddition);
ELuna::registerMethod<LuaHandle>(p_lua, "ExtraAddResult", &LuaHandle::ExtraAddResult);
```

```lua [callback]
function lua_callback(LuaHandle, attr_data, reserve_data)
 -- convert cpp instance to lua instance
 local attr_table = parse_cpp_table(attr_data)

 -- default value
 local response_type = 2
 local response_str = "response"

 LuaHandle:ExtraAddResult(LuaHandle, response_str, response_type)
 LuaHandle:ResultAddition(LuaHandle)
 return;
end

```

:::
