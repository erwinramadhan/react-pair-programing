import { Component } from 'react'
import React from 'react'
import { Button } from 'reactstrap'
import './home.css';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            score: 0
        }
    }

    handleScoreTambah = () => {
        this.setState({
            score: this.state.score +1
        })
    }

    handleScoreReset = () => {
        this.setState({
            score: 0
        })
    }

    handleScoreKurang = () => {
        this.setState({
            score: this.state.score -1
        })
    }

    render() {
        return (
            <>
                <h2>{this.state.score}</h2>
                <Button color="primary" onClick={this.handleScoreTambah}>Tambah</Button>
                <Button color="danger" onClick={this.handleScoreReset}>Reset</Button>
                <Button color="warning" onClick={this.handleScoreKurang}>Kurang</Button>
            </>
        )
    }
}

export default Home