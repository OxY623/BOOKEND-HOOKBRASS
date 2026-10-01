import { WaveLoader } from './WaveLoader';
// import { render, screen } from '@testing-library/react';
import { render, screen } from '../../../../test/__utils__/test-utils'

describe('WaveLoader', () => {
  test('The wave loader is displayed and has the correct test-id', () => {
    render(<WaveLoader />);
    const waveLoader = screen.getByTestId('wave-loader');
    expect(waveLoader).toBeInTheDocument();
    expect(waveLoader).toHaveClass('flex space-x-1');
  });
});
