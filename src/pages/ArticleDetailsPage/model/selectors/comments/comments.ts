import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state:StateSchema) => state.articleDetalisComments?.isLoading;
export const getArticleCommentsError = (state:StateSchema) => state.articleDetalisComments?.error;
