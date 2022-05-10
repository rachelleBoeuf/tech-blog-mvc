const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//custom handlebar helpers we need
handlebars.create({
  helpers: {
    projectMeta: function (date, user) {
      //we need to format the date to easier human readable
      let created = new Date(date);
      let output = created.getMonth() + '/' + created.getDate() + '/' + created.getFullYear();

      //tag the user onto the end as well
      output += ' - ' + user;

      return output;
    },
  },
});

//setup handlebars defaults
app.set('view engine', 'tmpl');
app.engine(
  'tmpl',
  handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'tmpl',
  })
);
app.use(express.static('public'));

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
