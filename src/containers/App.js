import React, { Component } from "react";
import CardList from '../components/CardList.js';
import SearchBar from '../components/SearchBar.js';
import Scroll from '../components/Scroll.js';
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary.js";
// import { robots } from "../robots.js";

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value });
    //     const filteredRobots = this.state.robots.filter (robot => {
    //         return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    //     });
    // }


    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter (robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        return robots.length === 0 ?
            <h1>Loading...</h1> :
            (
            <div className="tc">
                <h1 className='f1'>Robofriends</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
    }
}   

export default App;
