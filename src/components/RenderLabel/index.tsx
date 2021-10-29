import React, { useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { isLastNode } from '..';
import { useHierarchyData } from '../../context/HierarchyContextProvider';
import { useDebounce } from '../../hooks/useDebounce';
import { INestedObject } from '../../interfaces';
import { IRenderLabel } from '../interfaces';
import { RenderBtn } from '../RenderBtn';
import { LabelArea, LabelCard } from './styles';

export const RenderLabel = ({
  data,
  setExpand,
  expand,
  prop,
}: IRenderLabel) => {
  const {
    setHierarchy,
    hierarchyRef,
    editById,
    isChild,
    findParentByChildId,
    findById,
    draggingItemRef,
  } = useHierarchyData();

  const node = prop.node;
  const label = data[node.label];

  const onAppendMock = (id: number | string, label: string) => {
    // add renderNode if has already children inside
    const componentChildren = document.getElementById(`children_${id}`);
    if (componentChildren) {
      const elementMockLabel = document.getElementById(`label_text_mock`);
      const elementMockNode = document.getElementById(`node-tree-mock`);
      if (!elementMockLabel) return;
      if (!elementMockNode) return;

      elementMockLabel.innerText = label;

      elementMockNode.style.display = 'table-cell';
      elementMockNode.id = `node-tree-mock-clone`;
      const elementMockNodeClone = elementMockNode?.cloneNode(true);
      elementMockNode.style.display = 'none';
      elementMockNode.id = `node-tree-mock`;

      const elementMockNodeLastChild = elementMockNodeClone.lastChild;
      elementMockNodeLastChild &&
        elementMockNodeClone.removeChild(elementMockNodeLastChild);

      componentChildren.appendChild(elementMockNodeClone);
      return;
    }

    // add renderChildrenNode if does not have children inside
    const componentNode = document.getElementById(`node-tree-${id}`);
    if (componentNode) {
      const elementMockLabel = document.getElementById(`label_text_child_mock`);
      const componentMockChildren = document.getElementById(`children_mock`);

      if (!elementMockLabel) return;
      if (!componentMockChildren) return;

      elementMockLabel.innerText = label;

      const oldMockId = componentMockChildren.id;
      componentMockChildren.id = `node-tree-mock-clone`;
      const componentMockChildrenClone = componentMockChildren?.cloneNode(true);
      componentMockChildren.id = oldMockId;

      componentNode.appendChild(componentMockChildrenClone);
    }
  };

  const onRemoveMock = () => {
    const componentCloneMock = document.getElementById(`node-tree-mock-clone`);
    componentCloneMock && componentCloneMock.remove();
  };

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'box',
      item: data,
      options: {
        dropEffect: 'copy',
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  useEffect(() => {
    const labelDoc = document.getElementById(`node-tree-${data.id}`);
    if (!labelDoc) return;
    labelDoc.style.opacity = isDragging ? '0.5' : '1';
    draggingItemRef.current = data;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  const onDragEnter = (dropId: string | number) => {
    let dragLabel = 'Copiar aqui';
    if (draggingItemRef.current) {
      const dragItemId = draggingItemRef.current.id;
      const canDrop = dragItemId !== data.id && !isChild(dragItemId, data.id);
      dragLabel = draggingItemRef.current.label;
      if (!canDrop) return;
    }
    onAppendMock(dropId, dragLabel);
  };

  const onDragLeave = () => {
    onRemoveMock();
  };

  const onDrop = (drag: INestedObject) => {
    const dragItem = findById(drag.id);
    const dropItem = data;

    const { parent: parentDragItem } = findParentByChildId(drag.id);

    if (parentDragItem && dragItem) {
      const newParent = {
        ...parentDragItem,
        children: [...parentDragItem.children.filter((i) => i.id !== drag.id)],
      };

      const removedDragItemHierarchy = editById(
        parentDragItem.id,
        newParent,
        'replace'
      );

      const addedDragItemHierarchy = editById(
        dropItem.id,
        {
          children: [dragItem],
        },
        'add',
        removedDragItemHierarchy
      );

      setHierarchy(addedDragItemHierarchy);
      hierarchyRef.current = addedDragItemHierarchy;
    }
  };

  const { onDebounce } = useDebounce(onDragEnter, 300);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'box',
      canDrop: (item: INestedObject) =>
        item.id !== data.id && !isChild(item.id, data.id),
      drop: (drag: INestedObject) => onDrop(drag),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  const canDrop = true;
  useEffect(() => {
    if (isOver && canDrop) onDebounce(data.id);
    else if (canDrop) onDragLeave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOver]);

  console.log(label);

  return (
    <LabelArea
      id={`label_${data.id}`}
      key={`label_${data.id}`}
      horizontal={!!prop.horizontal}
      className={'org-tree-node-label'}
      ref={drop}
      onClick={(e) =>
        typeof prop.onClick === 'function' && prop.onClick(e, data)
      }
    >
      <LabelCard
        key={`label_inner_${data.id}`}
        ref={drag}
        isDragging={isDragging}
        cantDrop={!canDrop}
        className={'org-tree-node-label-inner'}
        style={{ ...data.style }}
      >
        <p id={`label_text_${data.id}`}>{label}</p>
        {prop.collapsable && !isLastNode(data, prop) && (
          <RenderBtn
            setExpand={setExpand}
            expand={expand}
            data={data}
            prop={prop}
          />
        )}
      </LabelCard>
    </LabelArea>
  );
};
