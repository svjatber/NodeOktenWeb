const path = require('path');
const fs = require('fs');

class User {
    constructor( name, email, password){
        this.email = email,
        this.password = password,
        this.name = name
    }

    get User(){
        return {
            email: this.email,
            password: this.password,
            name: this.name
        }
    }

    async signUp(email, password){
        const users = await User.getAllUsers();
        const user = users.find(v => v.email === email && v.password === password)
        if(user){
            return {...user}
        }
        users.unshift(this.User);
        await this.save(users)
        return true
    }

    static async signIn(email, password){
        const users = await User.getAllUsers();
        const user = users.find(v => v.email === email && v.password === password)
        if(user) {
            return {...user}
        }
        return false
    }

    async save(users){
        return new Promise((resolve, reject)=>{
            fs.writeFile(path.join(__dirname, '..', 'data', 'users.json'),
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
            fs.readFile(path.join(__dirname, '..', 'data', 'users.json'),
                'utf-8',
                (err, data) =>{
                    if(err) reject(err)
                    resolve(JSON.parse(data))
                }
            )})
    }
}

module.exports = User
