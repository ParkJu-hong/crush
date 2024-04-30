import {
    findAllStoreService,
    findStoreByNameService,
    createStoreService,
    deleteStoreService,
} from '../services/store.service.js';

export const findAllStoreController = async () => {
    return await findAllStoreService().then((data) => {
        const result = data.map((row) => ({
            id: row.id,
            name: row.name
        }));
        return result;
    });
}

// 특정 store 조회
export const findStoreByNameController = async (store_name) => {
    return await findStoreByNameService(store_name).then((data) =>{
        return data;
    })
}

// store 추가
export const createStoreController = async (store_name) => {
    return await createStoreService(store_name).then((data) =>{
        return data;
    })
}

// store 삭제
export const deleteStoreController = async (store_id) => {
    return await deleteStoreService(store_id).then((data) =>{
        return data;
    })
}