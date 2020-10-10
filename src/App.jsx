import React from 'react';
import logo from './logo.svg';
import './App.css';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "header",
      {
        className: "App-header"
      },
      React.createElement(
        "p", {},
        "Edit",
        React.createElement(
          "code",
          {},
          "src/App.js"
        ),
        "and save to reload."
      ),
      React.createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "Learn React",
      ),
    )
  )
}

function tets() {
  return <div className="hello" data={1} >
    <span>go</span>
  </div>
}

function PAN2() {
  return <div>pan_1112</div>
}

//stateNode 保存了每个节点的 DOM 信息
//从父节点开始，向下依次遍历子节点，深度优先的渲染完子节点后，再回到其父节点去检查是否有兄弟节点，如果有兄弟节点，则从该兄弟节点开始继续深度优先的渲染，直到回退到根节点结束，所以需要链表来存储组件关系，形成一棵组件树

class PAN1 extends React.Component {
  render() {
    return <div data="第二">
      <p data="第三" >
        <span data="第四">----</span>
        <span data="第五">****</span>
      </p>
      <PAN2 data="第六" />
    </div>
  }
}

export default PAN1;



