import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  return (
    <div>
      {expenses.length === 0 ? (
        <p className="text-center text-gray-500">No expenses found.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
