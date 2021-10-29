import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ITreeOptions } from '../interfaces';

export const LabelArea = styled.div<ITreeOptions>`
  position: relative;
  display: inline-block;
  cursor: move;
  z-index: 10;
  ${(props) =>
    props.horizontal &&
    css`
      display: table-cell;
      vertical-align: middle;
    `}
`;

interface ILabelCard {
  cantDrop: boolean;
  isDragging: boolean;
}
export const LabelCard = styled.div<ILabelCard>`
  background-color: white;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  min-width: 100px;
  height: 45px;
  z-index: 100000;
  text-align: center;
  color: black;
  position: relative;
  border-radius: 3px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  // no break line
  white-space: nowrap;
  text-overflow: ellipsis;

  ${(props) =>
    props.cantDrop &&
    css`
      background-color: #aaaaaa33;
      opacity: 0.5;
      cursor: no-drop;
    `}

  ${(props) =>
    props.isDragging &&
    css`
      cursor: grabbing;
    `}
`;
