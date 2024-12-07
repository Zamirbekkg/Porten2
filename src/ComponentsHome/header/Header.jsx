
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import "./header.scss"
const Header = () => {
    return (
        <div className='container'>
            <HeaderTop/>
            <HeaderBottom/>
        </div>
    );
}

export default Header;
