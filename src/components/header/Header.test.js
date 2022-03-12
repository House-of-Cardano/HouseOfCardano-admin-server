import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('Header component', () => {
    test('renders home', () => {
        // Arange
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);
    
        // Act
        // ... nothing
    
        // Assert
        const helloElement = screen.getByText('home', { exact: true });
        expect(helloElement).toBeInTheDocument();
    });
    
    test('renders setup', () => {
        // Arange
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);
    
        // Act
        // ... nothing
    
        // Assert
        const helloElement = screen.getByText('setup', { exact: true });
        expect(helloElement).toBeInTheDocument();
    });
    
    test('renders transactions', () => {
        // Arange
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);
    
        // Act
        // ... nothing
    
        // Assert
        const helloElement = screen.getByText('transactions', { exact: true });
        expect(helloElement).toBeInTheDocument();
    });
    
    test('renders minting', () => {
        // Arange
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);
    
        // Act
        // ... nothing
    
        // Assert
        const helloElement = screen.getByText('minting', { exact: true });
        expect(helloElement).toBeInTheDocument();
    });
});
