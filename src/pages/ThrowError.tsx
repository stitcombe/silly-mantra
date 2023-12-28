import React from 'react';

function ComponentWithError() {
  throw new Error('This is an intentional error!');
  return (
    <div>
      <h1>This code should trigger a render error</h1>
    </div>
  );
}

export default ComponentWithError;
