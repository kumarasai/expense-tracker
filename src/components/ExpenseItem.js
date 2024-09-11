import React from 'react';

const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-2">
      <div>
        <h4 className="text-lg font-semibold">{expense.title}</h4>
        <p className="text-sm">{expense.category}</p>
        <p className="text-sm">{new Date(expense.date).toLocaleDateString()}</p>
      </div>
      <div className="text-right">
        <p className="text-xl font-bold">${expense.amount.toFixed(2)}</p>
        <button onClick={() => onEdit(expense)} className="text-blue-500">Edit</button>
        <button onClick={() => onDelete(expense.id)} className="text-red-500 ml-2">Delete</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
