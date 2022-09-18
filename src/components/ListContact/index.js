import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListContact, deleteContact } from '../../actions/ContactActions';

export default function ContactList() {
  const dispatch = useDispatch();
  const { getListContactResult, getListContactLoading, getListContactError, deleteContactResult } = useSelector((state) => state.contactReducer);

  useEffect(() => {
    // Call action get list contact
    dispatch(getListContact());
  }, [dispatch]);

  useEffect(() => {
    if (deleteContactResult) {
      console.log("5. Masuk component did update")
      dispatch(getListContact())
    }
  }, [deleteContactResult, dispatch])

  return (
    <div>
      <h4>Contact List</h4>
      {getListContactResult ? (
        getListContactResult.map((it) => {
          return (
            <p key={it.id}>
              {it.name} - {it.no} <button onClick={() => dispatch(deleteContact(it.id))}>Delete</button>
            </p>
          );
        })
      ) : getListContactLoading ? (
        <p>Loading ...</p>
      ) : (
        <p>{getListContactError ? getListContactError : 'Data Kosong'}</p>
      )}
    </div>
  );
}
