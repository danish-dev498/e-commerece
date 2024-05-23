import { getAddress } from '@/services/apiGeolocation';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getPosition = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const fetchAddres = createAsyncThunk(
  'user/fetchAddress',
  async (thunkAPI) => {
    const positionObj = await getPosition();
    console.log('fsdfsdfsdfsdfsdfsfsdfsdfsdfsdfsdfs', positionObj);

    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    const addressObj = await getAddress(position);

    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
    return {
      position,
      address,
    };
  }
);

const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddres.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddres.fulfilled, (state, action) => {
        state.status = 'idle';
        state.address = action.payload.address;
        state.position = action.payload.position;
      })
      .addCase(fetchAddres.rejected, (state, action) => {
        state.status = 'error';
      }),
});

export const { updateUsername } = userSlice.actions;

export default userSlice.reducer;
