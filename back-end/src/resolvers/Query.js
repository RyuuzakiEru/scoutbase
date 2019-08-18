const { getUserId } = require('../helpers/auth');

const random = () => (Math.floor(Math.random() * 40) + 50) / 10;

const Query = {
  async movies(parent, args, ctx, info) {
    const userId = getUserId(ctx);
    const movies = await ctx.prismadb.query.movies({}, info);
    const result = movies.map(movie => {
      if (userId) movie.scoutbase_rating = random();
      return movie;
    });
    return result;
  },
};

module.exports = Query;
