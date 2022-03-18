import Helmet from 'react-helmet';
import Header from '../components/organisms/Header';
import GlobalStyles from './../config/GlobalStyles';

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
        <title>URL Shortening API</title>
      </Helmet>
      <GlobalStyles />
      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;
