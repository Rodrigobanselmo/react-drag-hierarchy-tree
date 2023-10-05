import { MouseEvent } from 'react';

import {
  CSSProperties,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  ForwardedRef,
} from 'react';

export interface INestedObject extends Record<string, any> {
  id: string | number;
  label: string;
  children: INestedObject[];
  expand?: boolean;
  style?: CSSProperties;
}

interface IRenderButton {
  onClick: (event: MouseEvent<any>) => void;
  isCollapsed: boolean | undefined;
}

interface IRenderCard {
  isDragging: boolean;
  label: string;
  labelId: string;
  data: INestedObject;
  isPreviewCard: boolean;
}

export interface IOrgTreeProps {
  data: INestedObject;
  horizontal?: boolean;
  collapsable?: boolean;
  expandAll?: boolean;
  strokeColor?: string;
  buttonBackgroundColor?: string;
  buttonBorderColor?: string;
  strokeWidth?: '1px' | '2px' | '3px' | '4px' | '5px';
  onClick?: (...data: any) => any;
  renderButton?: ({ onClick, isCollapsed }: IRenderButton) => JSX.Element;
  renderCard?: ({ isDragging, label, data, isPreviewCard }: IRenderCard) => any;
  cardStyle?: CSSProperties;
  canDrag?: boolean;
}

export interface INodeTree {
  label: 'label';
  expand: 'expand';
  children: 'children';
}

export interface IOrgTreeNodeProps
  extends Omit<
    IOrgTreeProps,
    'onClick' | 'data' | 'setExpandAll' | 'expandAll'
  > {
  node: INodeTree;
  expandAll: boolean;
  onExpand?: (e: any, nodeData: any) => any;
  onClick?: (e: any, nodeData: any) => any;
}

export interface IOptionalNestedObject
  extends Omit<Partial<INestedObject>, 'children'> {
  children: Partial<INestedObject>[];
}

export interface IParsedArray {
  id: string | number;
  label: string;
  parentId: string | number | null;
}

export interface IHierarchyContextData {
  hierarchyRef: MutableRefObject<INestedObject>;
  draggingItemRef: MutableRefObject<INestedObject | null>;
  hierarchy: INestedObject;
  setHierarchy: Dispatch<SetStateAction<INestedObject>>;
  nestedObjectToArray: (data: INestedObject) => IParsedArray[];
  arrayToNestedObject: (data: IParsedArray[]) => INestedObject;
  editById: (
    id: number | string,
    data: Partial<INestedObject>,
    action?: 'replace' | 'add' | 'remove',
    nestedObject?: INestedObject
  ) => INestedObject;
  removeById: (
    id: number | string,
    idsToRemove: Array<number | string>,
    nestedObject?: INestedObject
  ) => INestedObject;
  findParentByChildId: (
    id: number | string,
    nestedObject?: INestedObject
  ) => { parent: INestedObject | null; path: Array<number | string> };
  findById: (
    // nestedObject: INestedObject,
    id: number | string,
    nestedObject?: INestedObject
  ) => INestedObject | null;
  isChild: (parentId: number | string, childId: number | string) => boolean;
}

export interface ISidebarDrawerProps {
  data: any;
  onExpandNodes: () => void;
  children: ReactNode;
  treeRef: ForwardedRef<any>;
}

export type IExpandNodes = () => void | undefined;

export type IFindById = (
  id: number | string,
  nestsObject?: INestedObject | undefined
) => INestedObject | null;

export type IFindParentByChildId = (
  id: string | number,
  nestedObject?: INestedObject | undefined
) => {
  parent: INestedObject | null;
  path: (string | number)[];
};

export type IRemoveById = (
  id: number | string,
  dataToRemove: Array<number | string>,
  nestedObject?: INestedObject | undefined
) => INestedObject;

export type IEditById = (
  id: number | string,
  data: Partial<INestedObject>,
  action?: 'replace' | 'add' | 'remove',
  nestedObject?: INestedObject | undefined
) => INestedObject;

export type IAddChildrenById = (
  id: number | string,
  data: INestedObject[],
  nestedObject?: INestedObject | undefined
) => INestedObject;

export interface ITreeRefProps {
  onExpandNodes: IExpandNodes;
  findById: IFindById;
  findParentByChildId: IFindParentByChildId;
  removeById: IRemoveById;
  editById: IEditById;
  addChildrenById: IAddChildrenById;
  nestedObjectToArray: (data: INestedObject) => IParsedArray[];
  arrayToNestedObject: (data: IParsedArray[]) => INestedObject;
  data: INestedObject;
}
