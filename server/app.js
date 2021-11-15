var express = require('express');  // Stiamo andano ad importare il modulo express 
const path = require('path'); // serve per definire un path

var app = express(); // Viene importato come callback, ma è una cosa standard

app.get('/',function(req,res){     // req rappresenta chi sta facendo la richiesta ovvero il browser, mentre res rappresenta l'oggetto server
res.sendFile(path.join(__dirname,'views/index.html'));

});

app.get('/pagina1',function(req,res){     // req rappresenta chi sta facendo la richiesta ovvero il browser, mentre res rappresenta l'oggetto server
    res.send("<h1>Ciao bello</h1>");
    
    });
app.listen(3000,function(){   // serve per connetterci ad una porta
    console.log("Server attivo sulla porta 3000");
});
