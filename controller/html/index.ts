import { Context } from 'koa';

export default {
  async index(ctx: Context): Promise<void> {
    await ctx.render('index', {
      title: '主页',
    });
  },
};
