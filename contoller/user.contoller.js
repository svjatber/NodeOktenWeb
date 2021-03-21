const userService = require('../service/user.service')
const passwordBcrypt = require("../helper/password.helper");


module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await userService.allUsers();
            console.log('____________')
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await userService.userById(userId);
            res.status(200).json(user);
        }
        catch (e) {
            res.status(400).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { email, password} = req.body;
            const hashPassword = await passwordBcrypt.hash(password)
            await userService.createUser({email, password: hashPassword});
            res.status(200).json('USER_CREATED');
        }
        catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            await userService.deleteUser(userId);
            res.status(200).json('deleted');
        }
        catch (e) {
            res.status(400).json(e.message);
        }
    }

}
