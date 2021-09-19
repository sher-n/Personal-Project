const passport = require('passport');
const { ExtractJwt, Strategy } = require("passport-jwt");

const db = require('../../models')

const option = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'ggez'
}

const JWTStrategy = new Strategy(option, async (payload, done) => {
    const tartgetUser = await db.User.findOne({ where : { id : payload.id }});
    if (tartgetUser) {
        done(null, tartgetUser);
    } else {
        done(null, false);
    }
})

passport.use('jwt', JWTStrategy);

