import { segmentSuggestions } from '../segmenter'

describe('test segmentation', () => {
  it('returns one array if less than default length segmentation', () => {
    const testArray = [0, 1, 2]
    let segmented = segmentSuggestions(testArray)
    expect(segmented).toHaveLength(1)
    expect(segmented[0]).toHaveLength(3)
  })

  it('returns two arrays if greater than default length segmentation', () => {
    const testArray = [0, 1, 2, 3]
    let segmented = segmentSuggestions(testArray)
    expect(segmented).toHaveLength(2)
    expect(segmented[0]).toHaveLength(3)
    expect(segmented[1]).toHaveLength(1)
  })
})
