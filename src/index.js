const methodOverride = require('method-override')
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const routes = require('./routes');
const db = require('./config/db');

var bodyParser = require('body-parser');
// connect to db
db.connect();

// http logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
// template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        helpers : {
            sum : (a,b) => (a + b),
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
