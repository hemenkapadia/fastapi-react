import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

interface AppState {
  user: string
  host: string
}
interface AppProps {
}

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    // Declare initial state using hooks
    this.state = {
      user: 'Unknown',
      host: 'Unknown'
    }
  }

  componentDidMount(): void {
    fetch('/api/user')
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                user: result.username,
                host: result.hostname
              })
            },
            (error) => {
              console.error(error)
            })
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>

            <p>Hello {this.state.user} connecting from {this.state.host}</p>
          </header>
        </div>
    )
  }
}

export default App;
