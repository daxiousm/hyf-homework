INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUE('play football', 'going to play football with my friends', 
'2020-08-17 15:00:00', '2020-08-17 16:00:00' , '2020-08-17 18:00:00', 3, NULL);
-- Change the title of a task
UPDATE task 
SET title = 'play football with IFC'
WHERE id= 36;

-- Change a task due date
UPDATE task
SET due_date = '2020-08-17 19:00:00'
WHERE id = 36;

-- Change a task status
UPDATE task
SET status_id = 1
WHERE id = 36;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 36;

-- Delete a task
  DELETE FROM task
  where id = 36;

