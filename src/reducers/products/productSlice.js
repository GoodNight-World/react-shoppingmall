import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    value: [],
    currentValue: [],
    currentCategory: 'all',
    kart: [],
    status: 'idle',
}

// fetch 함수
export const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
}

// fetch 액션
export const fetchProductAsync = createAsyncThunk(
    'product/fetchProduct',
    async() => {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    }
)

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCategory: {
            reducer: (state, action) => {
                if(action.payload === 'all'){
                    state.currentValue = state.value;
                    return;
                }
                state.currentCategory = action.payload;
                state.currentValue = state.value.filter(data => data.category === action.payload);
            },
            prepare: (arg) => {
                return {
                    payload: arg,
                }
            }
        },
        setKart: (state, action) => {
            state.kart.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductAsync.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchProductAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.value = action.payload;
                state.currentValue = action.payload;
            })
            .addCase(fetchProductAsync.rejected, (state) => {
                state.status = 'rejected';
            })
    }
})

export const { setValue, setCategory, setKart } = productSlice.actions;

export const AllProductState = (state) => state.products.value;
export const productState = (state) => state.products.currentValue;
export const categoryState = (state) => state.products.currentCategory;
export const kartState = (state) => state.products.kart;

export default productSlice.reducer;