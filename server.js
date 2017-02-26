var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  article-One: {
  title: 'articleOne',
  heading: 'Article One',
  date: 'Feb 26, 2017',
  content: `<p>This is the content of first article.This is the content of first article.This is the content of first article.This is the content of first article.</p>`
},
  article-Two: {
  title: 'articleTwo',
  heading: 'Article Two',
  date: 'Feb 26, 2017',
  content: `<p>This is the content of first article.This is the content of first article.This is the content of first article.This is the content of first article.</p>`
},
  article-Three: {
  title: 'articleThree',
  heading: 'Article Three',
  date: 'Feb 26, 2017',
  content: `<p>This is the content of first article.This is the content of first article.This is the content of first article.This is the content of first article.</p>`
},
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
         <head>
            <title>
          ${title}
             </title>
        <meta name='viexport' content='width-device-width, initial-scale-1' />
        <link href="/ui/style.css" rel="stylesheet" />
         </head>
        <body>
          <div class='container'>
              <div>
                  <a href = '/'>home</a>
              </div>
            <hr/>
                <h3>
               ${heading}
                </h3>
                <div>
                Feb 25,2017
                </div>
                <div>
                ${content}
                 </div>
            </div>
        </body>
    </html>
    
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
    // articleName == article-one :articleName means (root match) article name will be article-one ; it will convert it into var
    //articles[articlesname] == {} content object for article-one
    var articleName = req.m.articleName
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
