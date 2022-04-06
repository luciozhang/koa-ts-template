import { Context } from 'koa';

export default {
  getUser(ctx: Context): void {
    const user = {
      name: 'lucio',
      id: 1,
    };
    ctx.body = user;
  },
};
