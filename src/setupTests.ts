import '@testing-library/jest-dom';
import 'jest-fetch-mock';
import { enableFetchMocks } from 'jest-fetch-mock';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

enableFetchMocks();
mockFetch([]);
