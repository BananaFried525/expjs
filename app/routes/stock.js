import { Router } from "express";
import { StockController } from "../controllers/stock";
const router = Router();

const stockController = new StockController();

router.get('/list', stockController.getAllStock);
router.post('/goods', stockController.postAddGoods);
router.delete('/goods', stockController.deleteGoods);
router.put('/goods', stockController.updateGoods);

module.exports = router;
