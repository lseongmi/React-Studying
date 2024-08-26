import React, { Component } from 'react'; //React와 Component를 React 라이브러리에서 불러오는 코드

class R005_lifecycleEx extends Component {
    constructor(props) {    //가장 먼저 실행된다. 처음 한 번만 호출 가능하다
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[ THIS IS CONSTRUNCTOR FUNCTION ]</h2>
        )
    }
}

export default R005_lifecycleEx; //모듈을 기본으로 내보내는 코드, 다른 파일에서 사용할 수 있도록 함