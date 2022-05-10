import each from 'jest-each'

import * as AllStatusCodes from '../responses'
import { getStatusText } from './getStatusText'

describe('getStatusText()', () => {
  const codes = Object.keys(AllStatusCodes).map((key: string) => {
    return (AllStatusCodes as unknown as Record<string, number>)[key]
  })

  each(codes).it('should return a text for %s', (statusCode) => {
    expect(getStatusText(statusCode)).toBeDefined()
  })

  each(codes).it('should return a text for %s that includes a prefix', (statusCode) => {
    expect(getStatusText(statusCode, true)).toBeDefined()
    expect(getStatusText(statusCode, true)).toMatch(/^(INFO:|OK:|REDIRECT:|CLIENT ERROR:|SERVER ERROR:)/i)
  })
})
