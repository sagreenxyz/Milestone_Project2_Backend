const fs = require('fs')
const filePathDb = './sample_data/db.json'
const filePathDbBackup = './sample_data/db-backup.json'

fs.unlink(filePathDb, (err) => {
    if(err) {
        return console.log(err)
    }
    console.log('db.json deleted')
    fs.copyFile(filePathDbBackup, filePathDb, (err) => {
        if(err) {
            return console.log(err)
        }
        console.log('successfully copied db-backup.json to db.json')
    })
})

console.log('hi')