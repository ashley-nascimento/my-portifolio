import { About } from "./components/About";
import { Introduction } from "./components/Introduction";
import { Sidebar } from "./components/Sidebar";
import { Stack } from "./components/Stack";
import { Wrapper } from "./styles/app";

export function App() {
  return (
    <Wrapper>
      <Sidebar />
      <main>
        <Introduction />
        <About />
        <Stack />
      </main>
    </Wrapper>
  )
}
