import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './styles.css'; // Import the CSS file
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';


const App = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(false);
  const [indexToEdit, setIndexToEdit] = useState('');
  useEffect(() => {
    const storedData = localStorage.getItem('appData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const addData = (formData) => {
    if (editData) {
      const updatedData = [...data];
      updatedData[indexToEdit] = formData;
      setData(updatedData);
      setEditData(false);
    } else {
      setData([...data, formData]);
    }
  };

  const deleteData = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    localStorage.setItem('appData', JSON.stringify(updatedData));
  };

  const handleEdit = (index) => {
    setEditData(true);
    setIndexToEdit(index);
  };

  return (
    <div className='app'>
      {/* <h1>Profiles</h1> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Form addData={addData} editData={editData} setEditData={setEditData}/>} />
        <Route path='/Table' element={<Table data={data} deleteData={deleteData} handleEdit={handleEdit}/>} />
      </Routes>
    </div>
  );
};

export default App;

