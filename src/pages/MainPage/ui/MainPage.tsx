import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'app/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Counter />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
