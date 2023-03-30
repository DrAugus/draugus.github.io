# 达梦

|系统表||
|:----|:----|
|SYSOBJECTS|可查询所有对象|
|SYSCOLUMNS|可查询表的所有列的信息|
|dba_objects||
|dba_tables|可查询表信息（包括系统表）|
|dba_users|可查询系统所有用户|
|dba_data_files|可查询数据库文件信息|
|dba_segments|可查询模式|
|all_tables|可查询所有用户的表|
|user_tables|可查询当前用户所拥有的所有表|
|user_tablespaces|可查询表空间|

|系统视图||
|:----|:----|
|v$database|可查询数据库信息|
|v$tablespace|可查询表空间信息|
|v$datafile|可查询数据文件信息|
|v$dm_arch_ini|可查询归档信息|
|v$dm_ini|可查询参数|
|v$instance|可查询数据库实例信息|
|v$rlogfile|可查询日志文件信息|
|v$systeminfo|可查询操作系统CPU和内存的信息|
|v$version|可查询数据库版本|
|v$wait_class|可查询等待（wait）情况|

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
CREATE TABLE example_schema.example_table (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INTEGER NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);
```

这将在 `example_schema` 模式下创建一个具有 `id`、`name`、`age` 和 `email` 列的表。其中，`id` 列作为主键，`email` 列具有唯一约束条件。你可以将这些列改为适合你的应用程序的名称和数据类型。

## 查询

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
