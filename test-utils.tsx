/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import AppProviders from './src/providers/AppProviders';

const AllTheProviders: React.FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (ui: ReactElement, options?: any): unknown => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
