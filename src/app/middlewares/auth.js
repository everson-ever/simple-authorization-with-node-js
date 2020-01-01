const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authJwtConfig = require('./../../config/authJwt');




module.exports = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ message: "Token Not Provided", status: false });

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authJwtConfig.secretKey);

        req.userId = decoded.id;
        req.userName = decoded.name;
        req.userRole = decoded.role

        return next();
    }
    catch(err) {
        return res.status(401).json({ message: "Token Invalid", status: false });
    }

}