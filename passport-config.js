const localStrategy = require("passport-local").Strategy
const bcrypt =require("bcrypt")

function initialize(passport) {
    const AuthenticateUsers =async (email, password, done) => {
        const user = getUserEmail(email)
        if(user == null) {
            return done(null, false, {message: "No user found with that email"})
        }
        try {
            if( await bcrypt.compare(password, user.password)) {
                return done(null, user)
            }
        } catch (e) {
            console.log(e);
            return done(e)
        }
    }

    passport.user(new localStrategy({usernameField: 'email'}))
    passport.serializeUser((user, done) => {}  )
    passport.deserializeUser((id, done) => {})
}

module.exports = initialize