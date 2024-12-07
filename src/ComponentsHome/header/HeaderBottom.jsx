import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";

const HeaderBottom = () => {
    return (
        <div className='headerBottom'>
            <div className='logo'>
                <h2 >PORTEN</h2>
            </div>
            <div className='headerBottom-Url'>
                <p className='Home'><Link to={'/'}><IoHome /></Link></p>
                <p className='Personal'><Link to={'/personal-account'}>Личный кабинет</Link></p>
                <p className='Like'><Link to={'/Like'}><FcLike /></Link></p>
                <p className='Setting'><Link to={'/settings'}><IoSettings /></Link></p>
                <p className='Card'><Link to={'/card'}><MdOutlineShoppingCart /></Link></p>
                <p className='Search'><Link to='/search'><FaSearch /></Link></p>
            </div>
        </div>
    );
}

export default HeaderBottom;
