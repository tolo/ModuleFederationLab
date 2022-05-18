import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('app2/App'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'goldenrod',
        }}
      >
        <h1>App1</h1>

        <Suspense fallback={'loading...'}>
          <RemoteApp name="Hello" />
        </Suspense>

        <Suspense fallback={'loading...'}>
          <RemoteApp name="World" />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
