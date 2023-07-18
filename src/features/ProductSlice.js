// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     products: [],
//     loading: false
// }

// export const fetchProducts = createAsyncThunk("fetch/products", async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data)
//     return data;
// })


// const ProductSlice = createSlice({
//     name: "ProductSlice",
//     initialState: initialState,
//     extraReducers: {
//         [fetchProducts.pending]: (state, action) => {
//             state.loading = true;
//         },
//         [fetchProducts.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.products.push(action.payload)
//         },
//         [fetchProducts.rejected]: (state, action) => {
//             state.loading = false;
//             state.error = action.payload
//         }
//     }
// })


// export default ProductSlice.reducer;