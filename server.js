import express, { json, urlencoded } from 'express';
import cors from 'cors';

import userRoute from './app/routes/user.routes.js';
import rsvRoute from './app/routes/reserve.routes.js';
import rmRoute from './app/routes/room.routes.js';

import { sequelize } from './app/config/db.config.js';


const app = express();
const port = process.env.DB_PORT;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Server Online');
});


app.use('/user', userRoute);
app.use('/reserve', rsvRoute);
app.use('/room', rmRoute);

sequelize.sync({alter: true})
.then(()=>{ app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}!`));
})
.catch((err)=>{
    console.log(err)
})


