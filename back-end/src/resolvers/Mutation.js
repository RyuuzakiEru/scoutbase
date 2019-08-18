const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
  async createUser(parent, args, ctx) {
    // lowercase username
    const name = args.name.toLowerCase();
    // hash password
    const password = await bcrypt.hash(args.password, 10);
    // create the user in the database
    const user = await ctx.prismadb.mutation.createUser({
      data: {
        name,
        password,
      },
    });
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    const userAuth = {
      token,
      user,
    };

    return userAuth;
  },
  async login(parent, { name, password }, ctx) {
    // 1. check if there is a user
    const user = await ctx.prismadb.query.user({ where: { name } });
    if (!user) {
      throw new Error(`Invalid username/password`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid username/password');
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 5. Return the User Auth
    const userAuth = {
      token,
      user,
    };
    return userAuth;
  },
};

module.exports = Mutations;
