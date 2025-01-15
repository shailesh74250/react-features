import './home.css'
import { useState } from 'react'
import Input from "../components/Input"

function Home() {
  const [suggession, setSuggession] = useState([])

  const callAPI = (query) => {
    fetch(`https://dummyjson.com/posts/search?q=${query}`)
    .then(response => response.json())
    .then(data => {
      setSuggession(data.posts);
    })
  }

  const debounce = (fn, delay) => {
    console.log('debounce');
    let time;
    return (...args) => {
      clearTimeout(time);
      time = setTimeout(() => {
        fn(args);
      }, delay);
    }
  }

  const deFun = debounce(callAPI, 5000);
  
  const handleOnChange = (event) => {
    // setTimeout(() => {
    //   callAPI(event.target.value);
    // }, 1000);
    console.log(deFun);
    
    deFun(event.target.value);
  }

  return (
    <div className='container'>
      <h1>Auto-Complete</h1>
      <div className='content'>
        <Input type='text' onChange={handleOnChange} />
        <div className='suggestion-list'>
          {suggession.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
  
  export default Home
  