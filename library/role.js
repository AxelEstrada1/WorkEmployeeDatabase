const inquirer = require ('inquirer');
const { start } = require('../index');
const mysql = require('mysql2/promise');
const pool = require("../config/connnections")

async function viewAllRoles() {
    const [rows] = await pool.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id');

    console.table(rows);
}

async function addRole() {
    const [departments] = await pool.query('SELECT * FROM department');

    const userAnswers = await inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of the role you are adding into the Employee Database?'
        },
        {
            name: 'salary',
            type: 'number',
            message: 'What is the employee salary of this new role you are adding?'
        },
        {
            name: 'department_id',
            type: 'list',
            message: 'Which department does this new role belong to?',
            choices: departments.map(department => ({ name: department.name, value: department.id }))
        }
    ]);
    await pool.query('INSERT INTO role SET ?', {
        title: userAnswers.title,
        salary: userAnswers.salary,
        department_id: userAnswers.department_id
    });
    console.log('New role has been added to the Employee Database successfully!');
    start();
}
module.exports = { viewAllRoles, addRole }