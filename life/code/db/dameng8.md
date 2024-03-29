# 达梦8

## 错误排查

### -6811 结果集总数超过限制

从[错误码文档](https://eco.dameng.com/document/dm/zh-cn/pm/programmer-appendix.html)来看，值域在 (-6001,-8000) 为**运行时错误**，但并没有具体引起错误的原因。检索 QA 可有如下解决方案。

修改下列两个参数的阈值

- `RESULT_SET_LIMIT` 一次请求可以生成的结果集最大个数
- `SESSION_RESULT_SET_LIMIT` 会话上结果集个数的上限

```sql
select para_name,para_value from v$dm_ini where para_name in ('RESULT_SET_LIMIT','SESSION_RESULT_SET_LIMIT');

SP_SET_PARA_VALUE(1,'SESSION_RESULT_SET_LIMIT',20000);
SP_SET_PARA_VALUE(1,'RESULT_SET_LIMIT',20000);
```

## 文档

- [达梦社区发帖中心](https://eco.dameng.com/user-center/post)
- [DPI 编程指南](https://eco.dameng.com/document/dm/zh-cn/pm/dpi-rogramming-guide.html)
- [DMSQL 程序数据类型与操作符](https://eco.dameng.com/document/dm/zh-cn/pm/dm8_sql-data-types-operators)
- [SQL 执行错误码](https://eco.dameng.com/document/dm/zh-cn/faq/faq-errorcode.html)
- [DM 服务器错误码/ DPI 程序开发错误码](https://eco.dameng.com/document/dm/zh-cn/pm/programmer-appendix.html)

## 创建

### 创建数据库 (db)

使用以下语句创建一个名为 `example_db` 的数据库：

```sql
CREATE DATABASE example_db;
```

### 创建用户

```sql
CREATE USER username IDENTIFIED BY password;
```

其中，username 是要创建的用户名，password 是用户密码。可以根据需要给用户分配不同的权限。

例如，如果要给用户分配读取和写入表的权限，可以使用以下语句：

```sql
GRANT SELECT, INSERT ON table_name TO username;
```

其中，table_name 是要授权的表名，username 是要授权的用户名。通过 GRANT 命令可以给用户分配不同的权限。

需要注意的是，要创建用户需要有足够的权限，通常需要使用系统管理员账户进行操作。

### 创建模式 (schema)

在达梦数据库中，模式和用户是紧密相关的。模式可以看做是用户的命名空间，它允许用户在一个独立的环境下创建对象。

使用以下语句创建名为 `example_schema` 的模式：

```sql
CREATE SCHEMA example_schema AUTHORIZATION user_name;
```

这里的 `user_name` 应替换为你要为该模式指定所有权的用户名称。

### 创建表 (table)

使用以下语句创建名为 `example_table` 的表：

```sql
CREATE TABLE "example_schema"."example_table" (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INTEGER NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);
```

这将在 `example_schema` 模式下创建一个具有 `id`、`name`、`age` 和 `email` 列的表。其中，`id` 列作为主键，`email` 列具有唯一约束条件。你可以将这些列改为适合你的应用程序的名称和数据类型。

## 插入

```sql
insert into "example_schema"."example_table"(id, name, age, email) 
values(1, 'lisa', 19, 'lihua@li.com')
```

## 查询

查询 object

```sql
select top 10 name,id from sysobjects;
```

查询列类型

```sql
SELECT DBMS_METADATA.GET_DDL('TABLE', 'sysobjects', 'SYSDBA') FROM DUAL;
-- 或者
DESC sysobjects;
```

查看数据库

```sql
SELECT * FROM v$database;
```

查看schema

```sql
SELECT * FROM dba_objects WHERE object_type = 'SCH';
```

查看表空间的名称和大小

```sql
select name, total_size * sf_get_page_size() / 1024 / 1024 || 'M' from v$tablespace;
```

查看表空间物理文件的名称和大小

```sql
select t.name tablespace_name, t.id file_id, d.path file_name, d.total_size * sf_get_page_size() / 1024 / 1024 || 'M' total_space from v$tablespace t, v$datafile d where t.id = d.group_id;
```

查看表空间使用情况

```sql
select t1.NAME tablespace_name, t2.FREE_SIZE * SF_GET_PAGE_SIZE() / 1024 / 1024 || 'M' free_space, t2.TOTAL_SIZE * SF_GET_PAGE_SIZE() / 1024 / 1024 || 'M' total_space, t2.FREE_SIZE * 100 / t2.total_size" % FREE" from V$TABLESPACE t1, V$DATAFILE t2 where t1.ID = t2.GROUP_ID;
```

查看控制文件

```sql
select para_value name from v$dm_ini where para_name='CTL_PATH';
```

查看日志文件大小

```sql
select PATH, RLOG_SIZE / 1024 / 1024 || 'M' from v$rlogfile;
```

查看数据库对象

```sql
select t2.name owner, t1.subtype$ object_type, t1.valid status, count(1) count#  from sysobjects t1, sysobjects t2 where t1.schid = t2.id and t1.schid != 0 group by t2.name, t1.subtype$, t1.valid;
```

查看数据库创建日期和归档方式

```sql
select create_time, case when arch_mode = 'n' then '非归档模式' else '归档模式' end arch from v$database;
```

查看object分类数量

```sql
select subtype$ object_type, count(1) quantity from sysobjects where subtype$ <>'' group by subtype$ union select 'column', count(1) from syscolumns;
```

## 技巧

### 获取自增 ID

> [官方 查看自增列信息](https://eco.dameng.com/document/dm/zh-cn/pm/management-table.html#9.6.2%20%E6%9F%A5%E7%9C%8B%E8%87%AA%E5%A2%9E%E5%88%97%E4%BF%A1%E6%81%AF)

1. `IDENT_CURRENT`：获得表上自增列的当前值；
2. `IDENT_SEED`：获得表上自增列的种子信息；
3. `IDENT_INCR`：获得表上自增列的增量信息。

```sql
-- IDENTITY
CREATE TABLE "TEST_BMY"."IDENT_TABLE_T2" (
  C1 INT IDENTITY(0, 1),
  C2 INT
);
insert into "TEST_BMY"."IDENT_TABLE_T2" values(3)

SELECT IDENT_CURRENT('TEST_BMY.IDENT_TABLE_T2');
SELECT IDENT_SEED('TEST_BMY.IDENT_TABLE_T2');
SELECT IDENT_INCR('TEST_BMY.IDENT_TABLE_T2');
-- AUTO_INCREMENT
CREATE TABLE "SYSDBA"."TABLE_8" (
  "ID" INT PRIMARY KEY AUTO_INCREMENT ,
  "NAME" CHAR(10)
);
insert into TABLE_8(name) values('test');
select LAST_INSERT_ID
```

:::warning 两种方法
建表的时候用 **IDENTITY** 则使用 `select @@IDENTITY;` 查询(类似于mysql)  
建表使用 **PRIMARY KEY AUTO_INCREMENT** 则使用 `select LAST_INSERT_ID;` 进行查询(类似于oracle)
:::

## DPI 开发

:::tip 开发 demo
具体代码实现，可以参考[此项目](https://github.com/cat-chat-meow/dameng)
:::

关于绑定变量，执行 insert 语句时

```cpp
// CITY VARCHAR
// correct
sdbyte sql[] = "INSERT INTO TEST001 (NAME, CITY) values('haha', ?)";
// wrong
sdbyte sql[] = "INSERT INTO TEST001 (NAME, CITY) values('haha', '?')";
```

但是，对于 select 绑定变量时，入参需要加引号？

```cpp
// c1 VARCHAR c2 INT
// wrong
sdbyte sql[] = "select c1,c2,c3 from dpi_demo where c1 = ?";
// correct
sdbyte sql[] = "select c1,c2,c3 from dpi_demo where c1 = '?' and c2 = ?";
```

## 迁移

### 从 mysql 迁移

#### 方法变更

||mysql|方法说明|达梦|[方法说明][dameng_dpi]|
|:----|:----|:----|:----|:----|
|转义 escape|`mysql_real_escape_string`||null||
|初始化 init|`mysql_library_init`||null||
|当前列集合 fetch length|`mysql_fetch_lengths`|数组的每一个元素对应结果集中的一列数据，该元素的值表示该列在结果集中所查询到的数据大小|null||
|释放结果集 free ret|`mysql_free_result`||`dpi_free_con`||
|列数 cols|`mysql_field_count`||`dpi_number_columns`||
|查询行数/影响行数|[`mysql_affected_rows`][mysql_affected_rows]|`mysql_affected_rows()` may be called immediately after executing a statement with `mysql_real_query()` or `mysql_query()`. It returns the number of rows changed, deleted, or inserted by the last statement if it was an UPDATE, DELETE, or INSERT. For SELECT statements, `mysql_affected_rows()` works like `mysql_num_rows()`.|`dpi_row_count`||
|获取当前连接的结果集|`mysql_store_result`||`dpi_fetch_scroll`/`dpi_fetch`||
|获取上一次插入操作的自增长 ID 值|`mysql_insert_id`||null||
|获取每行数据|`mysql_fetch_row`||`dpi_fetch`||
|...|...|...|...|...|

#### 开发实践

:::code-group

```cpp [mysql]
MYSQL_ROW row;
unsigned long *lengths;
unsigned int num_fields;
unsigned int i;

row = mysql_fetch_row(result);
if (row)
{
    num_fields = mysql_num_fields(result);
    // also, can use num_fields = mysql_field_count(MYSQL *mysql).
    lengths = mysql_fetch_lengths(result);
    for(i = 0; i < num_fields; i++)
    {
        printf("Column %u is %lu bytes in length.\n",
              i, lengths[i]);
    }
}
```

```cpp [dameng8]
// todo
```

:::

## 其他

### 系统表

|系统表||
|:----|:----|
|`SYSOBJECTS`|可查询所有对象|
|`SYSCOLUMNS`|可查询表的所有列的信息|
|`dba_objects`||
|`dba_tables`|可查询表信息（包括系统表）|
|`dba_users`|可查询系统所有用户|
|`dba_data_files`|可查询数据库文件信息|
|`dba_segments`|可查询模式|
|`all_tables`|可查询所有用户的表|
|`user_tables`|可查询当前用户所拥有的所有表|
|`user_tablespaces`|可查询表空间|

### 系统视图

|系统视图||
|:----|:----|
|`v$database`|可查询数据库信息|
|`v$tablespace`|可查询表空间信息|
|`v$datafile`|可查询数据文件信息|
|`v$dm_arch_ini`|可查询归档信息|
|`v$dm_ini`|可查询参数|
|`v$instance`|可查询数据库实例信息|
|`v$rlogfile`|可查询日志文件信息|
|`v$systeminfo`|可查询操作系统CPU和内存的信息|
|`v$version`|可查询数据库版本|
|`v$wait_class`|可查询等待（wait）情况|

[mysql_affected_rows]: https://dev.mysql.com/doc/c-api/5.7/en/mysql-affected-rows.html
[dameng_dpi]: https://eco.dameng.com/document/dm/zh-cn/pm/dpi-rogramming-guide.html
