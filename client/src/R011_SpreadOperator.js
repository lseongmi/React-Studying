import React, { Component } from 'react';

class R011_SpreadOperator extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //javascript array
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]]; //인덱스 접근 
        //varsumVarArr = [].concat(varArray1, varArray2);//concat 이용
        console.log('1. sumVarArr : ' + sumVarArr);

        //Es6 Array
        let sumLetArr = [...varArray1, ...varArray2]; //스프레드 연산자를 사용함
        console.log('2.sumLetArr : ' + sumLetArr);
        const [sum1, sum2, ...remain] = sumLetArr;//sum1 = sumLetArr[0], sum2 = sumLetArr[1] 나머지 배열 값은 ..remain변수에 넣는다
        console.log('3.sum : ' + sum1 + ', sum2 : ' + sum2 + 'remain : ' + remain);

        var varObj1 = { key1 : 'vall', key2: 'val2' };
        var varObj2 = { key2: 'new2', key3 : 'val3' };

        //javascript Object
        var sumVarObj = Object.assign({}, varObj1, varObj2); //객체 두개를 합치기 위해 assign 함수 이용
                                                            //첫번째 인자값은 return 값 뒤의 인자에 객체들을 ,로 연결해 나열
        console.log('4. sumVarObj :' + JSON.stringify(sumVarObj));

        //ES6 Object
        var sumLetObj = {...varObj1, ...varObj2}; //스프레드 연산자를 사용하여 여러 개의 객체 합칠 수 있음
        console.log('5. sumLetObj : ' + JSON.stringify(sumLetObj));
        var { key1, key3, ...others } = sumLetObj;
        console.log('6. key1 : ' + key1 + ', key3 : ' + key3 + ', others : ' + JSON.stringify(others));
    }
    render() {
        return (
            <h2>[THIS IS SpreadOperator]</h2>
        )
    }
}

export default R011_SpreadOperator;