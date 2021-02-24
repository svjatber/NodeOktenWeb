const userService = require('../service/user.service')


module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await userService.findUserById(userId);
            res.status(200).json(user);
        }
        catch (e) {
            res.status(400).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { username, password} = req.body;
            await userService.createUser(username,password);
            res.status(200).json();
        }
        catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            await userService.deleteUser(userId);
            res.status(200).json();
        }
        catch (e) {
            res.status(400).json(e.message);
        }
    }

}
