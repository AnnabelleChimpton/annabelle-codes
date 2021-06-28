import { Link } from "gatsby";


import './MenuLinks.css';

const MenuLinks = (props) => {
    return (
        <div>
            {props.menuLinks.map((menuLink) => (
                <div className='menu-link'>
                    <Link to={menuLink.link} style={{fontWeight: 'bolder', color: props.fill}}>{menuLink.name}</Link>
                </div>
            ))};
        </div>
    );
};

export default MenuLinks;