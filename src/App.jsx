import { useRef } from "react";
import "./App.css";
import Welcomepage from "./Pages/Welcomepage";
import OurStory from "./Pages/OurStory";
import Navbarr from "./Pages/Navbarr";
import PricePage from "./Pages/PricePage";
import ContactPage from "./Pages/ContactPage";

function App() {
  const welcomeRef = useRef(null);
  const storyRef = useRef(null);
  const priceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbarr
        onScrollToSection={{
          welcome: welcomeRef,
          story: storyRef,
          price: priceRef,
          contact: contactRef,
        }}
      />
      <div ref={welcomeRef} data-section="welcome">
        <Welcomepage />
      </div>
      <div ref={storyRef} data-section="story">
        <OurStory />
      </div>
      <div ref={priceRef} data-section="price">
        <PricePage />
      </div>
      <div ref={contactRef} data-section="contact">
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
