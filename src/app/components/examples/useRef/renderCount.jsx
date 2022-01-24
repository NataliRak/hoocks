import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const countRef = useRef(0);
    const [otherState, setOtherState] = useState(false);
    useEffect(() => {
        countRef.current++;
    });
    const toolgeCurrent = () => {
        setOtherState(!otherState);
    };
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>count: {countRef.current}</p>
            <button className="btn btn-info" onClick={toolgeCurrent}>
                ClickMe
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
