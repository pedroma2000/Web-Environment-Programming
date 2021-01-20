/**
 * Ficha prática 4 - Exercicio 3
 * @author Pedro Machado "pedroma2000"
 */
const fs = require('fs')

function read(path, callback) {
    return new Promise((resolve, reject) => {
        let data = ''
        const stream = fs.createReadStream(path)

        stream.on('data', (chunk) => {
            data += chunk
        })
        stream.on('end', () => {
            resolve(data)
        })
        stream.on('error', (err) => {
            reject(err)
        })
    })

}

module.exports = read