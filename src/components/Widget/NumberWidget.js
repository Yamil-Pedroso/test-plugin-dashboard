import React from 'react';
import PropTypes from 'utils/propTypes';
import styled from '@emotion/styled'
import 'material-icons/iconfont/material-icons.css';

/// STYLES ///
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 170px;
    background-color: #fff;
    border-radius: 12px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(69,44,153,0.11); 
    box-shadow: 2px 2px 5px -1px rgba(27,17,61,0.12);
`;

const CustomizeButton = styled.button`
    width: 70%;
    height: 50px;
    color: #fff;
    background-color: #449fdd;
    font-size: 15px;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 10px;
`;

export const NumberWidgetButton = ({title}) => {
  return (
     <CardWrapper>
       <p style={{marginTop:"1.8em"}}>{title}</p>
       <CustomizeButton>Customize Panel</CustomizeButton>
     </CardWrapper>
  )
}


const NumberWidget = ({
  title,
  subtitle,
  number,
  color,
  icon,
  progress: { value, label },
  ...restProps
}) => {
  return (
      <CardWrapper>
          <span style={{marginTop:"1.8em", fontSize:"24px"}}>{icon}</span>
          <p>{title}</p>
      </CardWrapper>
  );
};

NumberWidget.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]),
  progress: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
    button: PropTypes.string,
  }),
};

NumberWidget.defaultProps = {
  title: '',
  subtitle: '',
  number: 0,
  color: 'primary',
  progress: {
    value: 0,
    label: '',
  },
};

export default NumberWidget;
