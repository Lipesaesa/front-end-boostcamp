import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'

//JSX: HTML dentro do JavaScript (JavaScript XML)

const root = createRoot(document.getElementById('app'));
root.render(<App />);
