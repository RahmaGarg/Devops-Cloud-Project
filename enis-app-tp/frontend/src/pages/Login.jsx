import React from 'react';
import Form from "../components/Form";

function Login() {
    return (
        <div>
            <h1>Bonjour Rahma</h1>
            <Form route="/api/token/" method="login" />
        </div>
    );
}

export default Login;
