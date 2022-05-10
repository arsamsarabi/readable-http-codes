# readable-http-codes

0 dependancy, readable HTTP code enums, cleaning up your codebase!

Based on the [MDN HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

[![Build and deploy](https://github.com/arsamsarabi/readable-http-codes/actions/workflows/build-and-deploy.yml/badge.svg?event=workflow_run)](https://github.com/arsamsarabi/readable-http-codes/actions/workflows/build-and-deploy.yml)

### Examples:

#### Back

```typescript
import { SERVICE_UNAVAILABLE } from 'readable-http-codes'

res.status(SERVICE_UNAVAILABLE).send('Service unavailable')
```

#### Front

```typescript
import { SERVICE_UNAVAILABLE } from 'readable-http-codes'

if (response.status === SERVICE_UNAVAILABLE) {
  console.error('Service unavailable')
}
```
