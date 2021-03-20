const errorMessage = require('../errors/error.messages');
const errorCodes = require('../constant/errorCodes.enum');
const userService = require('../service/user.service')

module.exports = {

    checkIsIdValid:async (req, res, next) =>{
        try{
            // const {preferLang = 'en'} = req.body;
            // const {userId} = req.params;
            //
            // // if(+userId < 0 || !Number.isInteger(+userId) || Number.isNaN(+userId)){
            // //     throw new Error(errorMessage.NOT_VALID_ID[preferLang]);
            // // }

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
    },

    isUserValid:(req,res,next) =>{
        try{
            const {name, password,email, preferLang = 'en'} = req.body;

            if(!name || !password || !email){
                throw new Error(errorMessage.FILES_IS_EMPTY[preferLang]);
            }

            if(password.length < 6 ){
                throw new Error(errorMessage.TOO_WEAK_PASSWORD[preferLang]);
            }

            next();
        } catch (e) {

            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
}

