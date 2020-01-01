const db = require('./../../database/config');
const jwt = require('jsonwebtoken');
const authJwtConfig = require('./../../config/authJwt');

class User {

    getAll(callback) {
        db.all('SELECT * FROM TbUser', callback);
    }

    get(email, password, callback) {
        db.all(`SELECT * FROM Tbuser WHERE email = '${email}' AND
         password = '${password}' LIMIT 1`, callback);
    }

    generateToken({id, role}) {

        return jwt.sign({id, role}, authJwtConfig.secretKey, {
            expiresIn: authJwtConfig.ttl
        })
    }

}

module.exports = new User();