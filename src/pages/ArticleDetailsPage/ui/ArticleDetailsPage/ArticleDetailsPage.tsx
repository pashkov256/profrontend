import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { ArticleDetalis } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import {
    fetchCommentByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments/comments';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers:ReducersList = {
    articleDetalisComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-detalis');
    const { id } = useParams<{id:string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    useEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    }, [dispatch, id]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t('Статья не найдена')}</div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetalis id={id} />
                <Text className={cls.commentTitle} title={t('Комментарий')} />
                <CommentList
                    isLoading={commentsIsLoading}
                    className={cls.comment}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
