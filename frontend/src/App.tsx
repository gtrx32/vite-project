import AppRouter from './AppRouter';
import { ContextProvider, useStateContext } from './context/ContextProvider';
import PageLayout from './layout/PageLayout';
import { BrowserRouter, useNavigate } from 'react-router-dom';

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
