const knex = require("../database/knex");

module.exports = async function runMigrations() {
   try {
        await knex.migrate.latest();
        console.log('Migrations executadas com sucesso!');
    } 
    catch (error) {
        console.error('Erro ao executar as migrations:', error);
    }
}