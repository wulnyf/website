import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({theme}) => theme.palette.background};
  color: ${({theme}) => theme.palette.font}; 
  cursor: pointer;
  padding: 0 20px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  border-radius: 30px;
  align-items: center;
  height: 40px;
  font-size: 16px;
  line-height: 16px;
  border: 4px solid ${({theme}) => theme.palette.secondarybackground};
  box-sizing: border-box;
  &:hover {
    background: ${({theme}) => theme.palette.secondarybackground};
    color: ${({theme}) => theme.palette.secondaryfont};
  }
  > :last-child {
    margin-left: 10px;
  }
  @media (min-width: 800px) {
    border: 5px solid ${({theme}) => theme.palette.secondarybackground};
    line-height: 20px;
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  @media (min-width: 800px) {
    line-height: 20px;
    font-size: 20px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  z-index: 300;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  border: 5px solid ${({theme}) => theme.palette.secondarybackground};
  background-color: ${({theme}) => theme.palette.background};
  margin-bottom: -5px;
  cursor: pointer;
  color: ${({theme}) => theme.palette.font};
  &:hover {
    background: ${({theme}) => theme.palette.secondarybackground};
    color: ${({theme}) => theme.palette.secondaryfont};
  }
`;

const ButtonDropdown = ({ value, setValue, options, active, ...rest }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleSelect = (value) => {
    setValue(value);
    setOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  return (
    <Wrapper ref={wrapperRef}>
      <Button
        active={active}
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        {...rest}
      >
        {value}
        <i className="fas fa-angle-down"></i>
      </Button>
      {open && (
        <Dropdown>
          {options.map((o, i) => (
            <DropdownItem
              onClick={() => {
                handleSelect(o.value);
              }}
              key={i}
            >
              {o.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

// {options.map((o) => (
//   <option value={o.value}>{o.label}</option>
// ))}

export default ButtonDropdown;
