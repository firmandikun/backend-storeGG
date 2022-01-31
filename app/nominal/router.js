var express = require('express');
var router = express.Router();
const { index, viewCreate, actionNominal, viewEdit, actionEdit, actionDelete } = require("./controller");

const { isLoginAdmin } = require("../middleware/auth")

router.use(isLoginAdmin)

router.get('/', index);
router.get('/create', viewCreate);
router.post('/create', actionNominal);
router.get('/edit/:id', viewEdit);
router.put('/edit/:id', actionEdit);
router.delete('/edit/:id', actionDelete);


module.exports = router;
