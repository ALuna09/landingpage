import portrait from './BabyRocky.jpg';
import './App.css';
import { Projects } from './Projects';

const App = () => {
  return (
    <main>
      <img 
        src={portrait}
        className='portrait'
        alt='portrait of Luna holding a dog'
      />
      <h1 className='App'>Hi! I'm Luna (and this is Rocky❤️)</h1>
      <hr />
      <h3 className="resume">Take a look at my <a href="http://google.com" target="_blank">resume</a> to see my work experience and education :)</h3> {/* //TODO Link to actual resume */}
      <hr />
      <h2>Projects:</h2>
      <Projects /> {/* //TODO Insert projects when ready */}
      <hr />
      <h2>About me:</h2>
      <p className="about">
        I'm a super chill gamer that enjoys relaxing games like minecraft or competitive ones like Tekken. 
        I find enjoyment in learning to program, and love talking about my favorite games.
        Currently, I am still learning how to efficiently use React, and feel like I'm picking it up pretty well.
      </p>
      <footer>
        <a 
          href="https://www.linkedin.com/in/anthony-luna-aa9ab521a/" 
          className="footer-link footer-text" 
          target="_blank"
          rel="noreferrer"
        >Linkedin</a>
        <a 
          href="a" 
          className="footer-link footer-text" 
          target="_blank"
          rel="noreferrer"
        >GitHub</a>
        <p className="footer-text">Anthony Luna 2023 &copy;</p>
      </footer>
    </main>
  );
}

export default App;
