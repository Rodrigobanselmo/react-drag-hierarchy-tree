import * as React from 'react';
import * as ReactDOM from 'react-dom';

import OrgTreeComponent, { useTree } from '../src';
import { data } from './utils/data';

const App = () => {
  const { treeRef } = useTree();

  const onClick = () => {
    treeRef.current?.onExpandNodes();
  };

  return (
    <div>
      <button onClick={onClick}>close/open</button>
      <OrgTreeComponent
        data={data}
        ref={treeRef}
        horizontal
        // cardStyle={{ fontSize: 1 }}
        // strokeColor={'red'}
        // strokeWidth={'1px'}
        // buttonBackgroundColor={'red'}
        // buttonBorderColor={'red'}
        // renderButton={({ isCollapsed, onClick }) => (
        //   <button onClick={onClick}>
        //     {isCollapsed ? 'expand' : 'colapse'}
        //   </button>
        // )}
        // renderCard={({ isDragging, label, labelId, data, isPreviewCard }) => (
        //   <div style={{ backgroundColor: 'green' }}>
        //     <span id={labelId}>{label}</span>
        //     {!isPreviewCard && <p>{data.id}</p>}
        //     <button>click</button>
        //   </div>
        // )}
      />
      <OrgTreeComponent
        renderButton={({ isCollapsed, onClick }) => (
          <div onClick={onClick}>{isCollapsed ? 'expand' : 'colapse'}</div>
        )}
        data={data}
        strokeColor={'red'}
        ref={treeRef}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
