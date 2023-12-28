/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

function Fallback({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: (...args: any[]) => void;
}) {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '10rem',
        flexDirection: 'column',
      }}
    >
      <h1
        style={{
          background: 'linear-gradient(to left, #7928CA, #FF0080)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontSize: '8em',
          fontWeight: '800',
          fontFamily: 'system-ui, sans-serif',
          margin: 0,
          textAlign: 'center',
        }}
      >
        Oh No!
      </h1>
      <p
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: 'large',
          margin: 0,
          color: '#1A202C',
          textAlign: 'center',
        }}
      >
        Something went wrong while rendering the app.
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '1.5em',
          marginTop: '1.5rem',
        }}
      >
        <button
          type="button"
          onClick={resetErrorBoundary}
          style={{
            display: 'inline-flex',
            appearance: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            backgroundColor: isHovered ? '#FAF5FF' : 'transparent',
            borderColor: '#7928CA',
            borderRadius: '6px',
            borderWidth: '1px',
            borderStyle: 'solid',
            boxSizing: 'border-box',
            color: '#7928CA',
            fontSize: '1.125rem',
            fontWeight: '600',
            paddingInline: '1.5rem',
            height: '3rem',
            cursor: 'pointer',
            transitionProperty:
              'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
            transitionDuration: '200ms',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Try Again
        </button>
      </div>
      <pre
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: 'small',
          marginTop: '5em',
          color: '#1A202C',
          textAlign: 'center',
        }}
      >
        {error.message}
      </pre>
    </div>
  );
}

export default Fallback;
