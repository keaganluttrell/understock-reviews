import React from 'react';
import Star from './Star';

const Menu = () => (
  <div id="mod-filter">

    <fieldset>
      <legend>Fill Me In</legend>
      <div className="r-menu-current"><Star /></div>
      <div className="r-menu-caret"><i className="fas fa-caret-down" /></div>
    </fieldset>
    <div id="mod-menu-dropdown">
      <div id="MFD-default">All</div>
      <div className="MFD-star-bg"><Star /></div>
      <div className="MFD-star-bg"><Star /></div>
      <div className="MFD-star-bg"><Star /></div>
      <div className="MFD-star-bg"><Star /></div>
    </div>
  </div>
);

export default Menu;
