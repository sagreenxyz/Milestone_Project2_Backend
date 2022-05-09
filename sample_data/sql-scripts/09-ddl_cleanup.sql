ALTER TABLE questions
DROP COLUMN IF EXISTS question_answer1,
DROP COLUMN IF EXISTS question_answer2,
DROP COLUMN IF EXISTS question_answer3,
DROP COLUMN IF EXISTS question_answer4;

DROP TABLE import_questions;
