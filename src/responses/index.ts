import * as clientErrorCodes from './clientError'
import * as informationCodes from './information'
import * as redirectionCodes from './redirection'
import * as serverErrorCodes from './serverError'
import * as successfulCodes from './successful'

export * from './clientError'
export * from './information'
export * from './redirection'
export * from './serverError'
export * from './successful'
export const allStatusCodes: Record<string, number> = {
  ...clientErrorCodes,
  ...informationCodes,
  ...redirectionCodes,
  ...serverErrorCodes,
  ...successfulCodes
}
