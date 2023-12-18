import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [respons, setRespons] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums`)
      .then(res => {
        setRespons(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  })
  console.log(respons);
  return (
    <div className="App">
      <table>
        <thead>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
        </thead>
        {respons?.map((item) => {
          return (
            <tr>
              <td>{item?.userId}</td>
              <td>{item?.id}</td>
              <td>{item?.title}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;
