import * as axios from 'axios';

const instance = axios.create({
    withCredentials : true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "08bd8261-8076-460e-a9bb-c0e89189741a"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize ) { 
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => { return response.data; });
    },
    unfollowUserAPI (userId) {
        return instance.delete( `follow/${userId}`, {
        }).then(response => { return response.data });
    },
    followUserAPI (userId) {
        return instance.post( `follow/${userId}`, {} )
    }
};

export const headerAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
};