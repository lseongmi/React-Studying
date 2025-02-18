import React, { Component } from 'react';

class R009_Es6 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jsString1 = '자바스크립트';
        var jsString2 = '입니다\n다음 줄입니다.';
        console.log(jsString1 + '문자열'  + jsString2 + '~');

        var Es6String1 = 'ES6';
        var Es6String2 = '입니다';

        //`(벡틱)을 사용하여 전체 문자열과 변수를 묶어 사용한다
        console.log(`${Es6String1} 문자열${Es6String2}!!
        ____다음 줄 입니다.`);


        //startWith : 변수 앞에서 부터
        //endsWith : 변수 뒤에서 부터
        //includes : 해당 글자 포함 여부
        var LongString = "ES6에 추가된 String 함수들입니다.";
        console.log('startWith : ' + LongString.startsWith("ES6에 추가"));
        console.log('endsWith : ' + LongString.endsWith("함수들입니다."));
        console.log('includes : ' + LongString.includes("추가된 String"));

    }

    render() {
        return (
            <h2>[ THIS IS ES6 STRING ]</h2>
        )
    }
    
}

export default R009_Es6;