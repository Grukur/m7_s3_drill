import db from './src/db/db.js';
import app from './src/app.js';

const main = async () => {
    try {
        let client = await db.connect()
        let result = await client.query('select now();');
        console.log(
            'Conectado a la vase de datos, hora servidor: '
            );
            const PORT = 3000
            let servidor = app.listen(PORT)
            console.log(`Servidor corriendo en http://localhost:${PORT}`)
    }catch(error){
        console.log('error al iniciar servidor: ' + error)
    }
}

main()