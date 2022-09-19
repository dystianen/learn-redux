import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addContact, getListContact, updateContact} from '../../actions/ContactActions';

export default function AddContact() {
    const [name, setName] = useState('');
    const [no, setNo] = useState('');
    const [id, setId] = useState('');

    const dispatch = useDispatch();
    const {addContactResult, detailContactResult, updateContactResult} = useSelector((state) => state.contactReducer);

    useEffect(() => {
        if (addContactResult || updateContactResult) {
            console.log("5. Masuk component did update")
            dispatch(getListContact())
            setName('');
            setNo('');
            if (updateContactResult) {
                setId('');
            }
        }
    }, [addContactResult, updateContactResult, dispatch])

    useEffect(() => {
        if (detailContactResult) {
            setId(detailContactResult.id);
            setName(detailContactResult.name);
            setNo(detailContactResult.no);
        }
    }, [detailContactResult, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("1. Masuk Handle Submit")

        if (id) {
            dispatch(updateContact({id: id, name: name, no: no}))
        } else {
            dispatch(addContact({name: name, no: no}))
        }
    };

    return (
        <div>
            <h4>{id ? "Edit Contact" : "Add Contact"}</h4>

            <form onSubmit={(event) => handleSubmit(event)}>
                <input type={'text'} name={'name'} placeholder={'Name ...'} value={name}
                       onChange={(event) => setName(event.target.value)}/>

                <input type={'text'} name={'no'} placeholder={'No ...'} value={no}
                       onChange={(event) => setNo(event.target.value)}/>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
