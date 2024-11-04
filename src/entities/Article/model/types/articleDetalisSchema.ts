import { Article } from './article';

export interface ArticleDetalisSchema{
    isLoading:boolean;
    error?:string;
    data?:Article
}
