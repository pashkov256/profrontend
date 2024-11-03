import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent,
    memo, ReactElement, SelectHTMLAttributes, useCallback, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value:string;
    content:string
}

interface SelectProps {
    className?: string;
    readonly?: boolean;
    label?: string;
    value?: string;
    onChange?: (value:string)=> void;
    options?:SelectOption[];
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {};

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select disabled={readonly} className={cls.select} name="" id="" value={value} onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    );
});
