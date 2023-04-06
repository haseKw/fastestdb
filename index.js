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

set(data, value){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[data] = value
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}
find(data){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if(!dosya[data]) return console.log(`${chalk.bold.red("No such data found!")}`)
    return dosya[data]
}
control(data) {
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    return dosya[data] ? true : false    
}
delete(data) {
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if(!dosya[data]) return console.log(`${chalk.bold.red("No such data found!")}`)
    delete dosya[data]
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}
add(data, value){
    if(!data) return console.log(`${chalk.bold.red("No such data found!")}`)
    if(typeof value !== 'number') return console.log("Please enter a number as the value!")
    if(!this.control(data)) return console.log("The value you entered as data was not found in the database!")
    if(typeof this.find(data) !== 'number') return console.log("The value you choose to add a number must be a number!")
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[data] += value
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}
remove(data, value){
    if(!data) return console.log(`${chalk.bold.red("No such data found!")}`)
    if(typeof value !== 'number') return console.log("Please enter a number as the value!")
    if(!this.control(data)) return console.log("The value you entered as data was not found in the database!")
    if(typeof this.find(data) !== 'number') return console.log("The value you choose to subtract a number must be a number!")
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[data] -= value
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}

}
export default new fastestdb

/* Coded by haseKw | 2021 */