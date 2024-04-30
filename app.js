import express from 'express';
const app = express();
const port = 3000;

import { findAllStoreController } from './controllers/store.controller.js';

// store
app.get('/store/findall', async (req, res)=>{
  res.json(await findAllStoreController());
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});