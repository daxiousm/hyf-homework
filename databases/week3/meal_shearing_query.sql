USE meal_share;

-- Get all meals

SELECT * 
FROM Meal;
 
-- Add a new meal
INSERT INTO meal
VALUE(null,'Doro wot', 'chicken stew', 'Tagensvej 43','2020-08-22', 5, (175*5), '2020-08-19');

-- Get a meal with any id, fx 17

SELECT *
FROM Meal
WHERE ID = 12;

-- update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal
SET title = 'tibs', price = 200
WHERE id = 4;

-- Delete a meal with any id, fx 1

DELETE 
FROM meal
WHERE id = 5;

-- Get all reservations

SELECT *
FROM reservation;

-- Add a new reservation

INSERT INTO 
reservation (number_of_guests, meal_id, created_date,contact_phonenumber,contact_name,contact_email)
VALUE(5, 4, '2020-08-19','+4553723538','Dax','dax@gmail.com');

-- Get a reservation with any id, fx 7

SELECT *
FROM Reservation
WHERE id = 7;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 4
WHERE id = 4;

-- Delete a reservation with any id, fx 2

DELETE 
FROM Reservation
WHERE id = 2;

-- Get all reviews

SELECT *
FROM review;

-- Add a new review 

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUE('very good', 'tasty chicken stew more flavourful',12,4.5,'2020-08-18');

-- Get a review with any id, fx 1

SELECT *
FROM review
WHERE id = 3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review
SET created_date = '2020-08-19'
WHERE id = 12;

-- Delete a review with any id, fx 1

DELETE 
FROM review
WHERE id = 5;

-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90

SELECT *
FROM meal
WHERE price < 250;

-- Get meals that still has available reservations

SELECT meal.id,
	   meal.title,
       meal.max_reservation,
       SUM(reservation.number_of_guests) AS total_guests
FROM meal
JOIN reservation 
	ON Reservation.meal_id = meal.id
	GROUP BY meal.id
	HAVING total_guests < meal.max_reservation;
        
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT title
FROM meal
WHERE meal.title 
	LIKE '%tibs%';


-- Get meals that has been created between two dates

SELECT *
FROM meal
WHERE created_date BETWEEN '2020-01-01' AND '2020-08-20';

-- Get only specific number of meals fx return only 5 meals

SELECT *
FROM meal
LIMIT 4;

-- Get the meals that have good reviews

SELECT meal.title,
	   AVG(review.stars) AS rating
FROM meal
JOIN review ON
		review.meal_id = meal.id
        GROUP BY meal.id
        HAVING rating > 4;

-- Get reservations for a specific meal sorted by created_date

SELECT reservation.id,
	   reservation.created_date
FROM Reservation
WHERE reservation.meal_id = 12
ORDER BY reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews

SELECT meal.title,
	   AVG(review.stars) AS rating
FROM meal
JOIN review ON
		review.meal_id = meal.id
        GROUP BY meal.title
        ORDER BY rating ASC;



