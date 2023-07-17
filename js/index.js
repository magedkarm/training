var btn = document.getElementById("btnJs")
var qoutes = [
    {
        qoute: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    {
        qoute: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        qoute: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        qoute: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mahatma Gandhi"
    },
    {
        qoute: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    },
    {
        qoute: "“A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard"
    },
    {
        qoute: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author: "― Oscar Wilde"
    },
    {
        qoute: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "― Mahatma Gandhi"
    },
    {
        qoute: "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky"
    },
    {
        qoute: "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche"
    },
    {
        qoute: "“We are all in the gutter, but some of us are looking at the stars.”",
        author: "― Oscar Wilde"
    },
]







btn.onclick = function () {
    var randomNum = Math.trunc(Math.random() * qoutes.length)

    document.getElementById("quote").innerHTML = qoutes[randomNum].qoute;
    document.getElementById("author").innerHTML = qoutes[randomNum].author



}


