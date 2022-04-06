import { Context } from 'koa';

export default {
  postSignIn(ctx: Context): void {
    const name = ctx.request.body.name || '';
    const password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
      ctx.redirect(`/html/signin-ok?name=${name}`);
    } else {
      ctx.redirect('/html/signin-failed');
    }
  },
};
