const fs = require('fs');
const path = require('path');

const dirUser20 = path.join(__dirname, 'dirUsers', '20_00')
const dirUser18 = path.join(__dirname, 'dirUsers', '18_00')


fs.readdir(dirUser20, (err, files) => {
    if (err) throw new Error(err);
    files.map(fileName => {
        fs.rename(path.join(__dirname,'dirUsers','20_00', fileName), path.join(__dirname,'dirUsers','18_00', fileName) ,err => {
            if (err) throw new Error(err);
        })
    })
})
fs.readdir(dirUser18, (err, files) => {
    if (err) throw new Error(err);
    files.map(fileName => {
        fs.readFile(path.join(dirUser18,fileName) , (err, data) => {
            if (JSON.parse(data).gender == 'male') {
                console.log('he is male')

                fs.rename(path.join(__dirname,'dirUsers','18_00',fileName), path.join(__dirname,'dirUsers','20_00',fileName), err => {
                    if (err) throw new Error(err);
                })
                return ;
            }
            console.log('she is female')
        })
    })
})

// Завдання з **
const randomFiles = path.join(__dirname + '/randomFiles')
function sortFiles(links) {
    fs.readdir(links, (err, files) => {
        if (err) throw new Error(err);

        files.forEach(fileName => {
            const pathWithFile = path.join(links, fileName)
            fs.stat(pathWithFile, (err, stats) => {
                if (stats.isDirectory()) {
                    return sortFiles(pathWithFile)
                }
                const pathSortFile = path.join(__dirname, 'sortFiles', fileName)
                fs.rename(pathWithFile, pathSortFile,
                    err => {
                        if (err) throw new Error(err);
                    })

            })
        })
    });
}

sortFiles(randomFiles);
