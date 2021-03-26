import { Component } from 'react'
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './home.css';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            score: 0,
            x: null,
            y: null,
            operator: null,
            result: null
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

    handleInput = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        
        const { x, y, operator } = this.state
        
        switch (operator) {
            case '+':
                return this.setState(prevState => {return{
                    result: prevState.result = +x + +y
                }})
            case '-':
                this.setState({
                    result: x - y
                })
                break;
            case '*':
                this.setState({
                    result: x * y
                })
                break;
            case '/':
                this.setState({
                    result: x / y
                })
                break;
                default:return this.state
        }
    }

    render() {
        return (
            <>
                <h2>{this.state.score}</h2>
                <Button color="primary" onClick={this.handleScoreTambah}>Tambah</Button>
                <Button color="danger" onClick={this.handleScoreReset}>Reset</Button>
                <Button color="warning" onClick={this.handleScoreKurang}>Kurang</Button>
                <hr/>
                <Form style={{ width: "50%", margin: "0 auto" }}>
                    <FormGroup>
                        <Label>X</Label>
                        <Input 
                            type="number"
                            name="x"
                            placeholder="Masukan nilai X"
                            onChange={(event) => this.handleInput(event)}
                        />
                    </FormGroup>

                    <Input type="select" name="operator" onChange={(event) => this.handleInput(event)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </Input>

                    <FormGroup>
                        <Label>Y</Label>
                        <Input
                            type="number"
                            name="y"
                            placeholder="Masukan nilai Y"
                            onChange={(event) => this.handleInput(event)}
                        />
                    </FormGroup>
                </Form>
                <h2>{this.state.result}</h2>
            </>
        )
    }
}

export default Home