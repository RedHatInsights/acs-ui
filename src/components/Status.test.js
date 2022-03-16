import React from 'react';
import { render, screen } from '@testing-library/react';
import Status from './Status';

describe('Status', () => {
  it('should render children', () => {
    render(<Status status={'READY'} />);
    expect(screen.getByText('Ready')).toBeDefined();
  });
});
