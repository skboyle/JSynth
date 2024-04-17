import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as Tone from 'tone';

const Root = () => {
  React.useEffect(() => {
    document.addEventListener('click', () => {
      Tone.start();
    });

    return () => {
      document.removeEventListener('click', () => {
        Tone.start();
      });
    };
  }, []);

  return <App />;
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Root />);
