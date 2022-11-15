import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [users, setUsers] = useState(null);

  // const debounce = (func, delay) => {

  //   let inDebounce;

  //   return function (...args) {
  //     const context = this;
  //     inDebounce && clearTimeout(inDebounce);
  //     console.log("+++")
  //     inDebounce = setTimeout(() => func.apply(context, args), delay);
  //   };
  // };

  // const handleChange = (e) => {
  //   console.log("+++", e.target.value)
  //   const { value } = e.target
  //   fetch(`https://api.github.com/search/users?q=${value}`)
  //     .then(res => res.json())
  //     .then(data => setUsers(data.items))

  // }
  // const data = debounce(handleChange, 500)
  // console.log({ users })


  //------------------------------

  const [query, setQuery] = useState(null);
  const [users, setUsers] = useState(null);

  console.log({ query })
  console.log({ users });

  useEffect(() => {
    if (query) {
      let timer = setTimeout(() => {
        fetchData()
      }, 500);

      return () => {
        clearTimeout(timer)
      }
    }
  }, [query])


  const fetchData = () => {
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(data => setUsers(data.items))
  }


  //--------------------------------------------------

  return (
    <div className="App">
      {/* <input type={"text"} name={"search"} onChange={data} /> */}
      <input type={"text"} name={"search"} onChange={(e) => setQuery(e.target.value)} />
      {
        users?.length > 0 &&
        <div>
          {
            users.map((user, index) =>
              <div key={index}>
                <span>{user.login}</span>
              </div>
            )
          }
        </div>
      }
    </div>
  );
}

export default App;
