
// import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
          <h2>Core Concepts</h2>
        <section id="core-concepts">
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}
          />
          <CoreConcept {...CORE_CONCEPTS[2]}
          />
          <CoreConcept {...CORE_CONCEPTS[3]}
          />



        </section>
      </main>
    </div>
  );
}

export default App;