import './index.css';
import App from './App.jsx'
import { ThemeProvider } from './components/Theme/ThemeProvider.jsx';

const AppWithTheme = () => {  
    return (
      <ThemeProvider>
        <App />
      </ThemeProvider>    
  )
}

export default AppWithTheme;
