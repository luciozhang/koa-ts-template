import { Context } from 'koa';

export default {
  async signin(ctx: Context): Promise<void> {
    await ctx.render('signin');
  },

  async signinOk(ctx: Context): Promise<void> {
    await ctx.render('signin-ok', {
      title: '登录成功',
      name: ctx.query.name || '',
    });
  },

  async signinFailed(ctx: Context): Promise<void> {
    await ctx.render('signin-failed', {
      title: '登录失败',
    });
  },
};
