import React, { Component } from 'react';
import datatype from 'prop-types' //prop-types 패키지 임포트(데이터 타입 검사하는데 사용된다)

class R020_PropsObjVal extends Component {
    render() {
        let{
            ObjectJson
        } = this.props  //로컬변수로 선언

        return (
            <div style = {{padding: "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

R020_PropsObjVal.propTypes = {
    ObjectJson: datatype.shape({ //객체의 모양을 정의할 때 사용된다.
        react : datatype.string,
        twohundred : datatype.number    //실제 상위 컴포넌트에서 "200" 이라고 데이터를 입력했기 때문에 오류가 난다.
    })
}

export default R020_PropsObjVal;