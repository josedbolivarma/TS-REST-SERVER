import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', 'josedavid', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;