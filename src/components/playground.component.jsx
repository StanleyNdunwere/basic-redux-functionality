import React from "react";
import { connect } from "react-redux";
import { changeTitleState } from "../redux/actions/playground.actions";

class PlaygroundComponent extends React.Component {
  constructor(props) {
    super(props);

    this.titleList = [
      "Roman Numerals",
      "Old Roger Formula",
      "Randezvous",
      "Cantankerous Buggy",
      "Ayesha",
      "Rumpelstiltskin",
    ];
  }

  getRandomTitle = (titleList) => {
    console.log("the props is here: ", this.props);
    return titleList[Math.floor(Math.random() * 6)];
  };

  changeTitleOfHeader = () => {
    let title = this.getRandomTitle(this.titleList);
    this.props.dispatch(changeTitleState(title));
  };

  render() {
    return (
      <div>
        <h1>This is the header, click button to change what it says</h1>
        <h2>Title = {this.props.title}</h2>
        <input type="submit" onClick={this.changeTitleOfHeader} />
      </div>
    );
  }
}

const mapStateToProps = (reducerState, ownProps) => {
  return {
    title: reducerState.playgroundReducer.title,
  };
};

export default connect(mapStateToProps)(PlaygroundComponent);
