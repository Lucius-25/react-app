const initialState = {
    auth: false,
    data: null,
    loading: false,
    error: null,
  };

const authSlice = createSlice({
    auth  : "auth",
    initialState,

});
