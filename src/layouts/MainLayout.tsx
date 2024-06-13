import React, { PropsWithChildren } from 'react';
import { Header, Footer } from '../components';

interface IMainLayout extends PropsWithChildren { }

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}