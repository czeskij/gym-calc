import { useState } from 'react'
import './App.css'
import Tabs from './components/Tabs'
import ProportionCalc from './components/ProportionCalc'
import PercentCalc from './components/PercentCalc'
import GreetingBanner from './components/GreetingBanner'

export default function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="app">
      <GreetingBanner />
      <Tabs activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === 0 ? <ProportionCalc /> : <PercentCalc />}
    </div>
  )
}
