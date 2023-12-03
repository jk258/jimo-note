# sql基本操作

## 添加数据
语法
```sql
INSERT INTO 表(字段1,字段2) VALUES (值1,值2);
```
例如：往表`students`中添加一条记录
```sql
INSERT INTO students(sname,sage) VALUES ("任",27);
```
## 删除数据
语法：
```sql
-- 如果不加where条件，删除表中所有记录
DELETE FROM 表 WHERE 删除条件
```
例如：删除表`students`中的记录
```sql
DELETE FROM students WHERE sno=1
DELETE FROM students -- 删除表中所有记录
```
## 修改数据
语法
```sql
UPDATE 表 SET 字段1=值1,字段2=值2 WHERE 修改条件
```
例如：将表`students`中sno为1的记录的sname改为test，sage改为28
```sql
UPDATE students SET sname="test",sage=28 WHERE sno=7
```
## 查询数据
### 简单查询
```sql
SELECT *|字段1,字段2... FROM 表
```
例如
```sql
SELECT * FROM students
SELECT sno as `学号`,sname as `姓名`,sage as `年龄` FROM students -- as将字段作为别名查询返回
```
### 条件查询
语法：
```sql
SELECT *|字段1,字段2... FROM 表 WHERE 条件语句
```
例如
```sql
SELECT * FROM students WHERE sage=26
```
- 不等于
    ```sql
    年龄不等于26的
    SELECT * FROM students WHERE sage!=26
    ```
- 从什么到什么
    ```sql
    -- 年龄从26到50
    SELECT * FROM students WHERE sage BETWEEN 26 AND 50
    ```
- 模糊查询
    ```sql
    -- 查询名字带m的人的信息
    SELECT * FROM students WHERE sname LIKE "%m%"
    ```
- `in`、`and`和`or`
    ```sql
    -- 查询年龄26和50的人
    SELECT * FROM students WHERE sage IN(26,50)

    -- 通过or和and链接
    SELECT * FROM students WHERE sage=26 OR sage=50
    ```
### group by(分组)
- 聚合函数：SUM(),COUNT(),AVG(),MIN(),MAX()
- 聚合函数一般与`group by`子句搭配使用
- 凡是没有放在聚合函数内的东西，都要堆在group by后面  
案例如下：
```sql
-- 统计每个班级的平均成绩是多少
SELECT class,AVG(score) FROM stu GROUP BY class

-- 统计男生女生有多少人
SELECT sgender,COUNT(*),AVG(score),MAX(score),MIN(score) FROM stu GROUP BY sgender


-- 统计每个班级的男生女生数量
SELECT class,sgender,COUNT(*) FROM stu GROUP BY class,sgender 
```
对统计结果进行筛选`HAVING`
```sql
-- 统计出平均成绩合格的班级
SELECT class,AVG(score) FROM stu GROUP BY class HAVING AVG(score)>=60
```
## 排序
`ORDER BY`排序，`ASC`正序，`DESC`倒序
```sql
SELECT * FROM stu ORDER BY score ASC
SELECT * FROM stu ORDER BY score DESC
```
## LIMIT 
从哪条开始，取多少条`(n-1)*pageSize,pageSize`
```sql
SELECT * FROM stu LIMIT 3,3
```
