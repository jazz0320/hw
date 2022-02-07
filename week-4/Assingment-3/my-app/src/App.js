
import React, { Component } from 'react';
import './index.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header class="header">
          <h1><a href="" class="logo">Travel</a></h1>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
          <ul class="menu">
            <li><a href="#work">Activity</a></li>
            <li><a href="#about">Ticket</a></li>
            <li><a href="#careers">Hotel</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </header>
        <h2 id="w1">Welcome</h2>

        <div className="container">
          <h3>Popular Tours</h3>

          <div className="flexbox">
            <div class="box">
              <p>Item 1</p>
            </div>

            <div class="box">
              <p>Item 2</p>
            </div>

            <div class="box">
              <p>Item 3</p>
            </div>

            <div class="box">
              <p>Item 4</p>
            </div>
          </div>

          <div className="action" >
            <button className="button" onClick={this.triggerButton}>Call To Action</button>
          </div>

          <div className="flexbox" style={{ display: this.state.callBox ? 'flex' : 'none' }}>

            <div class="box">
              <p>Item 5</p>
            </div>


            <div class="box">
              <p>Item 6</p>
            </div>

            <div class="box">
              <p>Item 7</p>
            </div>

            <div class="box">
              <p>Item 8</p>
            </div>
          </div>

        </div>

      </div>
    );
  }


  state = {

  }

  // call to action button
  triggerButton = () => {
    this.setState({
      callBox: !this.state.callBox
    });
  };
}

export default App;


