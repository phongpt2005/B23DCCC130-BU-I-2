export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';


let nextId = 1; 

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: { id: nextId++, ...item }, // Tạo ID mới và tăng biến
    };
};


export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: id,
});

export const editItem = (id, updatedItem) => ({
    type: EDIT_ITEM,
    payload: { id, updatedItem },
});