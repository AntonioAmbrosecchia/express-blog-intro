const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("server is running");
});

app.get(express.static('public'));

const colazione = [
    {
        id: 1,
        name: 'Ciambellone',
        content: 'Il ciambellone è un dolce soffice e profumato, perfetto per la colazione o la merenda.',
        img: '/images/ciambellone.jpeg',
        tags: ['dolce', 'cioccolato']
    },
    {
        id: 2,
        name: 'Cracker barbabietola',
        content: 'I cracker alla barbabietola sono un ottimo snack salato, perfetti per uno spuntino leggero.',
        img: '/images/cracker_barbabietola.jpeg',
        tags: ['salato', 'vegano']
    },
    {
        id: 3,
        name: 'Pane fritto dolce',
        content: 'Il pane fritto dolce è un dolce tipico della tradizione lombarda, perfetto per la colazione o la merenda.',
        img: '/images/pane_fritto_dolce.jpeg',
        tags: ['dolce', 'fritto']
    },
    {
        id: 4,
        name: 'pasta barbabietola',
        content: 'La pasta alla barbabietola è un primo piatto colorato e saporito, perfetto per un pranzo leggero.',
        img: '/images/pasta_barbabietola.jpeg',
        tags: ['salato', 'pasta']
    },
    {
        id: 5,
        name: 'Torta paesana',
        content: 'La torta paesana è un dolce rustico e goloso, perfetto per la colazione o la merenda.',
        img: '/images/torta_paesana.jpeg',
        tags: ['dolce', 'cioccolato']
    }
]

app.get("/bacheca", (req, res) => {
    res.send(colazione);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);

});






























