import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AutchContextProvuider } from './components/Store/auth-context';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
    <AutchContextProvuider basename="/">
        <App />
    </AutchContextProvuider>
    </BrowserRouter>
);
