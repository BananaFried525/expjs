import { Router } from "express";
const StockRoute = require('./stock');
const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).send('Hello');
});

router.use('/stock', StockRoute);
module.exports = router;
