import { lookup } from '../util/lookup';

describe('lookup function', () => {
  it("lookup(<login>, 'likes') should return likes for the specified user", () => {
    const result = lookup('claudio', 'likes');
    const expected = ['Tests', 'React'];

    expect(result).toEqual(expected);
  })

  it("lookup(<login>, 'lastName') should return likes for the specified user", () => {
    const result = lookup('danilo', 'lastName');
    const expected = 'Sales';

    expect(result).toEqual(expected);
  })

  it('with unkown user should throw an error with the correct message', () => {
    expect(() => lookup('nobody', 'likes')).toThrow(/could not find user/i)
  })

  it('with unkown property should throw an error with the correct message', () => {
    expect(() => lookup('danilo', 'noprop')).toThrow(/could not find property/i)
  })

})