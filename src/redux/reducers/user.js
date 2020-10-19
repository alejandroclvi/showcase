const initialState = {
  uid: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_ANONYM_SUCCESS':
      return {
        ...state,
        uid: action.uid,
      };
    default:
      return state;
  }
};

export default user;
