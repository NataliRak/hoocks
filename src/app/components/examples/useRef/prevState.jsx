import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    const toolgeCurrent = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>prevState: {prevState.current}</p>
            <p>current state: {otherState}</p>
            <button className="btn btn-info" onClick={toolgeCurrent}>
                {otherState}
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
