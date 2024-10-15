import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('BATON', () => {
    test('test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('text')).toBeInTheDocument();
    });
});
