import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import Settings from "./routes/Settings";
// Tools
import Calculator from "./routes/toolsRoutes/Calculator";
import Marks from "./routes/toolsRoutes/Marks";
import Resources from "./routes/toolsRoutes/Resources";

// Learn
import Flashcards from "./routes/learnRoutes/Flashcards";
import Quiz from "./routes/learnRoutes/Quiz";
import Todo from "./routes/learnRoutes/Todo";
export default function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />{" "}
        <Route path="settings" element={<Settings />} />
        <Route path="tools">
          <Route path="calculator" element={<Calculator />} />
          <Route path="marks" element={<Marks />} />
          <Route path="resources" element={<Resources />} />
        </Route>
        <Route path="study">
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="todo" element={<Todo />} />
        </Route>
      </Route>
    </Routes>
  );
}
