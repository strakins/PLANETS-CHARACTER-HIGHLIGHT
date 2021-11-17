import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbars from './component/Navbars';
// import PlanetForm from './component/PlanetForm';
import Strakins from './component/Strakins';






function App(){

 
  return(
    <div className="p-5 bg-secondary">
      < Navbars />
      < Strakins />
      {/* < PlanetForm /> */}
    </div>
  );
}


export default App;