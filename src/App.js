import { Navbar } from "./componets/Navbar/Navbar";
import { Main } from "./componets/Main/Main";
import { Skills } from "./componets/Skills/Skills";


import "./app.css"

function App() {
  return (
    <>
     <Navbar/>
     <div className="container">
      <Main/>
      <Skills/>
     </div>
     </>
  );
}

export default App;
