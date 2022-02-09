import axios from 'axios';
import { API_URL } from "../helper/Utils"


const token = "GET_TOKEN();"


export const postMethod = (url: string, data: any) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}` + url, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response: any) => {
                if (response.status === 200 || response.status === 100) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            })
            .catch((error: any) => {
                reject(error.response);
            });
    });
};

export const updateMethod = (url: string, data: any) => {

    return new Promise((resolve, reject) => {
        axios
            .put(`${API_URL}` + url, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response: any) => {
                if (response.status === 200 || response.status === 100) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            })
            .catch((error: any) => {
                reject(error.response);
            });
    });
};

export const deleteMethod = (url: string, uniqueKey: any) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${API_URL}` + url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }, data: {
                    uniqueKey: uniqueKey
                },
            })
            .then((response: any) => {
                if (response.status === 200 || response.status === 100) {
                    resolve(response.data);
                } else {
                    reject();
                }
            })
            .catch((error: any) => {
                reject(error.response);
            });
    });
};

export const getMethod = (url: string) => {
    
    return new Promise((resolve, reject) => {
        axios
            .get(`${API_URL}` + url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response: any) => {
                if (response.status === 200 || response.status === 100) {
                    resolve(response.data);
                } else {
                    reject();
                }
            })
            .catch((error: any) => {
                reject(error.response);
            });
    });
};