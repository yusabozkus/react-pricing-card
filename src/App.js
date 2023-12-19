import { useContext } from 'react';
import { PricingContext } from './context/PricingContext';
import './App.css';
import Toggle from './components/Toggle';
import PricingCard from './components/PricingCard';

function App() {
  const { allPricing, enabled , setEnabled } = useContext(PricingContext);

  return (
    <div className="App bg-indigo-200 h-screen w-full">
      <Toggle />
      <PricingCard />
    </div>
  );
}

export default App;
