import Credits from '@tcs/pages/credits';
import { render, screen, within } from '@testing-library/react';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Credits page', () => {
  describe('Render method', () => {
    it('should have the credit to creativedesignguru.com', () => {
      render(<Credits />);

      const paragraph = screen.getByText(/Baseline template/);
      const link = within(paragraph).getByRole('link');

      expect(link).toHaveAttribute('href', 'https://creativedesignsguru.com');
    });
  });
});
