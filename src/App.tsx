import { ThemeProvider } from 'styled-components';
import { HomePage } from './pages/Home';
import { MainTheme } from './styles/themes';
import GlobalStyles from './styles/GlobalStyles';

export const App = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  );
}
