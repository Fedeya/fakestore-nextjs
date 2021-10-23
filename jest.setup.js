import '@testing-library/jest-dom/extend-expect';
import { setLogger } from 'react-query';
import { server } from './__mocks__/server.ts';

setLogger({
  error: () => {},
  log: console.log,
  warn: console.warn
});

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>;
    }
  };
});
