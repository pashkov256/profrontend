import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    readonly?: boolean;
    value?:Country;
    onChange?:(value:Country)=>void
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <Select
            className={classNames('', {}, [className])}
            label="Укажите страну"
            options={options}
            onChange={onChangeHandler}
            readonly={readonly}
            value={value}
        />
    );
});
