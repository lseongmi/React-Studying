import React, { Component } from 'react';

class R013_ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: 'React200',
            num: 3
        };
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1,1);
        this.Function3();
        this.Function4();
        this.Function5(0,2,3)


        function Function1(num1) {
            return console.log(num1 + '. Es5 Function');
        }
    }

    Function2 = (num1, num2) => { //간단하게 () => {}로 표현
        let num3 = num1 + num2;
        console.log(num3 + 'ArrowFuntion : ' + this.state.arrowFuc); //컴포넌트의 state 변수에 접근해 사용(this 는 component를 상속 받은 R013_ArrowFunction 이니까.)
    }

    Function3() {
        var this_bind = this;
        setTimeout(function() {
            console.log(this_bind.state.num + '. Es5 Callback Funtion no Bind : ');
            console.log(this.state.arrowFuc);
        }, 100);
    }

    Function4() {
        setTimeout(function() {
            console.log('4. Es5 Callback Function Bind : ' + this.state.arrowFuc);
        }.bind(this),100)
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4 + 'Arrow Callback Function : ' + this.state.arrowFuc);
        }, 100)
    }

    render() {
        return (
            <h2>[THIS IS ArrowFunction]</h2>
        )
    }
}

export default R013_ArrowFunction;