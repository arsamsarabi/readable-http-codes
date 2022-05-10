# readable-http-codes

0 dependancy, readable HTTP code enums, cleaning up your codebase!

JsDoc written for all the HTTP codes which includes relevant information and links.

Based on the [MDN HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Install:

```shell
# Using NPM
npm install readable-http-codes

# The better option
yarn add readable-http-codes
```

### Usage:

```typescript
// import all the codes
import { allStatusCodes } from 'readable-http-codes'

res.status(allStatusCodes.SERVICE_UNAVAILABLE).send('Service unavailable')

// Or import just the codes you need
import { SERVICE_UNAVAILABLE } from 'readable-http-codes'

if (response.status === SERVICE_UNAVAILABLE) {
  console.error('Service unavailable')
}
```

```typescript
// utility function to get the status texts from code
import { getStatusText, SERVICE_UNAVAILABLE } from 'readable-http-codes'

console.log(getStatusText(SERVICE_UNAVAILABLE)) // 'Service Unavailable'
console.log(getStatusText(503)) // 'Service Unavailable'

// attach (INFO: | OK: | REDIRECT: | CLIENT ERROR: | SERVER ERROR:) prefixes to the status texts
import { getStatusText, allStatusCodes } from 'readable-http-codes'

console.log(getStatusText(allStatusCodes.SWITCHING_PROTOCOLS, true)) // 'INFO: Switching Protocols'
console.log(getStatusText(101, true)) // 'INFO: Switching Protocols'

console.log(getStatusText(allStatusCodes.OK, true)) // 'OK: OK'
console.log(getStatusText(200, true)) // 'OK: OK'

console.log(getStatusText(allStatusCodes.MOVED_PERMANENTLY, true)) // 'REDIRECT: Moved Permanently'
console.log(getStatusText(301, true)) // 'REDIRECT: Moved Permanently'

console.log(getStatusText(allStatusCodes.TOO_MANY_REQUESTS, true)) // 'CLIENT ERROR: Too Many Requests'
console.log(getStatusText(429, true)) // 'CLIENT ERROR: Too Many Requests'

console.log(getStatusText(allStatusCodes.SERVICE_UNAVAILABLE, true)) // 'SERVER ERROR: Service Unavailable'
console.log(getStatusText(503, true)) // 'SERVER ERROR: Service Unavailable'
```

```typescript
// Miscillaneous
import type { StatusCodes } from 'readable-http-codes'

// type of all valid status codes defined in this package
type StatusCode = 100 | 101 | etc.

import { statusTextMap, statusTextMapWithPrefix } from 'readable-http-codes'

// statusTextMap returns a map of status codes to their status texts
console.log(statusTextMap) // { 200: 'OK', 404: 'Not Found', ... }

// statusTextMapWithPrefix returns a map of status codes to their status texts with prefixes
console.log(statusTextMapWithPrefix) // { 200: 'OK: OK', 404: 'CLIENT ERROR: Not Found', ... }
```
