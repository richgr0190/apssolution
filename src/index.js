const app = require('./app');

async function main () {
    await app.listen(app.get('port'))
    console.log('Servidor en puerto 8090')
}

main();
