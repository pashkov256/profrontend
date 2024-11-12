import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.articleDatailsPage?.recommendations?.isLoading;
export const getArticleRecommendationsError = (state: StateSchema) => state.articleDatailsPage?.recommendations?.error;
