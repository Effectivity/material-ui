import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import Tablelvl2Context from '../Table/Tablelvl2Context';
export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-header-group'
  }
};
const tablelvl2 = {
  variant: 'head'
};
const TableHead = React.forwardRef(function TableHead(props, ref) {
  const {
    classes,
    className,
    component: Component = 'thead'
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["classes", "className", "component"]);

  return React.createElement(Tablelvl2Context.Provider, {
    value: tablelvl2
  }, React.createElement(Component, _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other)));
});
process.env.NODE_ENV !== "production" ? TableHead.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType
} : void 0;
export default withStyles(styles, {
  name: 'MuiTableHead'
})(TableHead);