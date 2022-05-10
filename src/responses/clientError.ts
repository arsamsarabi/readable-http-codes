/**
 * ### 400 Bad Request
 *
 * @description
 * The HTTP **400 Bad Request** response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
 *
 * @example
 * ```
 * import { BAD_REQUEST } from 'readable-http-codes';
 *
 * if (response.status === BAD_REQUEST) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: Not specified.
 *
 * @see [HTTP Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1)
 */
export const BAD_REQUEST = 400

/**
 * ### 401 Unauthorized
 *
 * @description
 * The HTTP **401 Unauthorized** response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
 *
 * This status code is sent with an HTTP `WWW-Authenticate` response header that contains information on how the client can request for the resource again after prompting the user for authentication credentials.
 *
 * This status code is similar to the `403 Forbidden` status code, except that in situations resulting in this status code, user authentication can allow access to the resource.
 *
 * @example
 * ```
 * import { UNAUTHORIZED } from 'readable-http-codes';
 *
 * if (response.status === UNAUTHORIZED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
 */
export const UNAUTHORIZED = 401

/**
 * ### 402 Payment Required
 *
 * @description
 * **Experimental**: This is an experimental technology
 *
 * The HTTP **402 Payment Required** is a nonstandard response status code that is reserved for future use. This status code was created to enable digital cash or (micro) payment systems and would indicate that the requested content is not available until the client makes a payment.
 *
 * Sometimes, this status code indicates that the request cannot be processed until the client makes a payment. However, no standard use convention exists and different entities use it in different contexts.
 *
 * @example
 * ```
 * import { PAYMENT_REQUIRED } from 'readable-http-codes';
 *
 * if (response.status === PAYMENT_REQUIRED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: No compatibility data found for `http.status.402`.
 *
 * @see [MDN Status 402](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)
 * @see [Specification](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2)
 * @see [Experimental](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)
 */
export const PAYMENT_REQUIRED = 402

/**
 * ### 403 Forbidden
 *
 * @description
 * The HTTP **403 Forbidden** response status code indicates that the server understands the request but refuses to authorize it.
 *
 * This status is similar to `401`, but for the **403 Forbidden** status code re-authenticating makes no difference. The access is permanently forbidden and tied to the application logic, such as insufficient rights to a resource.
 *
 * @example
 * ```
 * import { FORBIDDEN } from 'readable-http-codes';
 *
 * if (response.status === FORBIDDEN) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 403](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)
 * @see [MDN Status 401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
 */
export const FORBIDDEN = 403

/**
 * ### 404 Not Found
 *
 * @description
 * The HTTP **404 Not Found** response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot.
 *
 * A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent. If a resource is permanently removed, use the 410 (Gone) status instead.
 *
 * @example
 * ```
 * import { NOT_FOUND } from 'readable-http-codes';
 *
 * if (response.status === NOT_FOUND) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 404](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
 * @see [MDN Status 410](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410)
 * @see [Link rot](https://en.wikipedia.org/wiki/Link_rot)
 */
export const NOT_FOUND = 404

/**
 * ### 405 Method Not Allowed
 *
 * @description
 * The HTTP **405 Method Not Allowed** response status code indicates that the server knows the request method, but the target resource doesn't support this method.
 *
 * The server must generate an `Allow` header field in a 405 status code response. The field must contain a list of methods that the target resource currently supports.
 *
 * @example
 * ```
 * import { METHOD_NOT_ALLOWED } from 'readable-http-codes';
 *
 * if (response.status === METHOD_NOT_ALLOWED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 405](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405)
 */
export const METHOD_NOT_ALLOWED = 405

/**
 * ### 406 Not Acceptable
 *
 * @description
 * The HTTP **406 Not Acceptable** client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive `content negotiation` headers, and that the server is unwilling to supply a default representation.
 *
 * Proactive content negotiation headers include:
 * - `Accept`
 * - `Accept-Language`
 * - `Accept-Encoding`
 *
 * @example
 * ```
 * import { NOT_ACCEPTABLE } from 'readable-http-codes';
 *
 * if (response.status === NOT_ACCEPTABLE) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 406](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406)
 * @see [Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
 * @see [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)
 * @see [Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)
 * @see [Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding)
 */
export const NOT_ACCEPTABLE = 406

/**
 * ### 407 Proxy Authentication Required
 *
 * @description
 * The HTTP **407 Proxy Authentication Required** client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for a `proxy server` that is between the browser and the server that can access the requested resource.
 *
 * This status is sent with a `Proxy-Authenticate` header that contains information on how to authorize correctly.
 *
 * @example
 * ```
 * import { PROXY_AUTHENTICATION_REQUIRED } from 'readable-http-codes';
 *
 * if (response.status === PROXY_AUTHENTICATION_REQUIRED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 407](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407)
 * @see [Proxy server](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server)
 * @see [Proxy-Authenticate](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate)
 */
export const PROXY_AUTHENTICATION_REQUIRED = 407

/**
 * ### 408 Request Timeout
 *
 * @description
 * The HTTP **408 Request Timeout** response status code means that the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.
 *
 * A server should send the "close" `Connection` header field in the response, since `408` implies that the server has decided to close the connection rather than continue waiting.
 *
 * This response is used much more since some browsers, like Chrome, Firefox 27+, and IE9, use HTTP pre-connection mechanisms to speed up surfing.
 *
 * @example
 * ```
 * import { REQUEST_TIMEOUT } from 'readable-http-codes';
 *
 * if (response.status === REQUEST_TIMEOUT) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408)
 * @see [Connection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection)
 */
export const REQUEST_TIMEOUT = 408

/**
 * ### 409 Conflict
 *
 * @description
 * The HTTP **409 Conflict** response status code indicates a request conflict with the current state of the target resource.
 *
 * Conflicts are most likely to occur in response to a `PUT` request. For example, you may get a 409 response when uploading a file that is older than the existing one on the server, resulting in a version control conflict.
 *
 * @example
 * ```
 * import { CONFLICT } from 'readable-http-codes';
 *
 * if (response.status === CONFLICT) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 409](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409)
 * @see [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)
 */
export const CONFLICT = 409

/**
 * ### 410 Gone
 *
 * @description
 * The HTTP **410 Gone** client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.
 *
 * If you don't know whether this condition is temporary or permanent, a `404` status code should be used instead.
 *
 * @example
 * ```
 * import { GONE } from 'readable-http-codes';
 *
 * if (response.status === GONE) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 410](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410)
 */
export const GONE = 410

/**
 * ### 411 Length Required
 *
 * @description
 * The HTTP **411 Length Required** client error response code indicates that the server refuses to accept the request without a defined `Content-Length` header.
 *
 * **Note:**
 * by specification, when sending data in a series of chunks, the `Content-Length` header is omitted and at the beginning of each chunk you need to add the length of the current chunk in hexadecimal format. See `Transfer-Encoding` for more details.
 *
 * @example
 * ```
 * import { LENGTH_REQUIRED } from 'readable-http-codes';
 *
 * if (response.status === LENGTH_REQUIRED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 411](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411)
 * @see [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)
 * @see [Transfer-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)
 */
export const LENGTH_REQUIRED = 411

/**
 * ### 412 Precondition Failed
 *
 * @description
 * The HTTP **412 Precondition Failed** client error response code indicates that access to the target resource has been denied. This happens with conditional requests on methods other than `GET` or `HEAD` when the condition defined by the `If-Unmodified-Since` or `If-None-Match` headers is not fulfilled. In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back.
 *
 * @example
 * ```
 * import { PRECONDITION_FAILED } from 'readable-http-codes';
 *
 * if (response.status === PRECONDITION_FAILED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 412](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412)
 * @see [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
 * @see [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
 * @see [If-Unmodified-Since](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)
 * @see [If-None-Match](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match)
 */
export const PRECONDITION_FAILED = 412

/**
 * ### 413 Payload Too Large
 *
 * @description
 * The HTTP **413 Payload Too Large** response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a `Retry-After` header field.
 *
 * @example
 * ```
 * import { PAYLOAD_TOO_LARGE } from 'readable-http-codes';
 *
 * if (response.status === PAYLOAD_TOO_LARGE) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 413](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413)
 * @see [Retry-After](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)
 */
export const PAYLOAD_TOO_LARGE = 413

/**
 * ### 414 URI Too Long
 *
 * @description
 * The HTTP **414 URI Too Long** response status code indicates that the URI requested by the client is longer than the server is willing to interpret.
 *
 * There are a few rare conditions when this might occur:
 * - when a client has improperly converted a `POST` request to a `GET` request with long query information,
 * - when the client has descended into a loop of redirection (for example, a redirected URI prefix that points to a suffix of itself),
 * - or when the server is under attack by a client attempting to exploit potential security holes.
 *
 * @example
 * ```
 * import { URI_TOO_LONG } from 'readable-http-codes';
 *
 * if (response.status === URI_TOO_LONG) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 414](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414)
 * @see [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
 * @see [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
 */
export const URI_TOO_LONG = 414

/**
 * ### 415 Unsupported Media Type
 *
 * @description
 * The HTTP **415 Unsupported Media Type** client error response code indicates that the server refuses to accept the request because the payload format is in an unsupported format.
 *
 * The format problem might be due to the request's indicated `Content-Type` or `Content-Encoding`, or as a result of inspecting the data directly.
 *
 * @example
 * ```
 * import { UNSUPPORTED_MEDIA_TYPE } from 'readable-http-codes';
 *
 * if (response.status === UNSUPPORTED_MEDIA_TYPE) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 415](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415)
 * @see [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
 * @see [Content-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding)
 */
export const UNSUPPORTED_MEDIA_TYPE = 415

/**
 * ### 416 Range Not Satisfiable
 *
 * @description
 * The HTTP **416 Range Not Satisfiable** error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn't contain such ranges, or that the `Range` header value, though syntactically correct, doesn't make sense.
 *
 * The `416` response message contains a `Content-Range` indicating an unsatisfied range (that is a `*`) followed by a `/` and the current length of the resource.
 *
 * Faced with this error, browsers usually either abort the operation (for example, a download will be considered as non-resumable) or ask for the whole document again.
 *
 * @example
 * ```
 * import { RANGE_NOT_SATISFIABLE } from 'readable-http-codes';
 *
 * if (response.status === RANGE_NOT_SATISFIABLE) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 416](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416)
 * @see [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)
 * @see [Content-Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)
 */
export const RANGE_NOT_SATISFIABLE = 416

/**
 * ### 417 Expectation Failed
 *
 * @description
 * The HTTP **417 Expectation Failed** client error response code indicates that the expectation given in the request's `Expect` header could not be met.
 *
 * See the `Expect` header for more details.
 *
 * @example
 * ```
 * import { EXPECTATION_FAILED } from 'readable-http-codes';
 *
 * if (response.status === EXPECTATION_FAILED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 417](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417)
 * @see [Expect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect)
 */
export const EXPECTATION_FAILED = 417

/**
 * ### 418 I'm a teapot
 *
 * @description
 * The HTTP **418 I'm a teapot** client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014.
 *
 * Some websites use this response for requests they do not wish to handle, such as automated queries.
 *
 * @example
 * ```
 * import { IM_A_TEAPOT } from 'readable-http-codes';
 *
 * if (response.status === IM_A_TEAPOT) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 418](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418)
 */
export const IM_A_TEAPOT = 418

/**
 * ### 421 Misdirected Request
 *
 * @description
 * The HTTP **421 Misdirected Request** indicates that the request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
 *
 * @example
 * ```
 * import { MISDIRECTED_REQUEST } from 'readable-http-codes';
 *
 * if (response.status === MISDIRECTED_REQUEST) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Unknown**.
 *
 */
export const MISDIRECTED_REQUEST = 421

/**
 * ### 422 Unprocessable Entity
 *
 * @description
 * The HTTP **422 Unprocessable Entity** response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
 *
 * @example
 * ```
 * import { UNPROCESSABLE_ENTITY } from 'readable-http-codes';
 *
 * if (response.status === UNPROCESSABLE_ENTITY) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 422](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422)
 */
export const UNPROCESSABLE_ENTITY = 422

/**
 * ### 423 Locked
 *
 * @description
 * The HTTP **423 Locked** indicates that the resource that is being accessed is locked.
 *
 * @example
 * ```
 * import { LOCKED } from 'readable-http-codes';
 *
 * if (response.status === LOCKED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Unknown**.
 *
 */
export const LOCKED = 423

/**
 * ### 424 Failed Dependency
 *
 * @description
 * The HTTP **424 Failed Dependency** indicates that the request failed due to failure of a previous request.
 *
 * @example
 * ```
 * import { FAILED_DEPENDENCY } from 'readable-http-codes';
 *
 * if (response.status === FAILED_DEPENDENCY) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Unknown**.
 *
 */
export const FAILED_DEPENDENCY = 424

/**
 * ### 425 Too Early
 *
 * @description
 * **Experimental**: This is an experimental technology
 *
 * The HTTP **425 Too Early** response status code indicates that the server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack.
 *
 * @example
 * ```
 * import { TOO_EARLY } from 'readable-http-codes';
 *
 * if (response.status === TOO_EARLY) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Experimental**.
 *
 * @see [MDN Status 425](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425)
 * @see [Experimental](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)
 */
export const TOO_EARLY = 425

/**
 * ### 426 Upgrade Required
 *
 * @description
 * The HTTP **426 Upgrade Required** client error response code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
 *
 * The server sends an `Upgrade` header with this response to indicate the required protocol(s).
 *
 * @example
 * ```
 * import { UPGRADE_REQUIRED } from 'readable-http-codes';
 *
 * if (response.status === UPGRADE_REQUIRED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 426](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426)
 * @see [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
 */
export const UPGRADE_REQUIRED = 426

/**
 * ### 428 Precondition Required
 *
 * @description
 * The HTTP *428 Precondition Required** response status code indicates that the server requires the request to be `conditional`.
 *
 * Typically, this means that a required precondition header, such as `If-Match`, is missing.
 *
 * When a precondition header is not matching the server side state, the response should be `412 Precondition Failed`.
 *
 * @example
 * ```
 * import { PRECONDITION_REQUIRED } from 'readable-http-codes';
 *
 * if (response.status === PRECONDITION_REQUIRED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 428](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428)
 * @see [conditional](https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests)
 * @see [If-Match](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match)
 * @see [412 Precondition Filed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412)
 */
export const PRECONDITION_REQUIRED = 428

/**
 * ### 429 Too Many Requests
 *
 * @description
 * The HTTP **429 Too Many Requests** response status code indicates the user has sent too many requests in a given amount of time ("rate limiting").
 *
 * A `Retry-After` header might be included to this response indicating how long to wait before making a new request.
 *
 * @example
 * ```
 * import { TOO_MANY_REQUESTS } from 'readable-http-codes';
 *
 * if (response.status === TOO_MANY_REQUESTS) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 412](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429)
 * @see [Retry-After](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)
 */
export const TOO_MANY_REQUESTS = 429

/**
 * ### 431 Request Header Fields Too Large
 *
 * @description
 * The HTTP **431 Request Header Fields Too Large** response status code indicates that the server refuses to process the request because the request's `HTTP headers` are too long. The request may be resubmitted after reducing the size of the request headers.
 *
 * 431 can be used when the total size of request headers is too large, or when a single header field is too large. To help those running into this error, indicate which of the two is the problem in the response body — ideally, also include which headers are too large. This lets users attempt to fix the problem, such as by clearing their cookies.
 *
 * Servers will often produce this status if:
 * - The `Referer` URL is too long
 * - There are too many `Cookies` sent in the request
 *
 * @example
 * ```
 * import { REQUEST_HEADER_FIELDS_TOO_LARGE } from 'readable-http-codes';
 *
 * if (response.status === REQUEST_HEADER_FIELDS_TOO_LARGE) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 431](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431)
 * @see [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
 * @see [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
 * @see [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431

/**
 * ### 451 Unavailable For Legal Reasons
 *
 * @description
 * The HTTP **451 Unavailable For Legal Reasons** client error response code indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued.
 *
 * @example
 * ```
 * import { UNAVAILABLE_FOR_LEGAL_REASONS } from 'readable-http-codes';
 *
 * if (response.status === UNAVAILABLE_FOR_LEGAL_REASONS) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 451](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451)
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451
