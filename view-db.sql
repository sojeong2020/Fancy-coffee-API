\c fancy_coffee

SELECT * FROM options;
SELECT * FROM tastes;
SELECT * FROM coffee;
SELECT * FROM comments;

SELECT coffee.* , COUNT(comments.coffee_id) AS comment_count 
FROM coffee 
LEFT JOIN comments ON comments.coffee_id = coffee.coffee_id
GROUP BY coffee.coffee_id
ORDER BY coffee_id ASC;

SELECT * FROM tastes
UNION
SELECT *
FROM options;

