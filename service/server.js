var	express = require('express'),
	fileUpload = require('express-fileupload'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	appRoutes = require('./routing/appRoutes'),
	cors = require('cors'),
	config = require('./config/database');
const	port = process.env.PORT || 3000,
		app = express();
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
mongoose.Promise = global.Promise;
mongoose.connect(config.db,{ autoIndex: false }).then(
		() => {console.log('DB Connected!')},
		err => {console.log('DB Connection Failed :( %S',err)}
	);
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.use('/article',appRoutes);
const	server = app.listen(port,function(){
		console.log('Listining on port: %s', port);
	});


//TO DO
passport.use(new Strategy({
    clientID: config.fb.app_id,
    clientSecret: config.fb.app_secret,
    callbackURL: config.fb.callback
  },
  function(access_token, refreshToken, profile, cb) {
  	//TO DO
    //console.log(accessToken);
}));
app.get('/login/facebook',
passport.authenticate('facebook'));