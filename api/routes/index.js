// const router = require('express').Router();
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => { // main route to url/
    res.status(200).json({sucess: true, message: 'From /api...'});
});

// module.exports = router;
export default router;