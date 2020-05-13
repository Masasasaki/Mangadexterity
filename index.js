const express = require('express')
const app = express()
const mangadex = require('mangadex-api')

app.get('/', (req, res) => {
    mangadex.getManga(29298).then(({ manga, chapter }) => {
        const info = `Manga ${manga.title} has ${chapter.length} chapters!`
        chapter = chapter.filter(ch => ch.lang_name === 'English')
        mangadex.getChapter(chapter[0].id).then(chap => {
            console.log(chap.page_array[0])
            res.send(chap.page_array[0])
        })
    })
})

app.listen(3000, () => {
    console.log('Server running on 3000')
})