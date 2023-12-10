import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterEffectHook from "./bases/CounterEffectHook";
import CounterReducer from "./bases/CounterReducer";

function App() {
 
  return (
    <>
    <h1>React</h1>
      <Counter initialValues={8}  />
      <CounterBy  />
      <CounterEffect />
      <CounterEffectHook />
      <CounterReducer />
    </>
  );
}

export default App;
