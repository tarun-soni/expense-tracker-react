const express = require('express');
const router = express.Router();
const {getTransactions,addTransaction,deleteTransaction} = 
require('../controllers/transactionController')


/* old
router.get('/', (req,res) =>res.send('Helloo'))
*/

//after creating controllers/transactionController file
router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router.route('/:id')
    .delete(deleteTransaction);
    
module.exports = router;
