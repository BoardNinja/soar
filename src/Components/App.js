import React from 'react';
import ReactDOM from 'react-dom';
import './soarAi.css';
import { AppAi } from './AppAi.js'


export class App extends React.Component {
  render(){
    return(
      <div className='scene'>

  <div className='water'></div>

  <div className='pathway'>

<div className='SoarAi'>
  <div className='sensor_1'></div>
  <div className='sensor_2'></div>
  <div className='sensor_3'></div>
  </div>
  <div className='wall'></div>
<div className='grass'></div>


</div>
<div className='debugArea'>
  <textarea id='debugTextarea' className=''> N/A</textarea>
</div>
);

}
}
ReactDOM.render(<App />,
document.getElementById('app'));
