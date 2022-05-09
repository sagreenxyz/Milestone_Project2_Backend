DROP VIEW IF EXISTS view_answers;

CREATE VIEW view_answers
AS
SELECT
	answer_id,
	question_id,
	answer_text,
	flag_correct
FROM answers;

SELECT * FROM view_answers;
