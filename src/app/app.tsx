import '../index.css';
import { lazy } from 'react';

const HomePage = lazy(() => import('@pages/home/ui'));

export function App() {
    return (
        <div className="App">
            <HomePage />
        </div>
    );
}
