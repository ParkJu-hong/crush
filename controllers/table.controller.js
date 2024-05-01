import {
    findAllTableByStoreIdService,
    findTableByStoreIdService,
    createTableService
} from '../services/table.service.js';

export const findAllTableByStoreController = async (store_id) => {
    return await findAllTableByStoreIdService(store_id).then((results) => {
        return results;
    });
}

export const findTableByStoreController = async (store_id, table_num) => {
    return await findTableByStoreIdService(store_id, table_num).then((results) => {
        return results;
    });
}

export const createTableController = async (store_id, table_num) => {
    return await createTableService(store_id, table_num).then((results) =>{
        console.log("results : ", results);
        return results;
    });
};

