import React, { Fragment, useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
];

export function ListBox() {
    const [selected, setSelected] = useState(people[0]);

    return (
        <HListbox as="div" className={cls.ListBox} value={selected} onChange={setSelected}>
            {/* eslint-disable-next-line max-len */}
            <HListbox.Button className={cls.trigger}>
                {selected.name}

            </HListbox.Button>
            <HListbox.Options className={cls.options}>
                {people.map((person, personIdx) => (
                    <HListbox.Option
                        key={personIdx}
                        value={person}
                        as="div"
                    >
                        {({ active, selected }) => (
                            <li className={classNames(cls.item, { [cls.active]: active })}>
                                {selected && '!!!'}
                                {person.name}
                            </li>
                        )}
                        {person.name}
                    </HListbox.Option>
                ))}
            </HListbox.Options>

        </HListbox>
    );
}
