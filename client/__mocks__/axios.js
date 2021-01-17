import { data } from '../../spec/data/sampleReviews';

export default {
  get: jest.fn(() => Promise.resolve({ data })),
};
