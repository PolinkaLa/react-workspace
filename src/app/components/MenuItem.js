import React from 'react';
import {Link} from 'react-router'

const MenuItem = props => {
    const {active, href, children} = props;

    return(
      <li className={active ? 'nav-item active' : 'nav-item'}>
        <Link className="nav-link" to={href}>{children}</Link>
      </li>
    );
}
export default MenuItem