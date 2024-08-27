import React, { Component } from 'react';
 
class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
        return {tmp_state:props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        this.setState({tmp_state2 : true}); //boolean이라는 유형의 데이터 세팅-> state의 값 변경 발생 ->shouldComponentUpdate 실행
        //setState - 변수의 선언과 초기화 동시에 실행
    }

    shouldComponentUpdate(props, state) {   //boolean 유형의 데이터 반환(true/false) - 값이 true 일 경우 render 한번 더 호출
        //지금은 true(state 값이 변경됨) -> render 함수 한 번 더 호출
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[ THIS IS shouldComponentUpdate FUNCTION ]</h2>
        )
    }
}

export default R008_LifecycleEx;