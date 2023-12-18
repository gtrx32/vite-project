import AppRouter from './AppRouter';
import { ContextProvider } from './context/ContextProvider';
import PageLayout from './layout/PageLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <PageLayout>
          <AppRouter />
        </PageLayout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
