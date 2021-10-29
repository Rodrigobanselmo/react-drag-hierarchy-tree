import React from 'react';

import { IRenderLabel } from '../interfaces';
import { RenderButton } from './styles';

export const RenderBtn = ({ data, setExpand, expand, prop }: IRenderLabel) => {
  const { horizontal } = prop;

  return (
    <RenderButton
      key={data.id}
      horizontal={!!horizontal}
      expanded={expand}
      onClick={(e) => {
        e.stopPropagation();
        setExpand(!expand);
      }}
    />
  );
};
