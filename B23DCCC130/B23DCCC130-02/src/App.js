import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css'; // Nhập CSS ở đây

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <Link to="/">Danh Sách Hàng Hóa</Link>
                    <Link to="/add">Thêm Hàng Hóa</Link>
                </nav>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ItemList />} />
                        <Route path="/add" element={<AddItem />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
