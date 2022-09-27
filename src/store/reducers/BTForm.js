const stateDefault = {
    mangSV: [
        // {
        //     maSV: 20,
        //     name: 'Ngoc Bich',
        //     phoneNumber: '12345',
        //     email: 'ngocbich@gmail.com',
        // },
        // {
        //     maSV: 23,
        //     name: 'Nick',
        //     phoneNumber: '67890',
        //     email: 'nick@gmail.com',
        // }
    ],
    selectedUser: null
}

export const BTForm = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case 'ADD_USER': {
            const data = [...state.mangSV]
            const user = { ...payload, id: Date.now() }
            // console.log(user);
            data.push(user)
            return { ...state, mangSV: data }
        }
        case 'DELETE_USER': {
            const data = state.mangSV.filter(item => item.id !== payload)
            return { ...state, mangSV: data }
        }
        case 'EDIT_USER': {
            const user = state.mangSV.find(item => item.id === payload)
            return { ...state, selectedUser: user }
        }
        case 'UPDATE_USER': {
            // const newUserList = state.mangNguoiDung.map((item) => {
            //     if (item.id === payload.id) {
            //         return payload
            //     }
            //     return item
            // })
            const newUserList = state.mangSV.map((item) => item.id === payload.id ? payload : item)

            state.selectedUser = null
            return { ...state, mangSV: newUserList }
        }

        default: return state
    }
}