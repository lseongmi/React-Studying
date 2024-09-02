import React, { Component } from 'react';

class R020_PropsObjVal extends Component {
    render() {
        let{
            ObjectJson
        } = this.props

        return (
            <div style = {{padding: "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

R020_PropsObjVal.propTypes = {
    ObjectJson: R018_PropsDatatype.shape({
        react : R018_PropsDatatype.string,
        twohundred : datatype.number
    })
}

export default R020_PropsObjVal;