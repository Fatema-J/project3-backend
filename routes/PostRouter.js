const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

router.get('/', controller.GetPosts)
router.get('/:plan_id', controller.GetPlanPosts)
router.get('/1/:post_id', controller.GetOnePost)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)
router.delete(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

module.exports = router
