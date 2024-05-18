import React from "react";
import styled from "styled-components";
import StyledImage from "../components/StyledImage";
import Typography from "../components/Typography";

const CardContainer = styled.div`
  height: 0px;
  padding-bottom: 125%;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  box-sizing: border-box;
  &.flipped {
      .front {
          transform: rotateY(180deg);
      }
      .back {
          transform: rotateY(0deg);
      }
  }
`;

const Back = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: $new-white;
  position: absolute !important;
  border-radius: 10px;
  border: ${({ theme }) => theme.decoration.borderHover};
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: -webkit-transform ease 500ms;
  transition: transform ease 500ms;
  background: $new-white;
  transform: rotateY(-180deg);
  padding: 5px;
  font-size: 10vw;
  background-color: ${({ theme }) => theme.palette.primarybackground};
  color: ${({ theme }) => theme.palette.primaryfont};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ clickable, theme }) => {
    return (
      (clickable === true || clickable === "true") &&
      `
      cursor: pointer;
      
      &:hover {
        border: ${theme.decoration.borderHover};
      }`
    );
  }}
`;

const ImageThumbnail = styled(StyledImage)`
    height: 0px;
    padding-bottom: 125%;
    box-sizing: border-box;
    display: block !important;
    background: $new-white;
    position: absolute !important;
    border-radius: 10px;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: -webkit-transform ease 500ms;
    transition: transform ease 500ms;
    z-index: 2;
    transform: rotateY(0deg);
`;

const SecTitle = styled(Typography)`
  padding-top: 7%;
  padding-bottom: 4%;
`;

class FlipCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { flipped: false };
      this.flip = this.flip.bind(this);
    }
  
    flip = () => {
      this.setState({ flipped: !this.state.flipped });
    }
    render() {
      return (
        <CardContainer onClick={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
            <ImageThumbnail
                image={this.props.image}
                clickable="true" 
                alt={this.props.alt}
                className="front"
            />
            <Back className="back" clickable="true">
                <div>
                    <SecTitle variant="subtitle">Majors</SecTitle>
                    <Typography variant="caption">{this.props.major}</Typography>
                </div>
                <div>
                    <SecTitle variant="subtitle">Zodiac</SecTitle>
                    <Typography variant="caption">{this.props.zodiac}</Typography>
                </div>
                <div>
                    <SecTitle variant="subtitle">What LNYF means to me:</SecTitle>
                    <Typography variant="caption2">{this.props.facts}</Typography>
                </div>
            </Back>
        </CardContainer>
      )
    }
  }

  export default FlipCard