import Router from 'koa-router';
import ApiRoute from './api';
import HtmlRoute from './html';

const router = new Router();

router.use('/api', ApiRoute.routes());
router.use('/html', HtmlRoute.routes());

export default router;
