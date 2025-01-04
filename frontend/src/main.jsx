import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Routes } from './routes';
import { AuthProvider } from './hooks/auth/authProvider';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    </StrictMode>
);
