import React from 'react';
import TableRow from './TableRow';

const Table = ({ data,handleEdit, deleteData }) => {
  const handleDelete = (index) => {
    deleteData(index);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Email ID</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>City</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow
            key={index}
            index={index}
            data={item}
            handleDelete={handleDelete}
            handleEdit = {handleEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
