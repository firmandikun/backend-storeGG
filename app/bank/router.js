var express = require('express');
var router = express.Router();
const {index , viewCreate, actionCreate, actionDelete, viewEdit, actionEdit} = require("./controller");

const { isLoginAdmin } = require("../middleware/auth")

router.use(isLoginAdmin)
router.get('/', index);
router.get('/create', viewCreate);
router.post('/create', actionCreate);
router.get('/edit/:id', viewEdit);
router.put('/edit/:id', actionEdit);
router.delete('/delete/:id', actionDelete);

module.exports = router;
