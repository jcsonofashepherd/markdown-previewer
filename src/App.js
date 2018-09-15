import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    const value = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';
    this.state = {
      value: value,
      content: marked(value)
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const value = event.target.value,
          content = marked(value);
    this.setState( () => {
      return {
        value: value,
        content: content
      }
    })
  }
  
  render() {
    return (
      <div className='rows'>
        <div className='columns'>
          <textarea
            onChange={this.handleChange}>{this.state.value}
          </textarea>
        </div>
        <div className='columns' dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    )
  }
}

export default App;
