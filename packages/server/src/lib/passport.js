import pp from 'passport'
import LocalStrategy from 'passport-local'

import User from '../db/models/User'

pp.serializeUser(function (user, done) {
  done(null, user.id)
})

pp.deserializeUser(async (id, done) => {
  const user = await User.findById(id).catch(err => {
    done(err, null)
  })
  done(null, user)
})

pp.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (email, password, done) => {
      const user = await User.authenticate(email, password).catch(err => {
        done(err.message)
      })

      done(null, user)
    },
  ),
)

export const passport = pp
