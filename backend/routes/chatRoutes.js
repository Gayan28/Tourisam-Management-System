const express =require("express");
const {accessChat,fetchChats } = require("../controllers/chatControllers");


const router = express.Router();

router.route('/').post(accessChat);
router.route('/').get(fetchChats);

module.exports = router;

