import React, { Component } from 'react';

class R010_Variable extends Component {
    constructor(porps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react'; //중복선언 가능
        console.log('varName1 : ' + varName);

        var varName = '200';
        console.log('varName2 :'  + varName)

        let letName = 'react'; //재선언 불가능
        console.log('letName1 : ' + letName);
        // let letName = '200'
        // Parsing error : Identifier 'letName' ahs already been declared
        letName = 'react200';
        console.log('letName2 : ' + letName);

        const constName = 'react'; //상수라 값을 바꾸는 것도 재선언도 불가능
        console.log('constName : ' + constName);

        // const constName = '200'
        // Parsing error: Identifier 'constName' has already been declared
        // constName = 'react200';
        // Uncaught TypeError: Assingment to constant R010_Variable.

        
    }
    render() {
        return (
            <h2>[ THIS IS Variable ]</h2>
        )
    }
}

export default R010_Variable;