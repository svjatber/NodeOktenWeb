const path = require('path');
const fs = require('fs');

class UserModel {
    constructor( username, password){
        this.id = new Date().getTime()
        this.username = username
        this.password = password
    }

    get User(){
        return {
            id: this.id,
            username: this.username,
            password: this.password,
        }
    }

    async createUser(){
        const users = await UserModel.getAllUsers();
        const user = users.find(v => v.username === this.username && v.password === this.password);
        users.unshift(this.User);
        await UserModel.save(users)
        return false
    }

    static async findUserById(userId){
        const users = await UserModel.getAllUsers();
        const user = users.find(v => +v.id === +userId)
        if(user) {
            return {...user}
        }
        return false
    }

    static async deleteUser(userId){
        let users = await UserModel.getAllUsers();
        users = users.filter(v => +v.id !== +userId)
        await this.save(users)
        console.log('users', users)
        return users
    }

    static async save(users){
        return new Promise((resolve, reject)=>{
            fs.writeFile(path.join(__dirname, '..', 'dataBase', 'users.json'),
                JSON.stringify(users),
                (err)=>{
                    if(err) reject(err);
                    resolve()
                }
            )
        })
    }

    static getAllUsers() {
        return new Promise((resolve, reject)=>{
            fs.readFile(path.join(__dirname, '..', 'dataBase', 'users.json'),
                'utf-8',
                (err, data) =>{
                    if(err) reject(err)
                    resolve(JSON.parse(data))
                }
            )})
    }
}

module.exports = UserModel
