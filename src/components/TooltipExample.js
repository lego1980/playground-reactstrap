import React, { Component } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Example = () => (
  <Manager>
    <Reference>
      {({ ref }) => (
        <button type="button" ref={ref}>
          Reference element
        </button>
      )}
    </Reference>
    <Popper placement="right">
      {({ ref, style, placement, arrowProps }) => (
        <div ref={ref} style={style} data-placement={placement}>
          Popper element
          <div ref={arrowProps.ref} style={arrowProps.style} />
        </div>
      )}
    </Popper>
  </Manager>
);