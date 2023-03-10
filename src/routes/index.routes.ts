import { Router } from "express";
import { createPostController } from "../controllers/post/createPost.controller";
import { updatePostController } from "../controllers/post/updatePost.controller";
import { authenticateUserController } from "../controllers/session/session.controller";
import { createUserController } from "../controllers/user/createUser.controller";
import { listUserController } from "../controllers/user/listUserController";
import { updateUserController } from "../controllers/user/updateUser.controller";
import { loginRequired } from "../middlewares/loginRequired";
import { validatorDataMiddleware } from "../middlewares/validatorData";
import { postSchema } from "../validations/post/createPost.schema";
import { updatePostSchema } from "../validations/post/updatePost.schema";
import { userSchema } from "../validations/user/createUser.schema";

const routerApp = Router()

routerApp.post('/user', validatorDataMiddleware( userSchema ), createUserController)
routerApp.get('/user', loginRequired, listUserController)
routerApp.patch('/user', loginRequired, updateUserController)

routerApp.post('/login', authenticateUserController)

routerApp.post('/post',  validatorDataMiddleware( postSchema ), loginRequired, createPostController )
routerApp.patch('/post/:post_id', loginRequired, validatorDataMiddleware( updatePostSchema ), updatePostController )

export { routerApp }