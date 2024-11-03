import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    readonly?: boolean;
    value?:Currency;
    onChange?:(value:Currency)=>void
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            className={classNames('', {}, [className])}
            label="Укажите валюту"
            options={options}
            onChange={onChangeHandler}
            readonly={readonly}
            value={value}
        />
    );
});
