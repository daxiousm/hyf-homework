USE meal_schema;

-- Get all meals

SELECT * 
FROM Meal;
 
-- Add a new meal
INSERT INTO meal
VALUE(1,'Doro wot', 'chicken stew', 'Tagensvej 43','2020-08-22', 5, (175*5), '2020-08-19'),
	 (2,'tibs stew', 'sauteed meat chunks', 'Tagensvej 43','2020-08-22', 4, (200*4), '2020-08-20'),
     (3,'lasagna', 'a wide, flat sheet of pasta', 'Tagensvej 43','2020-08-22', 3, (125*3), '2020-08-21'),
     (4,'burger', 'delicious', 'Tagensvej 43','2020-08-22', 3, (129*3), '2020-08-21');

-- Get a meal with any id, fx 17

SELECT *
FROM Meal
WHERE id = 1;

-- update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal
SET title = 'tibs', price = 190*4
WHERE id = 2;

-- Delete a meal with any id, fx 1

DELETE 
FROM meal
WHERE id = 4;

-- Get all reservations

SELECT *
FROM reservation;

-- Add a new reservation

INSERT INTO 
reservation (number_of_guests, meal_id, created_date,contact_phonenumber,contact_name,contact_email)
VALUE(5, 2, '2020-08-19','+4553723538','Dax','dax@gmail.com'),
     (5, 2, '2020-08-19','+4553723538','Dax','dax@gmail.com'),
     (5, 2, '2020-08-19','+4553723538','Dax','dax@gmail.com');

-- Get a reservation with any id, fx 7

SELECT *
FROM Reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 4
WHERE id = 3;

-- Delete a reservation with any id, fx 2

DELETE 
FROM Reservation
WHERE id = 2;

-- Get all reviews

SELECT *
FROM review;

-- Add a new review 

INSERT INTO review (id,title, description, meal_id, stars, created_date)
VALUE(1,'very good', 'tasty chicken stew more flavourful',1,4,'2020-08-18'),
     (2,'good', 'tasty beef chunks flavourful',2,4,'2020-08-19'),
     (3,'not bad', 'can be made better',3,3,'2020-08-20');

-- Get a review with any id, fx 1

SELECT *
FROM review
WHERE id = 2;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review
SET created_date = '2020-08-20'
WHERE id = 2;

-- Delete a review with any id, fx 1

DELETE 
FROM review
WHERE id = 3;

-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90

SELECT *
FROM meal
WHERE price < 1000;

-- Get meals that still has available reservations

SELECT meal.id,
	   meal.title,
       meal.max_reservation,
       SUM(reservation.number_of_guests) AS total_guests
FROM meal
JOIN reservation 
	ON Reservation.meal_id = meal.id
	GROUP BY meal.id
	HAVING total_guests > meal.max_reservation;
        
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT title
FROM meal
WHERE meal.title 
	LIKE '%tibs%';


-- Get meals that has been created between two dates

SELECT *
FROM meal
WHERE created_date BETWEEN '2020-08-18' AND '2020-08-22';

-- Get only specific number of meals fx return only 5 meals

SELECT *
FROM meal
LIMIT 2;

-- Get the meals that have good reviews

SELECT meal.title,
	   AVG(review.stars) AS rating
FROM meal
JOIN review ON
		review.meal_id = meal.id
        GROUP BY meal.id
        HAVING rating > 3
        ORDER BY rating DESC;

-- Get reservations for a specific meal sorted by created_date

SELECT reservation.id,
	   reservation.created_date
FROM reservation
WHERE reservation.meal_id = 2
ORDER BY reservation.created_date;

-- Sort all meals by average number of stars in the reviews

SELECT meal.title,
	   AVG(review.stars) AS rating
FROM meal
JOIN review ON
		review.meal_id = meal.id
        GROUP BY meal.title
        ORDER BY rating ASC;



