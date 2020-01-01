const routes = require('express').Router();
const roles = require('./config/role');

const authMiddleware = require('./app/middlewares/auth');
const authorizationMiddleware = require('./app/middlewares/autheticateAdmin');

const UserController = require('./app/controllers/UserController');
const LoginController = require('./app/controllers/LoginController');
const HomeController = require('./app/controllers/HomeController');

routes.post('/register', UserController.store); // free
routes.post('/login', LoginController.store); // free

routes.get('/users', [authMiddleware,authorizationMiddleware(roles.admin) ], UserController.index); // Only admin
routes.get('/home', authMiddleware, HomeController.index); // all autheticated users


module.exports = routes;
