import { findAllStoreService } from '../services/store.service.js';

export const findAllStoreController = async (req, res) => {
    const real_reuslt = await findAllStoreService().then((data) => {
        const result = data.map((row) => ({
            id: row.id,
            name: row.name
        }));
        console.log("result : ", JSON.stringify(result));
        return result;
    });
    console.log("real_reuslt : ", real_reuslt);
    return real_reuslt;
}