import { lazy } from 'react';

const CustomObjects = lazy(
  () => import('./custom-objects' /* webpackChunkName: "custom-objecst" */)
);

export default CustomObjects;
