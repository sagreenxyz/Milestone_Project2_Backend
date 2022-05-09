DROP TABLE IF EXISTS import_questions;

CREATE TABLE import_questions (
	question_id SERIAL PRIMARY KEY,
	question_category VARCHAR(255) NOT NULL,
	question_category_id INTEGER,
	question_type VARCHAR(255) NOT NULL,
	question_type_id INTEGER,
	question_difficulty VARCHAR(255) NOT NULL,
	question_difficulty_id INTEGER,
	question_text VARCHAR(255) NOT NULL,
	question_answer1 VARCHAR(255) NOT NULL,
	question_answer2 VARCHAR(255) NOT NULL,
	question_answer3 VARCHAR(255),
	question_answer4 VARCHAR(255)
);

SELECT * FROM import_questions