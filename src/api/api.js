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
        }).then(response => { return response });
    },
    followUserAPI (userId) {
        return instance.post( `follow/${userId}`, {} )
    }
};

export const headerAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout(email, password, rememberMe = false) {
        return instance.delete(`auth/login`);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status});
    }
};