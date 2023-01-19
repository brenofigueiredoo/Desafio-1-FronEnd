import Body from "./components/Body";
import { ContextProvider } from "./Context/Context";


const App = () => {
  return (
    <>
    <ContextProvider>
      <Body/>
    </ContextProvider>
    </>
  );
}

export default App;
