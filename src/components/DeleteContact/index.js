import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/ContactActions';

export default function DeleteContact(id) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return <button onClick={() => handleDelete(id)}>delete</button>;
}
