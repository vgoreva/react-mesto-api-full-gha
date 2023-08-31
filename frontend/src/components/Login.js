import { useEffect, useState } from 'react';
import AuthPage from './AuthPage';

function Login({onLogin}) {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [emailFormError, setEmailFormError] = useState(" ");
    const [passwordFormError, setPasswordFormError] = useState(" ");

    useEffect(() => {
        setEmail(" ");
        setPassword("");
        setEmailFormError(" ");
        setPasswordFormError(" ")
    }, []);

    const inputs =
        [{
            type: "email",
            name: "email",
            id: "email",
            placeholder: "Email",
            required: true,
            value: email || " ",
            onChange: evt => {
                setEmail(evt.target.value);
                setEmailFormError(evt.target.validationMessage || " ")
            },
            errorMesage: emailFormError,
            key: 1
        },
        {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Пароль",
            required: true,
            value: password || "",
            onChange: evt => {
                setPassword(evt.target.value);
                setPasswordFormError(evt.target.validationMessage || " ")
            },
            errorMesage: passwordFormError,
            key: 2
        }]

    function handleLogin(e) {
        e.preventDefault();

        onLogin({
            email: email,
            password: password
        })
    }

    return (< AuthPage
        name="login"
        title="Вход"
        titleButton="Войти"
        onSubmit={handleLogin}
    >
        {inputs.map(({ type, minLength, name, id, placeholder, required, value, onChange, errorMesage, key }) => {
            return <div key={key}>
                <input
                    className={`login__input login__input_type_${name}`}
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
                    key={key + 1}
                />
                <div className="login__error" key={key + 2}>{errorMesage}</div>
            </div>
        })
        }
    </AuthPage >)
}

export default Login