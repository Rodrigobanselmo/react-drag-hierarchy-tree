import React from 'react';

import { IRenderChildren } from '../interfaces';
import { RenderNode } from '../RenderNode';
import { ChildrenComponent } from './styles';

export const RenderChildren = ({ list, data, prop }: IRenderChildren) => {
  if (Array.isArray(list) && list.length) {
    return (
      <ChildrenComponent
        id={`children_${data.id}`}
        className={'org-tree-node-children'}
        horizontal={!!prop.horizontal}
      >
        {list.map((item) => {
          return <RenderNode key={item.id} data={item} prop={prop} />;
        })}
      </ChildrenComponent>
    );
  }
  return null;
};
