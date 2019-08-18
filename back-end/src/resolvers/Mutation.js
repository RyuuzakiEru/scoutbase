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
};

module.exports = Mutations;
