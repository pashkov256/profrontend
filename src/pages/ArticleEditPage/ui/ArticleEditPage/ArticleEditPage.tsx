import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}
const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id:string}>();

    const isEdit = Boolean(id);
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {
                isEdit ? `РЕДАКТИРОВАНИЕ СТАТЬИ С ID = ${id}` : 'СОЗДАНИЕ НОВОЙ СТАТЬИ'
            }
        </Page>
    );
});

export default ArticleEditPage;
