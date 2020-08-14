
select * from task ;
-- task 1
select count(*) as tasks_count from task;

-- task 2
select title from task
where due_date is null;

 -- task 3
select title from task
where status_id = 3;

-- task 4
select title from task
where status_id = 1 and  status_id = 2;


-- task 5
select * from task
ORDER BY created desc;

-- task 6
select title from task
order by created desc
LIMIT 3;

 -- task 7
 select title,due_date from task
 where description like '%database%' 
 or title like '%database%';
 
 -- task 8
SELECT
    task.title, 
    status.name 
FROM task
JOIN status 
	on task.status_id = status_id;

-- task 9
select status.name as statusName, count(task.status_id) as task_count
from task join status on task.status_id = status.id
group by status.id;

-- task10
select status.name as statusName, count(task.status_id) as task_count
from task join status on task.status_id = status.id
group by status.id
order by task_count desc;

 