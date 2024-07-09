import Header from './components/header/Header';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import QuotationPage from './pages/QuotationPage';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <Header/>
      <Container maxWidth="xl">
        <QuotationPage />
      </Container>
    </div>
  );
}

export default App;
