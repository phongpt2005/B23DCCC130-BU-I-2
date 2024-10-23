import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editItem } from '../redux/actions';

const EditItem = ({ item, onClose }) => {
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price); 
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editItem(item.id, { name, price })); 
        onClose();
    };

    return (
        <div className="edit-modal">
            <h2>Chỉnh sửa hàng hóa</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên hàng hóa"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Giá hàng hóa"
                />
                <div className="button-container">
                    <button type="submit" className="save-button">Lưu</button>
                    <button type="button" onClick={onClose} className="delete-button">Hủy</button>
                </div>
            </form>
        </div>
    );
};

export default EditItem;
