import { MarvelHeros, Logo } from "../assets";

const Header = () => {
    return (
        <div id='header'>
            <img id='allheros' src={MarvelHeros} alt='marvel all heros' />
            <img id='marvel-logo-img' src={Logo} alt='marvel logo' />
        </div>
    );
};

export default Header;