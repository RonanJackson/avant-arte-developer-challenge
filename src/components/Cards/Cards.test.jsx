import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { useGetWorks } from '../../util/worksApi';
import Cards from './Cards';
import data from '../../../public/works.json';

jest.mock('../../util/worksApi', () => ({
  useGetWorks: jest.fn(),
}));

describe('Cards', () => {
  afterAll(() => {
    useGetWorks.mockClear();
  });

  describe('while loading', () => {
    it('should render a loading message', () => {
      useGetWorks.mockImplementation(() => ({
        isLoading: true,
      }));

      const { getByText } = render(<Cards />);
      expect(getByText('Loading Art Works...')).toBeTruthy();
    });
  });

  describe('while an error', () => {
    it('should render an error message', () => {
      useGetWorks.mockImplementation(() => ({
        isError: true,
        error: { message: 'There was an error' },
      }));

      const { getByText } = render(<Cards />);
      expect(getByText('There was a problem fetching Art Works.')).toBeTruthy();
    });
  });

  describe('with works data', () => {
    it('should render correctly', () => {
      useGetWorks.mockImplementation(() => ({
        data,
      }));

      const tree = TestRenderer.create(<Cards />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
