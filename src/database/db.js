const db = require('./config');

module.exports = {

    createTables() {
        db.run(`CREATE TABLE TbUser(
            id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(255) NOT NULL
        )`);

        let rows = db.run('SELECT * FROM Tbuser');
        console.log(rows);
    }
}