const User = require('../models/User');

module.exports = {
    allUsers: () => User.find(),

    userById: (userId) => User.findById(userId),

    createUser: (objUser) => User.create(objUser),

    deleteUser: (userId) => User.deleteOne({_id: userId})
}
