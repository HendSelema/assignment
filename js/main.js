

var arrayOfQuotes=[
    {
        "quote":"To live is the rarest thing in the world. Most people exist, that is all.",
        "auther":"Oscar Wilde"
    },
    {
        "quote":"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "auther":" Mahatma Gandhi"
    },
    {
        "quote":"A friend is someone who knows all about you and still loves you.",
        "auther":"Elbert Hubbard"
    },
    {
        "quote":"You only live once, but if you do it right, once is enough.",
        "auther":"Mae West"
    },
    {
        "quote":"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "auther":"Dr. Seuss"
    },
    {
        "quote":"So many books, so little time.",
        "auther":"Frank Zappa"
    }



]  


function randomQuote(){
    var random = Math.floor((Math.random()*arrayOfQuotes.length + 1));
    document.getElementById("quoteOutput").innerHTML=`"${arrayOfQuotes[random].quote}"`;
    document.getElementById("authorOutput").innerHTML=`"${arrayOfQuotes[random].auther}"`;

}



