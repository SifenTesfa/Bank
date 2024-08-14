import logo from '../assets/logo1.png';

export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src={logo}
            alt="My Application Logo"
        />
    );
}
