import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AutchContextProvuider } from './components/Store/auth-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AutchContextProvuider>
    <App />
    </AutchContextProvuider>
);
