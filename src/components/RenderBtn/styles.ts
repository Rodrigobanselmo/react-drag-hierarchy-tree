import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ITreeOptions } from "../interfaces";

export const RenderButton = styled.span<ITreeOptions>`
  position: absolute;
  display: inline-block;
  top: 100%;
  left: 50%;
  width: 20px;
  height: 20px;
  z-index: 10;
  margin-left: -11px;
  margin-top: 9px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.35s ease;

  :hover {
    background-color: #e7e8e9;
    transform: scale(1.15);
  }

  :before,
  :after {
    content: "";
    position: absolute;
  }

  :before {
    top: 50%;
    left: 4px;
    right: 4px;
    height: 0;
    border-top: 1px solid #ccc;
  }

  :after {
    top: 4px;
    left: 50%;
    bottom: 4px;
    width: 0;
    border-left: 1px solid #ccc;
  }

  ${(props) =>
    props.expanded &&
    css`
      &:after {
        border: none;
      }
    `}

  ${(props) =>
    props.horizontal &&
    css`
      top: 50%;
      left: 100%;
      margin-top: -11px;
      margin-left: 9px;
    `}
`;
