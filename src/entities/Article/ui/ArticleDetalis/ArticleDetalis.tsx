import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    getArticleDetalisData,
    getArticleDetalisError,
    getArticleDetalisIsLoading,
} from '../../model/selectors/articleDetalis';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetalisReducer } from '../../model/slice/articleDetalisSlice';
import cls from './ArticleDetalis.module.scss';

interface ArticleDetalisProps {
    className?: string;
    id: string;
}
const reducers:ReducersList = {
    articleDetalis: articleDetalisReducer,
};
export const ArticleDetalis = memo((props: ArticleDetalisProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    // const isLoading = useSelector(getArticleDetalisIsLoading);
    const isLoading = true;
    const article = useSelector(getArticleDetalisData);
    const error = useSelector(getArticleDetalisError);
    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (<Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />);
    } else {
        content = (
            <div>article dateaiig</div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetalis, {}, [className])}>{content}</div>
        </DynamicModuleLoader>
    );
});
