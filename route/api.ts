import Router from 'koa-router';
import userController from '../controller/api/user';
import signController from '../controller/api/signin';

const router = new Router();

router.get('/user', userController.getUser);
router.post('/signin', signController.postSignIn);

export default router;
