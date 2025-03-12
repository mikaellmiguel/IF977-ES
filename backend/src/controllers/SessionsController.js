const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const {compare} = require("bcryptjs");
const authConfig = require("../configs/auth")
const {sign} = require("jsonwebtoken");


class SessionsController {
    async create(request, response) {

        const {email, password} = request.body;
        const user = await knex("users").where({email}).first();
        
        if (!user){
            throw new AppError("Email ou Senha Incorreta");
        }
        
        const passwordMatched = await compare(password, user.password);
        
        if(!passwordMatched) {
            throw new AppError("E-mail ou Senha Incorreta", 401);
        }

        const {secret, expiresIn} = authConfig.jwt;
        
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });


        return response.json({token, user});
    }
}

module.exports = SessionsController;