import logo from './logo.svg';
import './App.css';

function App() {
  let osdata = ["Android","Blackberry","iPhone","Windows phone"];
  let Mobiles = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div>
    <h3>Mobile Opearting System</h3>
      <ul>
        {osdata.map((el)=>(
          <li>{el}</li> 
        ))}
      </ul>
      <h3>Mobile Manfuctures</h3>
      <ul>
        {Mobiles.map((el)=>(
          <li>{el}</li> 
        ))};
      </ul>

    </div>
  );
}

export default App;
