import './App.css';
import React from 'react';
import { Layout, Space } from 'antd';
import { Button } from 'antd';


const {Header,Footer, Sider,Content} = Layout;

function App() {
  return (
    <div className="App">
    
  <Header  style={{color:"white",fontWeight:'bold'}}> Secrets Detector</Header>
  <div classname="buttons" >
    
  <Button style={{display:'block',margin:50,background:'lightgrey',marginBottom:0,width:'500px'}}>Download</Button>
  <Button style={{display:'block',marginLeft:900,background:"lightgrey",marginTop:0,width:'500px'}} classname="button">Options</Button>
  <Button style={{display:'block',margin:50,background:"lightgrey",marginBottom:0,width:'500px'}}>Upload</Button>
  <Button style={{display:'block',marginLeft:900,background:"lightgrey",marginTop:0,width:'500px'}} classname="button">Start</Button>
  <Button style={{display:'block',margin:50,background:"lightgrey", width:'500px'}}>Get Repository</Button>

    </div> 
    
    </div>
    
  );
}

export default App;
