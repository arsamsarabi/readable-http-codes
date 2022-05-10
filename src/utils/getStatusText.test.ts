import each from 'jest-each'

import * as AllStatusCodes from '../responses'
import { getStatusText } from './getStatusText'

describe('getStatusText()', () => {
  each(Object.values(AllStatusCodes)).it('should return a text for %s', (statusCode) => {
    expect(getStatusText(statusCode)).toBeDefined()
  })

  each(Object.values(AllStatusCodes)).it('should return a text for %s that includes a prefix', (statusCode) => {
    expect(getStatusText(statusCode, true)).toBeDefined()
    expect(getStatusText(statusCode, true)).toMatch(/^(INFO:|OK:|REDIRECT:|CLIENT ERROR:|SERVER ERROR:)/i)
  })
})
