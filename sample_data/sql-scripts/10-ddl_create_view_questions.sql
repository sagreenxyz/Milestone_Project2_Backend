DROP VIEW IF EXISTS view_questions;

CREATE VIEW view_questions
AS
SELECT
	A.question_id,
	B.category,
	C.question_type,
	D.difficulty,
	A.question_text
FROM questions A
INNER JOIN categories B
	ON A.category_id = B.category_id
INNER JOIN question_types C
	ON A.question_type_id = C.question_type_id
INNER JOIN difficulties D
	ON A.difficulty_id = D.difficulty_id;
	
SELECT * FROM view_questions;
