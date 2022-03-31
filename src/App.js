import {Header} from './layouts/Header'
import Main from './layouts/Main'
import {Footer} from './layouts/Footer'
import { ContextProvider } from './context';

function App() {
  return (
   <ContextProvider>
      <Header/>
      <Main/>
      <Footer/>
   </ContextProvider>
  );
}

export default App;
