import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?:boolean;
    error?:string;
    view:ArticleView;
    // pagination
    page:number;
    limit?:number;
    _inited:boolean;
    hasMore:boolean;
}
