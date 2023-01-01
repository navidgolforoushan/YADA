import React from "react";
import "./TestClass.css";

type SomeProps = {
  greeting: string;
  name: string;
  age: number;
};

export default class TestClass extends React.Component<SomeProps> {
  render(): React.ReactNode {
    return <div className="container">
        {this.props.greeting} {this.props.name} {this.props.age}
    </div>;
  }
}
