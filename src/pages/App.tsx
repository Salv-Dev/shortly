import Helmet from 'react-helmet';
import Header from '../components/organisms/Header';
import Main from '../components/organisms/Main';
import Footer from '../components/organisms/Footer';
import GlobalStyles from './../config/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme as theme } from './../helpers/theme';

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
        <title>Shortly - URL Shortening App</title>
      </Helmet>
      <GlobalStyles />
      <div className="App">
        <ThemeProvider theme={theme}>
          <Header />
          <Main />
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
