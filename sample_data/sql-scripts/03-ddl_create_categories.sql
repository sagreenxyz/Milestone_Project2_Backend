DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
	category_id SERIAL PRIMARY KEY,
	category VARCHAR(255) NOT NULL
);

INSERT INTO categories (category)
SELECT DISTINCT question_category FROM import_questions
ORDER BY question_category;

SELECT * FROM categories
