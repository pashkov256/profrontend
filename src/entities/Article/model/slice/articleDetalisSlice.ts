import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData, Profile, updateProfileData } from 'entities/Profile';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetalisSchema } from '../types/articleDetalisSchema';

const initialState: ArticleDetalisSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetalisSlice = createSlice({
    name: 'articleDetalis',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (
                state,
                action: PayloadAction<Article>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articleActions } = articleDetalisSlice;
export const { reducer: articleDetalisReducer } = articleDetalisSlice;
