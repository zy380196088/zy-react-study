import React,{Component} from 'react';
import { render } from 'react-dom';
import PropType from 'prop-types';//自定义组件属性类型校验
import {
  Button, Input
} from 'antd';

import Header from './components/Header/index'

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'antd/dist/antd.css'
import './App.css';

moment.locale('zh-cn');


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
