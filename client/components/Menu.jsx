import React, { useState } from 'react';
import propTypes from 'prop-types';

const Menu = ({ name, options, handler }) => {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(options[0].head);

  return (
    <div
      id="mod-container"
      onKeyDown={() => setActive(!active)}
      onClick={() => setActive(!active)}
      role="button"
      tabIndex={0}
    >
      <fieldset>
        <legend>{name}</legend>
        <div className="fieldset-current">{current}</div>
        <div className="r-menu-caret">
          <i className={`fas fa-caret-${active ? 'up' : 'down'}`} />
        </div>
      </fieldset>

      <div
        id={`mod-menu-dropdown-${name}`}
        style={{ display: active ? 'flex' : 'none' }}
      >
        {options.map((option, i) => {
          const key = i;
          return (
            <div
              className="fieldset-option"
              onKeyDown={() => setCurrent(option.head)}
              onClick={() => {
                handler(option.body);
                setCurrent(option.head);
              }}
              role="button"
              tabIndex={0}
              key={key}
            >
              {option.head}
            </div>
          );
        })}

      </div>
    </div>
  );
};

Menu.propTypes = {
  name: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.any).isRequired,
  handler: propTypes.func.isRequired,
};

export default Menu;
