DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
	question_id SERIAL PRIMARY KEY,
	category_id INTEGER NOT NULL,
	CONSTRAINT FK_questions_categories FOREIGN KEY (category_id) REFERENCES categories(category_id),
	question_type_id INTEGER NOT NULL,
	CONSTRAINT FK_questions_types FOREIGN KEY (question_type_id) REFERENCES question_types(question_type_id),
	difficulty_id INTEGER NOT NULL,
	CONSTRAINT FK_questions_difficulties FOREIGN KEY (difficulty_id) REFERENCES difficulties(difficulty_id),
	question_text VARCHAR(255) NOT NULL,
	question_answer1 VARCHAR(255) NOT NULL,
	question_answer2 VARCHAR(255) NOT NULL,
	question_answer3 VARCHAR(255),
	question_answer4 VARCHAR(255)
);

INSERT INTO questions (
	category_id,
	question_type_id,
	difficulty_id,
	question_text,
	question_answer1,
	question_answer2,
	question_answer3,
	question_answer4
)
SELECT
	question_category_id,
	question_type_id,
	question_difficulty_id,
	question_text,
	CASE WHEN question_answer1 = 'null' THEN NULL ELSE question_answer1 END,
	CASE WHEN question_answer2 = 'null' THEN NULL ELSE question_answer2 END,
	CASE WHEN question_answer3 = 'null' THEN NULL ELSE question_answer3 END,
	CASE WHEN question_answer4 = 'null' THEN NULL ELSE question_answer4 END
FROM import_questions;

SELECT * FROM questions ORDER BY question_id;
