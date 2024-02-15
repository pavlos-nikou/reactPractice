
import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
function App() {
  return (
    <>
    <Heading color='purple' text="this is the heading" fontSize="1px"/>
    <ColorList colors={["red", "green", "blue"]}/>
      {/* <Greeter person="Bill" from="Colt" />
      <Greeter person="Soto" from="Pavlos" />
      <Greeter person="Pavlo" />
      <Die numSides={5} />
      <Die />
      <Die numSides={2} />
      <ListPicker itemList={[1, 2, 3, 4]} />
      <ListPicker itemList={["a", "b", "c", "d"]} /> */}
      {/* <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/> */}
    </>
  )
}

export default App
