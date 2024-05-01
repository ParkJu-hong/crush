import express from 'express';
const app = express();
const port = 3000;

import { 
  findAllStoreController,
  findStoreByNameController,
  createStoreController,
  deleteStoreController,
} from './controllers/store.controller.js';

import {
  findAllTableByStoreController,
  findTableByStoreController,
  createTableController
} from './controllers/table.controller.js';

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
app.get('/table/findall', async (req, res)=>{
  res.json(await findAllTableByStoreController(req.query.store_id));
});
app.get('/table/findbytablenum', async (req, res)=>{
  res.json(await findTableByStoreController(req.query.store_id, req.query.table_num));
});
app.post('/table/create', async (req, res) => {
  res.json(await createTableController(req.query.store_id, req.query.table_num));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});