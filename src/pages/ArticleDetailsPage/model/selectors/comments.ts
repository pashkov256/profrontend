import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDatailsPage?.comments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDatailsPage?.comments?.error;
