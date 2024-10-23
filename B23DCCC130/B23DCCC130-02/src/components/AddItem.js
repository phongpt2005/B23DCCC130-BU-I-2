import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';

const AddItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem({ name, price: parseFloat(price) })); 
        setName('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên hàng hóa"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Giá hàng hóa"
                required
            />
            <button type="submit">Thêm</button>
        </form>
    );
};

export default AddItem;
