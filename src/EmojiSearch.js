import React from "react";
import EmojiData from "./emojiList.json";
// import { CopyToClipboard } from "react-copy-to-clipboard";
class Emoji extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      copy: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };
  handleCopy = (event) => {
    this.setState({
      copy: true,
    });
  };
  render() {
    return (
      <div className="Emoji">
        <div className="header-container">
          <div className="EmojiSearch1">{EmojiData[2].symbol}</div>
          <div className="EmojiSearch">
            <h1>Emoji Search</h1>
          </div>
          <div className="EmojiSearch2">{EmojiData[2].symbol}</div>
        </div>

        <div className="Search">
          <input
            type="text"
            className="Search"
            placeholder="Search..."
            onChange={this.handleChange}
          ></input>
        </div>

        <div className="dataItem">
          {EmojiData.filter((filterItem) => {
            if (
              filterItem.title
                .toLowerCase()
                .includes(this.state.searchText.toLowerCase())
            ) {
              return true;
            }
            if (filterItem.keywords.includes(this.state.searchText)) {
              return true;
            } else {
              return false;
            }
          }).map((item) => {
            return (
              <div
                key={item.title}
                onClick={() => {
                  navigator.clipboard.writeText(item.symbol);
                }}
              >
                <li className="result">{item.symbol}</li>

                {/* <CopyToClipboard
                  text={item.symbol}
                  onCopy={this.handleCopy}
                ></CopyToClipboard> */}
              </div>
              // <CopyToClipboard text={item.symbol} onCopy={this.handleCopy}>
              //   Copy to clipboard
              // </CopyToClipboard>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Emoji;
