
interface State  {
  isLoggedIn: boolean
  token: string
}

export const initialState = {
  isLoggedIn: false,
  token: ''
};

const reducer = (state: State, action:any) => {
  switch (action.type) {
    case 'SET_AUTHENTICATION':
      return {
        ...state,
        ...action.payload,
        isLoggedIn: action.payload.isLoggedIn,
      }
    default:
      return state;
  }
};

export default reducer;

