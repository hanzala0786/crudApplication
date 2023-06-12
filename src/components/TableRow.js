import React from 'react';
import {FcDeleteDatabase} from "react-icons/fc";
import {IoMdCreate} from "react-icons/io";
import './TableRow.css';
const TableRow = ({ index, data, handleEdit, handleDelete }) => {
  const handleDeleteClick = () => {
    handleDelete(index);
  };

  return (
    <tr>
      <td>{data.fullName}</td>
      <td>{data.phoneNumber}</td>
      <td>{data.email}</td>
      <td>{data.gender}</td>
      <td>{data.dateOfBirth}</td>
      <td>{data.city}</td>
      <td>{data.state}</td>
      <td className='btns'>
        <button onClick={() => handleEdit(index)}>
          <IoMdCreate/>
        </button>
        <button onClick={handleDeleteClick}>
          <FcDeleteDatabase/>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
