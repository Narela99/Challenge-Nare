const { Router } = require ('express');
const api = require('./api');

var router = Router();

router.use('/api', api);

module.exports = router;

