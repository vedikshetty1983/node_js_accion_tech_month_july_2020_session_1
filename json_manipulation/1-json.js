const fs= require('fs')

const book = {
    title: 'Alchemist',
    author: 'Paulo Coelho'
}



const dataBuffer = fs.readFileSync('1-json.json')
const dataJson=dataBuffer.toString()
const data= JSON.parse(dataJson)
data.name='Vedik Shetty'
data.age='35'
const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)