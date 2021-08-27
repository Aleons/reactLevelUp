import { Select } from './Component/Select/Select';

function App() {
  const optionsData = [
                    {
                      text:"React",
                      value:"react",
                    },
                    {
                      text:"Vue",
                      value:"vue",
                    },
                  ];
  return (
    <div className="App">
      <Select optionsData = {optionsData}/>
    </div>
  );
}

export default App;
