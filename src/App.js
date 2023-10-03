import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Shop } from './components/Shop';
import { API_KEY, API_URL } from './config';

function App() {
    return (
        <>
            <Header />
            <Shop />
            <Footer />
        </>
    );
}

export default App;
