import { Navbar } from "./componets/Navbar/Navbar";
import { Main } from "./componets/Main/Main";
import { Skills } from "./componets/Skills/Skills";
import { WorkExperience } from "./componets/WorkExperience/WorkExperience";
import { Contactme } from "./componets/Contactme/Contactme";

import "./app.css"

function App() {
  return (
    <>
     <Navbar/>
     <div className="container">
      <Main/>
      <Skills/>
      <WorkExperience/>
      <Contactme/>
     </div>
     </>
  );
}

export default App;
