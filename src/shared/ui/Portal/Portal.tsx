import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: ReactNode;// то что телепарируем
    element?: HTMLElement// КУДА
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
