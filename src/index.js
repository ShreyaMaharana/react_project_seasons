import React from "react";
import ReactDOM from "react-dom";

//initialisation of state(1st method)
class App extends React.Component {
  constructor(props) {
    super(props);

    //THIS IS THE ONLY TIME we do direct assignment
    //to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setstate!!!!
        this.setState({ lat: position.coords.latitude });

        //we did not!!!
        //this.state.lat = position.coords.latitude
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //react says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
