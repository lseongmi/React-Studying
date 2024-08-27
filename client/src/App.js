import React from 'react';
import './App.css';
import LifecycleEx from './R008_LifecycleEx';

function App() {
  return (
    <div>
      <h1>Start REact 200!</h1>
      <p>HTML 적용하기</p>
      <LifecycleEx  
        prop_value = 'FromApp.js' //R006_LifecycleEx로 prop_value 라는 변수 전달
      />
      
    </div>
  );
}

export default App;