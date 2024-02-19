const initialState = {
  auth: false,
  data: null,
  loading: false,
  error: null,
};

export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case "process": {
      return (store = { loading: true, ...store });
    }
    case "error": {
      return (store = { loading: false, error: action.payload, ...store });
    }
    case "login": {
      return (store = {
        auth: true,
        data: action.payload,
        loading: true,
        error: null,
      });
    }
    case "logout": {
      return (store = { auth: false, data: null });
    }
    default:
      return store;
  }
};
