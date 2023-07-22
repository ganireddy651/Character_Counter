import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import List from './list'
import './App.css'

class App extends Component {
  state = {userInput: '', userDetails: []}

  onChangeInput = e => {
    this.setState({userInput: e.target.value})
  }

  onAdd = () => {
    const {userInput} = this.state

    const newList = {
      id: uuidv4(),
      userInput,
    }
    this.setState(preState => ({
      userDetails: [...preState.userDetails, newList],
    }))
    this.setState({userInput: ''})
  }

  render() {
    const {userInput, userDetails} = this.state

    return (
      <div className="app-container">
        <div className="left-container">
          <div className="top-section-card">
            <h1 className="main-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          <div className="no-inputs-container">
            {userDetails.length === 0 ? (
              <img
                className="no-inputs-image"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul className="list-container">
                {userDetails.map(each => (
                  <List each={each} key={each.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="right-container">
          <h1 className="counter-heading">Character Counter</h1>
          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="Enter the characters here"
              onChange={this.onChangeInput}
              value={userInput}
            />
            <button onClick={this.onAdd} className="add-btn" type="button">
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default App
