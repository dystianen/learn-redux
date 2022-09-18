import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getListContact } from '../../actions/ContactActions';

export default function AddContact() {
  const [name, setName] = useState('');
  const [no, setNo] = useState('');

  const dispatch = useDispatch();
  const { addContactResult } = useSelector((state) => state.contactReducer);

  useEffect(() => {
    if (addContactResult) {
      console.log("5. Masuk component did update")
      dispatch(getListContact())
      setName('');
      setNo('');
    }
  }, [addContactResult, dispatch])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1. Masuk Handle Submit")
    dispatch(addContact({name: name, no: no}))
  };

  return (
    <div>
      <h4>Add Contact</h4>

      <form onSubmit={(event) => handleSubmit(event)}>
        <input type={'text'} name={'name'} placeholder={'Name ...'} value={name} onChange={(event) => setName(event.target.value)} />

        <input type={'text'} name={'no'} placeholder={'No ...'} value={no} onChange={(event) => setNo(event.target.value)} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
