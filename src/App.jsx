import './index.css';
import { City } from './containers/City';
import { Header } from './containers/Header/Header';
import { PageWrapper } from './App.styled.js';
import { useTheme } from './components/Theme/ThemeProvider.jsx';
import { theme as themeObject } from './theme.js';

const App = () => { 
  const { theme } = useTheme();

    return (
      <PageWrapper style={{background: theme === 'light' ? 'transparent': `${themeObject.dark}`}}>
        <Header />
        <City />
      </PageWrapper>      
  )
}

export default App;