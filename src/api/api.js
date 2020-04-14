import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "71dc6f3f-2907-4703-a9c6-e1ecaf056f41", }
})

export const usersApi = {
    getUsers(pageNumber = 1, pageSize = 15) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data
            )
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data
            )
    },
    getProfile(userId) {

        console.warn("Obsolete method. Please use profileApi object")
        return profileApi.getProfile(userId)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then((response) => response.data);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance
            .put(`profile/status/`, { status })
    }
}

export const authApi = {
    me() {
        return instance
            .get(`auth/me`)
            .then((response) => response.data
            )
    },
}