import React from 'react';
import {Card, Button} from 'antd';
import './App.css';

const { Meta } = Card;

function App() {
  return (
    <div className="App" >
      <a className="App-body">
      <Card
        hoverable
        style={{ width: 240, margin: "auto"}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
      <Button type="primary">Primary</Button>
      <Meta title="this is a person" description="this is a description" />
      </Card>
      </a>
    </div>
  )
}

export default App;
