DROP TABLE IF EXISTS difficulties;

CREATE TABLE difficulties (
	difficulty_id SERIAL PRIMARY KEY,
	difficulty VARCHAR(255) NOT NULL
);

INSERT INTO difficulties (difficulty)
SELECT
	question_difficulty
FROM (
	SELECT DISTINCT
		question_difficulty,
		CASE
			WHEN question_difficulty = 'easy' THEN 1
			WHEN question_difficulty = 'medium' THEN 2
			WHEN question_difficulty = 'hard' THEN 3
		END seq
	FROM import_questions
) A
ORDER BY
	A.seq;

SELECT * FROM difficulties;
