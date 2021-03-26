import { Component } from 'react'
import React from 'react'

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
                <button onClick={this.handleScoreTambah}>Tambah</button>
                <button onClick={this.handleScoreReset}>Reset</button>
                <button onClick={this.handleScoreKurang}>Kurang</button>
            </>
        )
    }
}

export default Home