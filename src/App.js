import * as React from "react";

import "./a.ts";

console.log(React);
export default class App extends React.PureComponent {
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  // }
  constructor() {
    super();
    this.state = { a: 0 };
    console.log(1111, __DEV__);
  }
  componentDidUpdate() {
    console.log(`APP componentDidUpdate`);
  }

  render() {
    console.log("APP render", <A a={this.state.a} />);
    return (
      <div
      // onClick={() => {
      //   this.setState({ a: this.state.a + 1 });
      // }}
      >
        <span>{this.state.a}</span>
        <A num={this.state.a} />
        <C count={this.state.a} />
      </div>
    );
  }
}

function C(params) {
  return (
    <div>
      <span>c-span</span>
      <i>c-i</i>
    </div>
  );
}

class B extends React.PureComponent {
  componentDidUpdate() {
    console.log(`A componentDidUpdate`);

    setTimeout(() => {
      const start = +new Date();
      let now = start;

      while (now - start < 1 * 1000) {
        now = +new Date();
      }
    });
    // console.log(start);
  }

  render() {
    console.log("b render");
    return <div>BBB</div>;
  }
}

class A extends React.PureComponent {
  constructor() {
    super();
    console.log(`constructor`);
  }
  componentDidUpdate() {
    console.log(`B componentDidUpdate`);
  }
  render() {
    console.log("a render");
    return <div>AAA</div>;
  }
}
