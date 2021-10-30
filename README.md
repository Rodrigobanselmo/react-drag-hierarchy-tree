# React Drag Hierarchy Tree

![NPM version](https://img.shields.io/npm/v/react-sortable-tree.svg?style=flat)
![NPM license](https://img.shields.io/npm/l/react-sortable-tree.svg?style=flat)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> A React component for Drag-and-drop hierarchy tree data.

<div align="center">

</div>

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Props](#props)
- [Data Helpers](#data-helper-functions)

## Getting started

Install `react-drag-hierarchy-tree` using npm.

```sh
# NPM
npm install react-drag-hierarchy-tree --save
# YARN
yarn add react-drag-hierarchy-tree
```

## Usage

```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import OrgTreeComponent, { useTree } from 'react-drag-hierarchy-tree';

const data = {
  id: 1,
  label: 'President',
  children: [
    {
      id: 2,
      label: 'Administrative',
      children: [
        {
          id: 3,
          label: 'Director',
          children: [],
        },
      ],
    },
    {
      id: 2,
      label: 'Administrative',
      children: [
        {
          id: 3,
          label: 'Director',
          children: [],
        },
      ],
    },
  ],
};

const App = () => {
  const { treeRef } = useTree();

  const onClick = () => {
    treeRef.current?.onExpandNodes();
  };

  return (
    <div>
      <button onClick={onClick}>close/open</button>
      <OrgTreeComponent data={data} ref={treeRef} horizontal />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Props

| Prop                           |      Type      | <div style="width: 400px;">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :----------------------------- | :------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data<br/>_(required)_          |    object[]    | Tree data with the following keys: <div>`id` is the primary and unique key.</div><div>`label` is the primary label for the node.</div><div>`expand` shows children of the node if true, or hides them if false. Defaults to false.</div><div>`style` edit styles for the card container for each node.</div><div>`children` is an array of child nodes belonging to the node.</div><div>**Example**: `[{id:'uui1', label: 'main'}, { id:'uui1', label: 'main' , expand: true, children: [] }]`   <br/> You can also add any key you what, thats is useful for the prop renderCard below, where tou can use to personalize your card component                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ref<br/>_(recommended)_ |      ref      | Is the ref ussed to get all methods related to the component, you should use the treeRef exported form the useTree hook.                                                                                                                                                                                                                                                      |
| horizontal                     |      boolean      | Set if tree should be horizontal or vertical (default: <div>`false`</div>)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| renderCard             |      func      | Ussed to replace the card component. It returns from the function <div>`({ isDragging: bool, label: string, item: {id:string, label:'string'}, isPreviewCard }) => JSX.Element`</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| renderButton             |      func      | Ussed to replace the button collapse component. It returns from the function. <div>`({ onClick: (event: MouseEvent<any>) => void, isCollapsed: boolean | undefined }): JSX.ELlement`</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| collapsable                       |     bool     | If childrens should collapse or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| expandAll                   |     bool     | If the childrens should start expanded.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| strokeColor                        |  color  | Color of line / stroke                                                                                                                                                                                                                                                                                                                  |
| strokeWidth                        |      string      | Line width. <div>` 1px 2px 3px 4px 5px`</div>                                                                                                                                                                                                                                                                                                                                                                                      |
| cardStyle            |      object      | Card inline styles CSSProperties`.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| buttonBackgroundColor                          |     color     | Collapse button color.                                                                                                                                                                                                                                                                                                                                                                                                    

<br>
<br>

## UseTree Hook

This hooks returns a ref that can access many data and helpers by ussing **`treeRef.current`**.

- **`data`**: Returns the actual hierarchy data.
- **`onExpandNodes`**: Expands or collapse all node.
- **`addChildrenById`**: Add a children node by id.
- **`removeById`**: Remove a node by id.
- **`editById`**: edit a node by id.
- **`findById`**: Find and return node by id.
- **`findParentByChildId`**: Return parent by child id.
- **`nestedObjectToArray`**: Transform the nested object to an array.
- **`arrayToNestedObject`**: Transform back the array to the nested object.

Pull requests are welcome!

## License

MIT
