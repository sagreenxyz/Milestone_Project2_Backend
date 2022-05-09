const fs = require('fs')
const he = require('he')

const sourceFolder = './source-data'
const outTableName = 'import_questions'
const outFileName = `./sample_data/sql-scripts/02-seed-unnormalized.sql`
let outText = `INSERT INTO ${outTableName} (question_category, question_type, question_difficulty, question_text, question_answer1, question_answer2, question_answer3, question_answer4) VALUES \n`

const N = 81

for (let n = 1; n <= N; n++) {
    let data = require(`${sourceFolder}/response${n}.json`)
    for (let i = 0; i < data.results.length; i++) {
        let { category, type, difficulty, question, correct_answer, incorrect_answers } = data.results[i]
        outText += `('${category}', '`
        outText += `${type}', '`
        outText += `${difficulty}', '`
        outText += `${he.decode(question).replace(/'/g, '')}', '`
        outText += `${he.decode(correct_answer).replace(/'/g, '')}', '`
        outText += `${he.decode(incorrect_answers[0]).replace(/'/g, '')}', '`
        outText += `${incorrect_answers[1] ? he.decode(incorrect_answers[1]).replace(/'/g, '') : null}', '`
        outText += `${incorrect_answers[2] ? he.decode(incorrect_answers[2]).replace(/'/g, '') : null}')`
        outText += (n === N && i === data.results.length - 1) ? `` : `,\n`
    }
}

async function prepareSQL() {
    await fs.unlink(outFileName, () => { console.log(`Deleting ${outFileName}`) })

    await fs.appendFile(outFileName, outText, err => {
        if (err) throw err
    })

    return
}

prepareSQL();
