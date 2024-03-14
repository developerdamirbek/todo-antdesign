const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case 'EDIT_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
            };
            case 'DELETE_USER':
                const filteredUsers = state.users.filter(user => user?.id !== action.payload);
                return {
                  ...state,
                  users: filteredUsers,
                };
        default:
            return state;
    }
};


export const addUser = (userData) => ({
    type: 'ADD_USER',
    payload: userData,
});

export const editUser = (updatedUser) => ({
    type: 'EDIT_USER',
    payload: updatedUser,
});

export const deleteUser = (userId) => ({
    type: 'DELETE_USER',
    payload: userId,
});

export default userReducer;
