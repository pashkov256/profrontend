import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { Article } from 'entities/Article';
import {
    getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { fetchArticleList } from 'pages/ArticlesPage/model/service/fetchArticleList/fetchArticleList';
import { useSelector } from 'react-redux';

interface FetchArticleListProps {
    page?:number
}

export const initArticlesPage = createAsyncThunk<
    void, void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (props, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticleList({ page: 1 }));
        }
    },
);
