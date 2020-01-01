const sqlite3 = require('sqlite3');


const db = new sqlite3.Database('databas');

// module.exports = {
//     createTables() {
//         // db.run(`CREATE TABLE TbUser(
//         //     id INTEGER PRIMARY KEY AUTOINCREMENT,
//         //     name VARCHAR(100) NOT NULL,
//         //     email VARCHAR(100) NOT NULL,
//         //     password VARCHAR(255) NOT NULL,
//         //     role VARCHAR(10) DEFAULT user
//         // )`);

//         // db.run(`INSERT INTO TbUser(name, email, password)
//         //  VALUES('Alcides', 'alcides@mail.com', '123456')`);


//         db.all('SELECT * FROM TbUser', (err, rows) => {
//             console.log(rows);
//         });

//         // db.run('DROP TABLE TbUser');

//     }

// }

module.exports = db;

