import {
  GET_LIST_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  DETAIL_CONTACT, UPDATE_CONTACT
} from '../../actions/ContactActions';

const initialState = {
  getListContactResult: false,
  getListContactLoading: false,
  getListContactError: false,

  addContactResult: false,
  addContactLoading: false,
  addContactError: false,

  deleteContactResult: false,
  deleteContactLoading: false,
  deleteContactError: false,

  detailContactResult: false,

  updateContactResult: false,
  updateContactLoading: false,
  updateContactError: false,
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CONTACT:
      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactError: action.payload.errorMessage,
      };

    case ADD_CONTACT:
      console.log('4. Masuk Reducer', action);
      return {
        ...state,
        addContactResult: action.payload.data,
        addContactLoading: action.payload.loading,
        addContactError: action.payload.errorMessage,
      };

    case DELETE_CONTACT:
      console.log('4. Masuk Reducer', action);
      return {
        ...state,
        deleteContactResult: action.payload.data,
        deleteContactLoading: action.payload.loading,
        deleteContactError: action.payload.errorMessage,
      };

    case DETAIL_CONTACT:
      console.log('4. Masuk Reducer', action);
      return {
        ...state,
        detailContactResult: action.payload.data,
      };

    case UPDATE_CONTACT:
      console.log('4. Masuk Reducer', action);
      return {
        ...state,
        updateContactResult: action.payload.data,
        updateContactLoading: action.payload.loading,
        updateContactError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default contact;
