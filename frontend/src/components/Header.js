import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'

function Header({name, userEmail}) {

    function onSignOut(){
        localStorage.removeItem('jwt')
    }

    return (
        <header className="header">
            <img
                className="header__logo"
                src={logo}
                alt="МЕСТО"
            />

            {name === "signup" || name === "signin" ?
            <Link to={name === "signup" ? "/signin" : "/signup"} className="header__link">
                {name === "signup" ? "Войти" : "Регистрация"}
            </Link>
            :
            <>
                <div className="header__container">
                    <p className="header__email">{userEmail}</p>
                    <Link to={"/signin"} className="header__logout" onClick={onSignOut}>Выйти</Link>
                </div>
            </>

        }

        </header>
    )
}

export default Header;