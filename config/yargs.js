const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    default:false,
                    describe:'Muesta la tabla de multiplicar'
                })
                .option('h',{
                    alias:'hasta',
                    type: 'number',
                    default:10,
                    describe:'Hasta que numero se quiere multiplicar'
                })
                .check((argv,options) =>{
                    if (isNaN(argv.b)){
                        throw 'La base tiene que se un numero'
                    }
                    return true
                })
                .argv

module.exports = argv