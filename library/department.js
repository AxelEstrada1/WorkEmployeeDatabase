const inquirer =  require ('inquirer');
const { start } = require('../index');
const mysql = require('mysql2');
const pool = require("../config/connnections")

async function viewAllDepartments() {
    try {
        const [rows] = await pool.query('SELECT * FROM department');
        console.table(rows);
        return rows;
    } catch (err) {
        console.error(err);
        //start();//
    }
}
async function addDepartment() {
    return new Promise(async (resolve, reject) => {
        try {
            const userAnswer = await inquirer.prompt({
                name: 'name',
                type: 'input',
                message: 'What is the name of the department you are adding to the Employee Database?'
            });

            await pool.query('INSERT INTO department SET ?', { name: userAnswer.name });

            console.log('New department has been added to the Employee Database successfully!');
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}
module.exports= {viewAllDepartments, addDepartment}