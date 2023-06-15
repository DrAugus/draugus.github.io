---
date: 2021-08-19 10:23:13
---

# mongoDB

## 切换数据库

`use test_augus`如果数据库不存在会自动创建 test_augus

`show dbs` 查看所有数据库

新建数据库必须插入数据才会显示在列表中 `db.test_augus.insert({"name":"augus"})`

## user op

`show users`
`db.createUser({user: "ssss",pwd: "oracle", roles: [ { role: "root", db: "admin" } ]})`

## find

`db["test_sensitive_0"].find()`
`db.test_sensitive_0.find().count();`
`db.test_sensitive_0.find()`
`db.getSiblingDB("test_ddl").getCollection("test_xyz").find({ })`
`db.getCollection("test_xyz").find({}).limit(88)`

## distinct

`db["test_sensitive_0"].distinct('name')`
`db.test_xyz.distinct("name",{"age":20})`

`db.revokeRolesFromUser( "mongoTestAdmin", [ { role: "read", db: "admin" }, "readWrite" ], { w: "majority" } )`

`db.updateUser( "root",{pwd: "oracle", roles: [ { role: "read", db: "test1" } ]})`
`db.updateUser('root',{pwd:'633636',roles:[{role:'read',db:'springbucks'}]})`

`db.test_sensitive_0.updateOne( { type: "book", item : "journal" }, { $set : { qty: 10 } }, { upsert :true } )`

`db.changeUserPassword("root","gag");`

`db.dropUser("ssss")`

`db.test_xyz.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])`

`db.test_xyz.insertOne({_id:"faf",id:"af",age:"21",gender:"male",name:"gag"})`

`db.test_sensitive_0.updateOne( { type: "book", item : "journal" }, { $set : { qty: 10 } }, { upsert :true } )`

`db.test_sensitive_0.deleteOne({'name':'James'})`

`db.test_xyz.insert( { _id: 14, type: "misc", item: "card", qty: 15 } )`

`show collections`

`db.createCollection("afafaff", { capped : true, size : 5242880, max : 5000 } )`
`db.log.drop()`

`db.createView(   "firstView",  "demo113",  [ { $project: { "Name": "$Details.Name", Subject: 1 } } ])`

`db.test_xyz.createIndex({'age':22})`

`db.log.drop()`

`show dbs db`

`use augus_drop db.augus_drop.insertOne({_id:1,name:"test"})`
`db.dropDatabase()`

```sql
use test1 db.createRole(
{ role: "afafa", privileges: [
{ resource: { cluster: true }, actions: [ "addShard" ] }, { resource: { db: "config", collection: "" }, actions: [ "find", "update", "insert", "remove" ] }, { resource: { db: "users", collection: "usersCollection" }, actions: [ "update", "insert", "remove" ] }, { resource: { db: "", collection: "" }, actions: [ "find" ] }
], roles: [
{ role: "read", db: "test1" }
]
}, { w: "majority" , wtimeout: 5000 }
)
```

`use test db.dropRole( "readWrite" )`

`db.createRole()`

`use admin db.createRole({role:"mongostatMangeRole1",privileges:[{resource:{cluster:true},actions:["serverStatus"]}]})`

`db.createRole({role:"bigRole1",privileges:[{resource:{anyResource:true},actions:["anyAction"]}],roles:[]})`

`db.dropRole("bigRole1")`

`db.grantRolesToUser("mongoTestAdmin", [{role:"readWrite", db:"admin"}])`

```sql
db.grantRolesToRole(
"mongoTestAdmin",
[ "write" ],
)
```

```sql
db.grantRolesToRole(
"mongoTestAdmin",
[ "productsReader" ], { w: "majority" , wtimeout: 5000 }
)
```
