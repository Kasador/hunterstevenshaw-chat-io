// const router = require('express').Router();
import { Router } from 'express';
const router = Router();
import { getAllUsers } from '../controller/usersController.js'

router.get('/', (req, res) => { // main route to url/
    res.status(200).json({sucess: true, message: 'From /api...'});
});

router.use('/users', getAllUsers);

// module.exports = router;
export default router;