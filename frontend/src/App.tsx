import AppRouter from "./AppRouter"
import PageLayout from "./layout/PageLayout"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <AppRouter />
      </PageLayout>
    </BrowserRouter>
  )
}

export default App