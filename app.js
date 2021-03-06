const express = require('express');
const path = require('path');
const app = express();

const mainRoutes = require('./src/routes/main');
const userRoutes = require('./src/routes/users');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.set('view engine', 'ejs');

app.set('puerto', process.env.PORT || "3001");

app.listen(app.get('puerto'), () => {
    console.log(`[app] http://localhost:3001`);
} );


app.use(mainRoutes);
app.use(userRoutes);