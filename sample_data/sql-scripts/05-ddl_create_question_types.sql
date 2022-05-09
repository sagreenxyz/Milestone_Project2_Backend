DROP TABLE IF EXISTS question_types;

CREATE TABLE question_types (
	question_type_id SERIAL PRIMARY KEY,
	question_type VARCHAR(255) NOT NULL
);

INSERT INTO question_types (question_type)
SELECT DISTINCT question_type FROM import_questions
ORDER BY question_type;

SELECT * FROM question_types;
