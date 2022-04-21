const {crearArchivo, crearArchivoPromise} = require('./Helpers/Multiplicar') ;
const argv = require('./config/yargs')

console.clear();

//console.log(argv)

//console.log('base desde yarg', argv.base)
//console.log(process.argv)
//const [,,arg3='base=5'] = process.argv

//const [ , base=5] = arg3.split('=');
//console.log(base)

//const base = 10;

crearArchivo(argv.b,argv.l,argv.h).then(archivo =>console.log(archivo,'creadoooo')).catch(err => console.log(err));
//crearArchivoPromise(base).then(archivo => console.log(archivo,'creado')).catch(err => console.log(err));

