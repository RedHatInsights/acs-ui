import React from 'react';
import { render, screen } from '@testing-library/react';
import Status from './Status';

describe('Status', () => {
  it('should render children', () => {
    render(<Status status="ready" />);
    expect(screen.getByText('Ready')).toBeDefined();
  });
});
