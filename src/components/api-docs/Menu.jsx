import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

export const Menu = ({ menu }) => {
  console.log('I am menu......', menu);
  return (
    <div className="api-docs-menu">
      {[...menu, ...menu, ...menu, ...menu, ...menu].map((group, i) => {
        return (
          <Fragment key={i}>
            <h4> {group.title} </h4>
            <ul>
              {group.sections.map((section, j) => {
                return (
                  <li key={j}>
                    <NavLink
                      className={({ isActive }) => {
                        return isActive ? 'active' : null;
                      }}
                      to={section.slug}
                    >
                      {section.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        );
      })}
      <div className="ad-unit api-doc-menu-ad-unit"></div>
    </div>
  );
};
