import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const focusRef = useRef();
    const handleClick = () => {
        focusRef.current.type = "text";
        focusRef.current.focus();
    };

    const handleClickWidth = () => {
        focusRef.current.style.width = "150px";
        focusRef.current.style.height = "80px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={focusRef}
                id="email"
                className="form-control"
                type="email"
            />
            <button className="btn btn-warning m-2" onClick={handleClick}>
                {" "}
                Focus
            </button>
            <button className="btn btn-dark" onClick={handleClickWidth}>
                {" "}
                Width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
