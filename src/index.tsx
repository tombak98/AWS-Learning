import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import Learning from './learning';

const root = createRoot(document.getElementById('root'))
root.render(<App/>)

// ReactDOM.render(<App/>, document.getElementById('root'))