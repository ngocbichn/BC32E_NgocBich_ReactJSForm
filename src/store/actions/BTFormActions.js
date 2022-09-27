import { ADD_USER, UPDATE_USER } from "../types"

export const addUser = (payload) => {
    return {
        type: ADD_USER,
        payload
    }
}
export const updateUser = (payload) => {
    return {
        type: UPDATE_USER,
        payload
    }
}