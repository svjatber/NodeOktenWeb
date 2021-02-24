

module.exports = {
    isIdValid: (req, res, next) => {
        try {
            const userId = +req.params.userId;
            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error('Error');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    isPasswordValid: (req, res, next) => {
        try {
            const { password } = req.body;
            if (!password) {throw new Error('Error');}
            if (password.length < 8) {throw new Error('Error');}

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    isUserNameValid: (req, res, next) => {
        try {
            const { username } = req.body;
            if (!username) {throw new Error('Error');}
            if (username.length < 6) {throw new Error('Error');}
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
}
