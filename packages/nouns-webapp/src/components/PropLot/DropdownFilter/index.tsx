import { useEffect, useState, forwardRef } from 'react';
import {
  faCaretDown,
  faArrowUp,
  faArrowDown,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Form } from 'react-bootstrap';
import clsx from 'clsx';
import classes from './DropdownFilter.module.css';

interface IconMap {
  [key: string]: IconDefinition;
}

const SUPPORTED_ICONS: IconMap = {
  ARROW_UP: faArrowUp,
  ARROW_DOWN: faArrowDown,
};

type CustomToggleProps = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => any;
};

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = forwardRef(
  ({ children, onClick }: CustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => (
    <a
      href=""
      ref={ref}
      className={clsx(classes.toggle, 'btn')}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <span className={classes.toggleItem}>{children}</span>
    </a>
  ),
);

const PropLotDropdownFilter = ({ filter, updateFilters }: any) => {
  const options = ['one', 'two', 'three'];
  return (
    <Dropdown className={classes.dropdownWrapper}>
      <Dropdown.Toggle as={CustomToggle} id="">
        <span className={classes.label}>Label</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </Dropdown.Toggle>

      <Dropdown.Menu className={classes.menu}>
        {options.map((opt, i) => {
          const isSelected = false;
          return (
            <Dropdown.Item
              key={i}
              className={clsx(classes.menuItem, isSelected && classes.selectedMenuItem)}
              onClick={e => {
                e.preventDefault();
                console.log('updating filter');
              }}
            >
              <div className={classes.menuItemLabelWrapper}>
                <Form.Check type="radio" checked={isSelected}>
                  <Form.Check.Input
                    type="radio"
                    checked={isSelected}
                    className={clsx(
                      classes.menuRadioBtn,
                      isSelected && classes.menuRadioBtnSelected,
                    )}
                  />
                </Form.Check>
                <span
                  className={clsx(
                    classes.menuItemLabel,
                    isSelected && classes.selectedMenuItemLabel,
                  )}
                >
                  <span>{opt}</span>
                  <FontAwesomeIcon icon={SUPPORTED_ICONS.ARROW_UP} />
                </span>
              </div>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PropLotDropdownFilter;
