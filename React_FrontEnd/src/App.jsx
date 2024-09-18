import Hello from "./assets/Hello"
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
function App() {
  const helloData = [
    {name: 'Pakin',message: 'Hiiii'},
    {name: 'Dew',message: 'Heyyyy'}
  ]
  return (
      <div className="App">
        <Counter />
        {helloData.map((data , index) => (
          <Hello key={index} name={data.name} message={data.message} />
        ))}
        
        <Contact email="pakin.wasu2002@gmail.com" phone = '0617312037' />
      </div>

  );
}

export default App;
