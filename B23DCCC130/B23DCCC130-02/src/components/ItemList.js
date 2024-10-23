import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/actions';
import ReactPaginate from 'react-paginate';
import EditItem from './EditItem'; // Nhập component chỉnh sửa

const ItemList = () => {
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [editingItem, setEditingItem] = useState(null); // Trạng thái cho item đang chỉnh sửa
    const itemsPerPage = 5;

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

    const displayedItems = filteredItems.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa hàng hóa này không?")) {
            dispatch(deleteItem(id));
        }
    };

    const handleEdit = (item) => {
        setEditingItem(item);
    };

    const closeEditModal = () => {
        setEditingItem(null);
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Tìm kiếm hàng hóa"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {displayedItems.length > 0 ? (
                    displayedItems.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.price} VND
                            <button className="delete-button" onClick={() => handleDelete(item.id)}>Xóa</button>
                            <button className="edit-button" onClick={() => handleEdit(item)}>Chỉnh sửa</button>
                        </li>
                    ))
                ) : (
                    <li>Không có hàng hóa nào phù hợp với tìm kiếm.</li>
                )}
            </ul>
            <ReactPaginate
                previousLabel={<button>Trước</button>}
                nextLabel={<button>Tiếp</button>}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
            {editingItem && (
                <EditItem item={editingItem} onClose={closeEditModal} />
            )}
        </div>
    );
};

export default ItemList;
