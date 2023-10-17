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
  amount: 1;
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
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, { payload }: PayloadAction<{ id: string }>) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem!.amount += 1;
    },
    decrease: (state, { payload }: PayloadAction<{ id: string }>) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem!.amount -= 1;
    },
    calculateTotals: (state) => {
      let itemsAmount = 0;
      let itemsTotal = 0;

      state.cartItems.forEach((item) => {
        itemsAmount += item.amount;
        itemsTotal += item.amount * parseFloat(item.price);
      });
      state.amount = itemsAmount;
      state.total = itemsTotal;
    },
  },
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

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
