import { formatJobList, formatQueryParams } from './'


describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('The formatQueryParams function', () => {
    it('should return empty string', () => {
        const answers = {}
        expect(formatQueryParams(answers)).toEqual('')
    })
    it('should return string "a1=true&a2=false"', () => {
        const answers = {1: true, 2: false}
        expect(formatQueryParams(answers)).toEqual('a1=true&a2=false')
    })
})
