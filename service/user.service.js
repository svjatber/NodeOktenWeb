const User = require('../model/user.model')


module.exports = {
    findUsers: async () => {
        const users = await User.getAllUsers()
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

    createUser: async (username ,password) => {
        const user = new User(username, password)
        await user.createUser();
        },

    deleteUser: async (userId) => {
        const users = await User.deleteUser(userId)
        return users
    }
}
