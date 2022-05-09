DROP VIEW IF EXISTS view_questions_answers;

CREATE VIEW view_questions_answers
AS
SELECT
	q.question_id id,
	q.category,
	q.question_type,
	q.difficulty,
	q.question_text question,
	a.answer_text correct_answer,
	(
		SELECT ARRAY(
			SELECT
				answer_text
			FROM answers b
			WHERE q.question_id = b.question_id
			AND b.flag_correct = 'false'
		)
	) incorrect_answers
FROM view_questions q
INNER JOIN answers a
	ON q.question_id = a.question_id
	AND a.flag_correct = 'true';

SELECT * FROM view_questions_answers;
