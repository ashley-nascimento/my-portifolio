import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
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
        <Projects />
      </main>
      <Footer />
    </Wrapper>
  )
}
