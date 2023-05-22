const { show, create, update, destroy } = require("../controllers/likes")

const router = require("express").Router()

router.get("/:id", show)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", destroy)

module.exports = router