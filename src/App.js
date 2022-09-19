import './App.css';
import { AddContact, ContactList } from './components';

function App() {
  return (
    <div style={{padding: 30}}>
      <h1>Contact Aplications With REDUX</h1>
      <hr />
      <AddContact />
      <hr />
      <ContactList />
    </div>
  );
}

export default App;
