function newQuote() {
    var quotes = [
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        "“Darkness cannot drive out darkness: only light can do that.Hate cannot drive out hate: only love can do that.”",
        "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“It is better to be hated for what you are than to be loved for what you are not.”"
    ,"“We accept the love we think we deserve.”"
    ];
    var name = ["― Albert Einstein", "― Bernard M. Baruch", "― Martin Luther King Jr", "  ― Mahatma Gandhi","― Andre Gide","― Stephen Chbosky"];
    var both = Math.floor(Math.random()* name.length);

    document.getElementById("quote1").innerHTML = quotes[both];
    document.getElementById("name").innerHTML = name[both];

} 