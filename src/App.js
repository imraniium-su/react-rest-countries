import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>

    </div>
  );
}


export default App;

// countries code//

{/* <LoadCountriess></LoadCountriess> */ }
// function LoadCountriess() {
  //   const [countries, setCoutries] = useState([]);
  //   useEffect(() => {
  //     fetch('https://restcountries.com/v3.1/all')
  //       .then(res => res.json())
  //       .then(data => setCoutries(data))
  //   }, [])
  //   return (
  //     <div>
  //       <h1>Visiting All Countries</h1>
  //       <h3>Aviavle Countries: {countries.length}</h3>
  //       {
  //         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
  //       }
  //     </div>
  //   )
  // }
  // function Country(props) {
  //   return (
  //     <div>
  //       <h2>Name: {props.name}</h2>
  //       <h4>Population: {props.population}</h4>
  //     </div>
  //   )
  // }