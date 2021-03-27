import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';


export class Calculator extends Component {
    constructor() {
        super();
        this.state ={
            value1: 0,
            value2: 0,
            operator: '',
            result: 0
        };
    }
    calculate = () => {
    switch (this.state.operator){
        case '+' :
          this.setState({
            result: +this.state.value1 + +this.state.value2
          })
          break;
        case '-' :
          this.setState({
            result: this.state.value1 - this.state.value2
          })
          break;
        case '*' :
          this.setState({
            result: this.state.value1 * this.state.value2
          })
          break;
        case '/' :
          this.setState({
            result: this.state.value1 / this.state.value2
          })
          break;
        default :
          return this.state
      }
    }
    handleInput = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <Form style={{width:"20%", margin:"0 auto"}}>
                    <FormGroup>
                        <h4>Kalkulator Sederhana</h4>
                        <Input style={{borderRadius:"10px"}}
                        type="number"
                        name="value1"
                        placeholder="Masukkan angka di sini"
                        onChange={this.handleInput}
                        />
                        <Input style={{marginTop:'10px', borderRadius:"10px"}} type="select" name="operator" id="" onClick={this.handleInput}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                        </Input>
                        <Input 
                        style={{marginTop:'10px', borderRadius:"10px"}}
                        type="number"
                        name="value2"
                        placeholder="Masukkan angka di sini"
                        onChange={this.handleInput}
                        />
                        <Button style={{marginTop:'10px'}} onClick={this.calculate}>Hasil</Button>
                        <h2 style={{marginTop:'10px'}}>{this.state.result}</h2>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Calculator
