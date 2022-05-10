# readable-http-codes

0 dependancy, readable HTTP code enums, cleaning up your codebase!

### Examples:

#### Back

```typescript
import { SERVICE_UNAVAILABLE } from "readable-http-codes";

res.status(SERVICE_UNAVAILABLE).send("Service unavailable");
```

#### Front

```typescript
import { SERVICE_UNAVAILABLE } from "readable-http-codes";

if (response.status === SERVICE_UNAVAILABLE) {
  console.error("Service unavailable");
}
```
