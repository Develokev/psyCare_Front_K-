import { FooterBar } from "./Home/Components";
import { AppRouters } from "./Routers/AppRouters";

export function App() {

  return (

    <>
      <main>
          <AppRouters />
      </main>

      <footer>
          <FooterBar />
      </footer>
    </>
  )
}
