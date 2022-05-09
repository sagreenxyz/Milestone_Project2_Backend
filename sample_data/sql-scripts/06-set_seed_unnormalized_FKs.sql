UPDATE import_questions A
SET (question_category_id) = (
	SELECT category_id
	FROM categories B
	WHERE A.question_category = B.category
);

UPDATE import_questions A
SET (question_type_id) = (
	SELECT question_type_id
	FROM question_types B
	WHERE A.question_type = B.question_type
);

UPDATE import_questions A
SET (question_difficulty_id) = (
	SELECT difficulty_id
	FROM difficulties B
	WHERE A.question_difficulty = B.difficulty
);

SELECT *
FROM import_questions
