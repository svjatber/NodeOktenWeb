const errorMessage = require('../errors/error.messages');
const errorCodes = require('../constant/errorCodes.enum');
const userService = require('../service/user.service');
const {userValidator} = require("../validators");

module.exports = {

    checkIsIdValid:async (req, res, next) =>{
        try{
            console.log(req.body);
            const {error} = await  userValidator.validate(req.body)
            console.log('__________________________')
            console.log(error)
            console.log('___________________________')

            if(error){
                throw new Error(error.details[0].message);
            }

            next();
        } catch(e){

            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    checkIsUserExists: async (req, res, next) =>{
        try{
            const {userId} = req.params;
            const {preferLang = 'en'} = req.body;

            const foundUser = await userService.userById(userId);
            console.log(foundUser)
            if (!foundUser) {

                throw new Error(errorMessage.USER_NOT_FOUND[preferLang]);
            }

            req.user = foundUser;

            next();
        } catch(e){

            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
}

