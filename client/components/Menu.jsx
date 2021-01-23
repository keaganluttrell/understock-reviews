import React, { useState } from 'react';
import propTypes from 'prop-types';

const Menu = ({ name, options, handler }) => {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(options[0]);

  return (
    <>
      <div
        id="mod-container"
        onKeyDown={() => setActive(!active)}
        onClick={() => setActive(!active)}
        role="button"
        tabIndex={0}
        title={`menu-${name}`}
      >
        <div>
          <fieldset>
            <legend>{name}</legend>
            <div className="fieldset-current">{current.head}</div>
            <div className="r-menu-caret">
              <i className={`fas fa-caret-${active ? 'up' : 'down'}`} />
            </div>
          </fieldset>
        </div>

        <div
          id={`mod-menu-dropdown-${name}`}
          style={{ display: active ? 'flex' : 'none' }}
        >
          {options.map((option, i) => {
            const key = i;
            return (
              <div
                className="fieldset-option"
                onKeyDown={() => {
                  handler(option.body);
                  setCurrent(option);
                }}
                onClick={() => {
                  handler(option.body);
                  setCurrent(option);
                }}
                role="button"
                title={`menu-option-${i}`}
                tabIndex={0}
                key={key}
              >
                {option.head}
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="reviews-filter-clear-container"
        style={{
          display: current.body && name === 'Rating' ? 'flex' : 'none',
        }}
      >
        <button
          type="button"
          id="reviews-filter-clear"
          title="menu-clear"
          onClick={() => {
            handler(0);
            setCurrent(options[0]);
          }}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

Menu.propTypes = {
  name: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.any).isRequired,
  handler: propTypes.func.isRequired,
};

export default Menu;
