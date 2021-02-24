const User = require('../model/user.model')


module.exports = {
    findUsers: async () => {
        const users = User.getAllUsers()
        if(!users) {
            throw new Error('not users in db');
        }

        return users;
    },

    findUserById: async (userId) => {
        const user = User.findUserById(userId)
        if(!user) {throw new Error('not user in db');}
        return user;
    },

    createUser: async (username,password) => {
        const user = new User(username, password).createUser()
        if(user){
            throw new Error('this user is here yet');
        }

        },

    deleteUser: async (userId) => {
        await User.deleteUser(userId)
    }
}
