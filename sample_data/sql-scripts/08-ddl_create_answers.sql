DROP TABLE IF EXISTS answers;

CREATE TABLE answers (
	answer_id SERIAL PRIMARY KEY,
	question_id INTEGER NOT NULL,
	CONSTRAINT FK_answers_questions FOREIGN KEY (question_id) REFERENCES questions(question_id),
	answer_text VARCHAR(255) NOT NULL,
	flag_correct BOOLEAN
);

INSERT INTO answers (
	question_id,
	answer_text,
	flag_correct
)
SELECT
	question_id,
	question_answer1,
	TRUE
FROM questions
UNION
SELECT
	question_id,
	question_answer2,
	FALSE
FROM questions
UNION
SELECT
	question_id,
	question_answer3,
	FALSE
FROM questions
WHERE question_answer3 IS NOT NULL
UNION
SELECT
	question_id,
	question_answer4,
	FALSE
FROM questions
WHERE question_answer4 IS NOT NULL;

SELECT * FROM answers;
