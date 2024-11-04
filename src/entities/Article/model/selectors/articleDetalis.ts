import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetalisData = (state:StateSchema) => state.articleDetalis?.data;
export const getArticleDetalisIsLoading = (state:StateSchema) => state.articleDetalis?.isLoading;
export const getArticleDetalisError = (state:StateSchema) => state.articleDetalis?.error;
