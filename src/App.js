import { useState } from "react";
import { PuffLoader } from "react-spinners";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import EducationPage from './Pages/EducationPage';
import SkillsPage from './Pages/SkillsPage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import FooterPage from './Pages/FooterPage';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
 
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
    return (
      <>
        {isLoading ? (<div className = "puffloader"><PuffLoader className = "puffloader" color="#1B9FFE"/></div>) : 
        (<>
          <HomePage />
          <AboutPage />
          <EducationPage />
          <SkillsPage />
          <ProjectPage />
          <ContactPage />
          <FooterPage />
        </>
        )}
      </>
    );
}

