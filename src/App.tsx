import {Outlet} from 'react-router';
import NavBar from './components/layout/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default App;
