import { Outlet } from 'react-router-dom';
import Cursor from './components/Cursor';
import Header from './components/Header';

const Layout = () => {
    return (
        <>
            <Cursor />
            <Header />
            <main className="overflow-hidden">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
