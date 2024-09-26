import { useState} from 'react';
// import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  // you must call it on the top level
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');
  // let tabContent = 'Please click a button'
  function handleSelect(selectedButton) {
    // selectedButton => 'either of the 4 buttons
    setSelectedTopic(selectedButton)
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            {/* alternative
            <TabButton label="Components"></TabButton> and then use the label as a parameter in the function insde the tabutton.jsx */}
            <TabButton onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>States</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;