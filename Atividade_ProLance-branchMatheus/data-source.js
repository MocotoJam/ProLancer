require('reflect-metadata');
const { DataSource } = require('typeorm')
const User = require('./entity/User');
const Job = require('./entity/Job');
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "MocotoJam",
    password: "1234",
    database: "atividade",
    synchronize: true,
    logging: false,
    entities: [User, Job],
    migrations: [],
    subscribers: [],
})

module.exports = AppDataSource;