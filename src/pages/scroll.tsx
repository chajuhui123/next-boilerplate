import React, { useCallback } from "react";
import styled from "styled-components";
import { useWheel } from "@/app.hooks/useWheel";

interface IStyledWrapper {
  dividerHeight: number;
}

const scrollPage = () => {
  const DIVIDER_HEIGHT = 30;

  const handleWheel = useCallback(
    (
      ref: React.RefObject<HTMLDivElement>,
      deltaY: number,
      scrollTop: number
    ) => {
      const pageHeight = window.innerHeight; // 화면 세로길이 (100vh)
      const isScrollUp = deltaY < 0;

      let nextScreen = null;
      if (isScrollUp) {
        nextScreen = Math.floor(scrollTop / pageHeight) - 1;
      } else {
        nextScreen = Math.floor(scrollTop / pageHeight) + 1;
      }

      ref.current?.scrollTo({
        top: pageHeight * nextScreen + DIVIDER_HEIGHT * nextScreen,
        left: 0,
        behavior: "smooth",
      });
    },
    []
  );

  const scrollSectionRef = useWheel(handleWheel);

  return (
    <StyledWrapper dividerHeight={DIVIDER_HEIGHT}>
      <div className="wrapper" ref={scrollSectionRef}>
        <div className="section">1</div>
        <div className="divider" />
        <div className="section">2</div>
        <div className="divider" />
        <div className="section">3</div>
      </div>
    </StyledWrapper>
  );
};

export default scrollPage;

const StyledWrapper = styled.div<IStyledWrapper>`
  .wrapper {
    height: 100vh;
    overflow-y: auto;
  }
  .wrapper::-webkit-scrollbar {
    display: none;
  }
  .divider {
    height: ${({ dividerHeight }) => `${dividerHeight}px`};
  }
  .section {
    line-height: 100vh;
    background-color: #24a91d;
    color: white;
    font-size: 30px;
    border-radius: 50px;
    text-align: center;
  }
`;
