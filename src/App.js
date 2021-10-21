import './App.css';
import Doctors from './doctors';
import { DoctorContextProvider } from './doctors/context';

function App() {
  return (
    <DoctorContextProvider>
      <Doctors/>
    </DoctorContextProvider>
  );
}

export default App;
