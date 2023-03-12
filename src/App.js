import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  const readtoken = "7c15ff927f389e502e7bc63e02212cd6e4bbbce2";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://api.buttercms.com/v2/pages/portfolio/a-portfolio-site?auth_token=${readtoken}`).then(res => {
        setData(res.data.data.fields.my_personal_portfolio);
      }).catch(err => {
        console.log(err);
      })
    }
    getData();
  },[])
  return (
    <div>
      <Navbar />
      <Home content={data[0]}/>
      <About content={data[1]}/>
      <Skills content={data[2]}/>
      {/* <Works/> */}
      <Contact/>
    </div>
  );
}

export default App;
