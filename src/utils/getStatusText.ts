import type { StatusCodes } from '../types'
import { statusTextMap, statusTextMapWithPrefix } from '../constants'

type GetStatusText = (statusCode: StatusCodes, hasPrefix?: boolean) => string
export const getStatusText: GetStatusText = (statusCode, hasPrefix = false) => {
  const statusText = hasPrefix ? statusTextMapWithPrefix : statusTextMap
  return statusText[statusCode]
}
