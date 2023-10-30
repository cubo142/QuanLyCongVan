import axios from 'axios';

const congvanApi = axios.create({
    baseURL: "http://localhost:3000"
})

//Lấy JWT token
// congvanApi.interceptors.request.use(
//     (config) => {
//         const storedToken = localStorage.getItem('token');
//         if (storedToken) {
//             const token = JSON.parse(storedToken).data;
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         Promise.reject(error);
//     }
// );

export const getCongVan = async (congvan) => {
    const response = await congvanApi.get("/congvans/", congvan)
    return response.data;
}

export const getCongVanById = async (id) => {
    const response = await congvanApi.get(`/congvans/${id}`, id)
    return response.data;
}

export const addCongVan = async ({ congvan }) => {
    return await congvanApi.post(`/congvans/`, congvan)
}

export const updateCongVan = async (congvan) => {
    return await congvanApi.patch(`/congvans/${congvan.congvanID}`, congvan)
}

export const deleteCongVan = async (id) => {
    return await congvanApi.delete(`/congvans/${id}`, id)
}

//Xóa 1 list
// export const deleteCongVanList = async (idList) => {
//     return await congvanApi.delete('/congvan/deleteList', { data: idList });
// }

export default congvanApi;