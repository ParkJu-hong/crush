import express from 'express';
const app = express();
const port = 3000;

import { 
  findAllStoreController,
  findStoreByNameController,
  createStoreController,
  deleteStoreController,
} from './controllers/store.controller.js';

// store
app.get('/store/findall', async (req, res)=>{
  res.json(await findAllStoreController());
});
app.post('/store/findbyname', async (req, res) => {
  res.json(await findStoreByNameController(req.query.store_name));
});
app.post('/store/create', async (req, res) => {
  res.json(await createStoreController(req.query.store_name));
});
app.get('/store/delete', async (req, res) => {
  res.json(await deleteStoreController(req.query.store_id));
});

// table



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});