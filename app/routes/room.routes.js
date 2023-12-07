import express from 'express';
import { create, update, findAll, findOne } from '../controllers/room.controller.js';
const rmRouter = express.Router();


// USER
rmRouter.get('/', (req, res) => {
    res.send('Hello Room Route Connected')
});
rmRouter.post('/room', create);
rmRouter.put('/:id', update);
rmRouter.get('/rooms', findAll);
rmRouter.get('/:id-room', findOne);


export default rmRouter;