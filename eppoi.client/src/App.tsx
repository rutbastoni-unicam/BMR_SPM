import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';

export default function App() {
    const [currentPage, setCurrentPage] = useState<'welcome' | 'login' | 'register' | 'home'>('welcome');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

    const handleLogin = (name: string) => {
        setIsAuthenticated(true);
        setUserName(name);
        setCurrentPage('home');
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUserName('');
        setCurrentPage('welcome');
    };

    const handleNavigateToLogin = () => {
        setCurrentPage('login');
    };

    const handleNavigateToRegister = () => {
        setCurrentPage('register');
    };

    const handleNavigateToWelcome = () => {
        setCurrentPage('welcome');
    };

    if (!isAuthenticated) {
        if (currentPage === 'login') {
            return (
                <LoginPage
                    onLogin={handleLogin}
                    onNavigateToRegister={handleNavigateToRegister}
                    onNavigateToWelcome={handleNavigateToWelcome}
                />
            );
        }
        if (currentPage === 'register') {
            return (
                <RegisterPage
                    onRegister={handleLogin}
                    onNavigateToLogin={handleNavigateToLogin}
                    onNavigateToWelcome={handleNavigateToWelcome}
                />
            );
        }
        return (
            <WelcomePage
                onNavigateToLogin={handleNavigateToLogin}
                onNavigateToRegister={handleNavigateToRegister}
            />
        );
    }

    return <HomePage userName={userName} onLogout={handleLogout} />;
}
