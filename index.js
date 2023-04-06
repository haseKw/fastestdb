/* Coded by haseKw | 2021 */

import fs from "fs";
import chalk from "chalk";

if (!fs.existsSync('./database.json')) {
    fs.writeFile('./database.json', "{}", (err) => {
        if (err) throw err;
        console.log(`${chalk.bold.green("FastestDB : File successfully created!")}`);
    });
}

class fastestdb {

    constructor(){

    }

set(veri, değer){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] = değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}
find(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if(!dosya[veri]) return console.log(`${chalk.bold.red("No such data found!")}`)
    return dosya[veri]
}
control(veri) {
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    return dosya[veri] ? true : false    
}
delete(veri) {
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if(!dosya[veri]) return console.log(`${chalk.bold.red("No such data found!")}`)
    delete dosya[veri]
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}
add(veri, değer){
    if(!veri) return console.log(`${chalk.bold.red("No such data found!")}`)
    if(typeof değer !== 'number') return console.log("Please enter a number as the value!")
    if(!this.kontrol(veri)) return console.log("The value you entered as data was not found in the database!")
    if(typeof this.bul(veri) !== 'number') return console.log("The value you choose to add a number must be a number!")
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] += değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}
remove(veri, değer){
    if(!veri) return console.log(`${chalk.bold.red("No such data found!")}`)
    if(typeof değer !== 'number') return console.log("Please enter a number as the value!")
    if(!this.kontrol(veri)) return console.log("The value you entered as data was not found in the database!")
    if(typeof this.bul(veri) !== 'number') return console.log("The value you choose to subtract a number must be a number!")
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] -= değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}

}
export default new fastestdb

/* Coded by haseKw | 2021 */