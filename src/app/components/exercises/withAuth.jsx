import React from "react";
import CardWrapper from "../common/Card";

const withAuth = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const onLogin = () => localStorage.setItem("user", "{id:1}");
    const onLogOut = () => localStorage.removeItem("user");

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withAuth;
