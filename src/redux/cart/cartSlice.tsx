import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (error: any) {
    throw new Error(`Failed to fetch data. Error: ${error.message}`);
  }
});

type CartItem = {
  id: string;
  title: string;
  price: string;
  img: string;
};

type CartState = {
  cartItems: CartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
};

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCartItems.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.cartItems = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
