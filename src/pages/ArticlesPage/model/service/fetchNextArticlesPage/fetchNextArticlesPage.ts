import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { fetchArticleList } from 'pages/ArticlesPage/model/service/fetchArticleList/fetchArticleList';

export const fetchNextArticlePage = createAsyncThunk<
    void, void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlePage',
    async (props, thunkApi) => {
        const {
            getState, dispatch,
        } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticleList({ page: page + 1 }));
        }
    },
);
