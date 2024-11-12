import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDatailsPageSchema } from 'pages/ArticleDetailsPage';
import {
    articleDetailsPageRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDatailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
