//import { writeFileSync } from 'fs';
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base =5,listar,rango) =>{
    try {
        
        let salida = '';
        let consola = '';
        for (let i= 1;i<=rango;i++){
        //console.log('5 X ', i , '=', i*5);
            consola += (`${colors.green(base)} ${'x'.red} ${i} ${'='.green} ${base * i}\n`)
            salida += (`${base} x ${i} = ${base * i}\n`)
        }
        /* fs.writeFile(`tabla-${base}-.txt`,salida,(err) =>{
            if(err) throw err
            console.log(`Tabla ${base}.txt Creada con Exito`)
        }) */
        if(listar ===true){
            console.log('==================='.blue)
            console.log('  Tabla del:', colors.red(base))
            console.log('==================='.yellow)
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla ${base}.txt ha sido creada`;
        
    } catch (error) {
        throw error
    }

    
} 
const crearArchivoPromise = (base =5) =>{

    const promesa = new Promise((resolve,reject)=>{

        console.log('===================')
        console.log('  Tabla del:', base)
        console.log('===================')
        let salida = '';
        for (let i= 1;i<11;i++){
            salida += (`${base} x ${i} = ${base * i}\n`)
        }
        /* fs.writeFile(`tabla-${base}-.txt`,salida,(err) =>{
            if(err) throw err
            console.log(`Tabla ${base}.txt Creada con Exito`)
        }) */

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`Tabla ${base}.txt ha sido creada`);
        })

    return promesa
    
}

module.exports = {
    crearArchivo,
    crearArchivoPromise
}