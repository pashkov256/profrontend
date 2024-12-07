import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?:string;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    trigger: React.ReactNode;
    items: DropdownItem[];
    direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const {
        className, items, trigger, direction = 'bottom right',
    } = props;

    const mapDirectionClass: Record<DropdownDirection, string> = {
        'bottom left': cls.optionsBottomLeft,
        'bottom right': cls.optionsBottomRight,
        'top left': cls.optionsTopLeft,
        'top right': cls.optionsTopRight,
    };
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <Menu as="div" className={classNames(cls.Dropdown, { }, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(cls.item, { [cls.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}