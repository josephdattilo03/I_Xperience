import logo from "./logo.svg";
import "./App.css";
import TitleCard from "./components/TitleCard/TitleCard";
import AboutMe from "./components/AboutMe/AboutMe";
import "bootstrap/dist/css/bootstrap.css";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <TitleCard />
      <div id="transition1" className="spacer"></div>
      <AboutMe />
      <div id="my-description" class="p-5 text-center">
        <p class="background-text">
          Hi! I'm Joseph Dattilo, an engineer and musician at the{" "}
          <span>University of Pennsylvania</span>. Born and raised in Nashville
          Tennessee, I've been fortunate enough to pursue my passions in drums,
          rowing, chinese, and programming through my high school and college
          journeys. At Penn, I am a backend engineer for{" "}
          <a href="https://pennapps.com/">PennApps</a> and the house drummer for
          the <a href="https://www.maskandwig.com/">Mask and Wig club</a>, which
          often makes my life quite chaotic. While school is a big commitment, I
          find comfort in the members of Mask and Wig, and on my weekends I
          split my time between social events and working on personal projects.
        </p>
        <p class="background-text">
          When I am not taking on new challenges, you can often find me watching
          YouTube videos on technology, mixology, and even comedy (usually right
          before bed after a busy day). I like to keep up on technological
          advancements, and recently get my daily news from the{" "}
          <a href="https://tldr.tech/">TL;DR</a> newsletter. As with most
          software engineers I am a caffeine addict, so I've been accumulating
          coffee drink recipes to start making drinks for my friends this
          upcoming year.
        </p>
        <p class="background-text">
          I am so excited for this internship and school year, and I hope that
          learning new skills abroad will open new doors as I continue my
          studies.
        </p>
      </div>
      <div id="transition2" className="spacer"></div>
      <ContactMe/>
    </div>
  );
}

export default App;
