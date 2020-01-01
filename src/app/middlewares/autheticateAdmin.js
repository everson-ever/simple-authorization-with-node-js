
module.exports = authorization;


function authorization(roles = []) {

    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        (req, res, next) => {
            if (roles.length && !roles.includes(req.userRole)) {

                return res.status(401).json({ message: 'Unauthorized' });
            }

            next();
        }
    ];


}
