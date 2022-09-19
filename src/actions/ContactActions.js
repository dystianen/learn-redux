import axios from "axios";

export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const getListContact = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_LIST_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/contacts',
            timeout: 120000
        }).then((res) => {
            dispatch({
                type: GET_LIST_CONTACT,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false,
                }
            })
        }).catch((err) => {
            dispatch({
                type: GET_LIST_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message,
                }
            })
        })
    }
}

export const addContact = (data) => {
    console.log("2. Masuk action")
    return (dispatch) => {
        // loading
        dispatch({
            type: ADD_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        //get API
        axios({
            method: 'POST',
            url: 'http://localhost:3000/contacts',
            timeout: 120000,
            data: data,
        }).then((res) => {
            console.log("3. Masuk Response", res.data)
            dispatch({
                type: ADD_CONTACT,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false,
                }
            })
        }).catch((err) => {
            dispatch({
                type: ADD_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message,
                }
            })
        })
    }
}

export const deleteContact = (id) => {
    console.log("2. Masuk action")
    return (dispatch) => {
        // loading
        dispatch({
            type: DELETE_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        //get API
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/contacts/${id}`,
            timeout: 120000,
            data: id
        }).then((res) => {
            console.log("3. Masuk Response", res.data)
            dispatch({
                type: DELETE_CONTACT,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false,
                }
            })
        }).catch((err) => {
            dispatch({
                type: DELETE_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message,
                }
            })
        })
    }
}

export const detailContact = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'DETAIL_CONTACT',
            payload: {
                data: data
            }
        })
    }
}

export const updateContact = (data) => {
    console.log("2. Masuk action")
    return (dispatch) => {
        // loading
        dispatch({
            type: UPDATE_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        //get API
        axios({
            method: 'PUT',
            url: 'http://localhost:3000/contacts/' + data.id,
            timeout: 120000,
            data: data,
        }).then((res) => {
            console.log("3. Masuk Response", res.data)
            dispatch({
                type: UPDATE_CONTACT,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false,
                }
            })
        }).catch((err) => {
            dispatch({
                type: UPDATE_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message,
                }
            })
        })
    }
}