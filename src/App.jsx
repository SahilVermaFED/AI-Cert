import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/homepage';
import { ROUTES } from './constants/app-contants';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                  <Route path={ROUTES.HOME} element={<Homepage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
