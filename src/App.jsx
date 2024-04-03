import './App.css'
import Calendar from './component/calendar'

function App() {
  const now = new Date(2017, 2, 8);
  // const now = new Date();
  return (
    <Calendar date={now} />
  );
}

export default App
