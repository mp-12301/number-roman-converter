import React, { Component } from "react";

import { convertToNumber, convertToRoman } from "../utils";

import cls from "./App.css";

class App extends Component {
  onChangeNumber = (event) => {
    this.romanInput.value = convertToRoman(event.target.value);
  }

  onChangeRoman = (event) => {
    this.numberInput.value = convertToNumber(event.target.value);
  }

  render() {
    return (
      <div className={cls.container}>
        <div className={cls.label}>Number</div>
        <div className={cls.label}>Roman</div>
        <div className={cls.input}>
          <input
            onChange={this.onChangeNumber}
            type="text"
            ref={(input) => { this.numberInput = input; }}
          />
        </div>
        <div className={cls.input}>
          <input
            onChange={this.onChangeRoman}
            type="text"
            ref={(input) => { this.romanInput = input; }}
          />
        </div>
        <div className={cls.rules}>
          Accepts inputs from 1 - 3999, I - MMMCMXCIX
        </div>
      </div>
    );
  }
}

export default App;
