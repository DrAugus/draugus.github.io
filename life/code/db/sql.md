# SQL

## 复制表

> [refer: SQL INSERT INTO SELECT](https://www.runoob.com/sql/sql-insert-into-select.html)

```sql
-- 从一个表中复制所有的列插入到另一个已存在的表中
INSERT INTO table2 SELECT * FROM table1;
-- 只复制希望的列插入到另一个已存在的表中
INSERT INTO table2 (column_name(s)) 
  SELECT column_name(s) FROM table1;
-- 复制表结构及其数据
create table table_name_new as 
  select * from table_name_old
-- 只复制表结构
create table table_name_new as 
  select * from table_name_old where 1=2;
-- or
create table table_name_new 
  like table_name_old
-- 只复制表数据 如果两个表结构一样
insert into table_name_new 
  select * from table_name_old
-- 只复制表数据 如果两个表结构不一样
insert into table_name_new(column1,column2...) 
  select column1,column2... from table_name_old
```

## CASE WHEN

```sql
SELECT id, status = 'new' from basin WHERE 
  type = 'v' AND status in ('normal', 'new')
-- same
SELECT id, CASE WHEN status = 'new' THEN 1 ELSE 0 END 
  as status FROM basin 
  WHERE type = 'v' AND status in ('normal', 'new')
```
