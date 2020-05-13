const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.static('build'))

const mangadex = require('mangadex-api')

app.get('/manga/:id', (req, res) => {
    mangadex.getManga(req.params.id).then(({ manga, chapter }) => {
        chapter = chapter.filter(ch => ch.lang_name === 'English')
        const mangaInfo = {
            Manga: manga,
            Chapter: chapter
        }
        res.json(mangaInfo)
    })
})

app.get('/chapters/:id', (req, res) => {
    mangadex.getChapter(req.params.id).then(chapter => {
        res.json(chapter)
    }) 
})

app.get('/', (req, res) => {
    res.send('Welcome to Manga Reader backend')
})

app.listen(3000, () => {
    console.log('Server running on 3000')
})