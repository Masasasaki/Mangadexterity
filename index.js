const express = require('express')
const app = express()
const mangadex = require('mangadex-api')

app.get('/', (req, res) => {
    mangadex.getManga(29298).then(({ manga, chapter }) => {
        const info = `Manga ${manga.title} has ${chapter.length} chapters!`
        res.send(info)
    })
})

app.listen(3000, () => {
    console.log('Server running on 3000')
})