import { render, screen } from '@testing-library/react';
import Logo from './index';

describe('logo component tests', () => {
    it('should navigate to ... when logo link is clicked', () => {
        render(<Logo src="/images/logo.svg" href="https://test.com" />)
        const logoComponent = screen.getByRole('link');
        expect(logoComponent).toHaveAttribute('href', 'https://test.com');
    });
})