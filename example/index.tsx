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
      <OrgTreeComponent data={data} ref={treeRef} horizontal />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
