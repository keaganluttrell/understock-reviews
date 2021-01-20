import { data } from '../../spec/data/sampleReviews';

export let getURL;
export let patchURL;

export default {
  get: jest.fn((arg) => {
    getURL= arg;
    return Promise.resolve({ data })
  }),
  patch: jest.fn((arg) => {
    patchURL = arg;
    return Promise.resolve({})
  }),
};

