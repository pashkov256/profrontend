import { ReactNode } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import {
    getCounterValue,
} from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
    children?: ReactNode;
}

export const Counter = (props: CounterProps) => {
    const { children } = props;
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const inc = () => {
        dispatch(counterActions.increment());
    };
    const dec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>{counterValue}</h1>
            <Button onClick={inc}>inc</Button>
            <Button onClick={dec}>dec</Button>

        </div>
    );
};
