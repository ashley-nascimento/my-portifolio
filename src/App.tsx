import { Introduction } from "./components/Introduction";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./styles/app";

export function App() {

  return (
    <Wrapper>
      <Sidebar />
      <main>
        <Introduction/>
        
      </main>
    </Wrapper>
  )
}
