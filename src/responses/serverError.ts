/**
 * ### 500 Internal Server Error
 *
 * @description
 * The HTTP **500 Internal** Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
 *
 * This error response is a generic "catch-all" response. Usually, this indicates the server cannot find a better 5xx error code to response. Sometimes, server administrators log error responses like the 500 status code with more details about the request to prevent the error from happening again in the future.
 *
 * @example
 * ```
 * import { INTERNAL_SERVER_ERROR } from 'readable-http-codes';
 *
 * if (response.status === INTERNAL_SERVER_ERROR) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 500](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
 */
export const INTERNAL_SERVER_ERROR = 500;

/**
 * ### 501 Not Implemented
 *
 * @description
 * The HTTP **501 Not Implemented** server error response code means that the server does not support the functionality required to fulfill the request.
 *
 * `501` is the appropriate response when the server does not recognize the request method and is incapable of supporting it for any resource. The only methods that servers are required to support (and therefore that must not return `501`) are `GET` and `HEAD`.
 *
 * If the server does recognize the method, but intentionally does not support it, the appropriate response is `405 Method Not Allowed`.
 *
 * **Note:**
 * - A `501` error is not something you can fix, but requires a fix by the web server you are trying to access.
 * - A `501` response is cacheable by default; that is, unless caching headers instruct otherwise.
 *
 * @example
 * ```
 * import { NOT_IMPLEMENTED } from 'readable-http-codes';
 *
 * if (response.status === NOT_IMPLEMENTED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 501](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501)
 * @see [Retry-After](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)
 * @see [405 Method Not Allowed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405)
 */
export const NOT_IMPLEMENTED = 501;

/**
 * ### 502 Bad Gateway
 *
 * @description
 * The HTTP **502 Bad Gateway** server error response code indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server.
 *
 * ** Note:**
 * A Gateway might refer to different things in networking and a 502 error is usually not something you can fix, but requires a fix by the web server or the proxies you are trying to get access through.
 *
 * @example
 * ```
 * import { BAD_GATEWAY } from 'readable-http-codes';
 *
 * if (response.status === BAD_GATEWAY) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 502](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502)
 */
export const BAD_GATEWAY = 502;

/**
 * ### 503 Service Unavailable
 *
 * @description
 * The HTTP **503 Service Unavailable** server error response code indicates that the server is not ready to handle the request.
 *
 * Common causes are a server that is down for maintenance or that is overloaded. This response should be used for temporary conditions and the `Retry-After` HTTP header should, if possible, contain the estimated time for the recovery of the service.
 *
 * **Note:**
 * Together with this response, a user-friendly page explaining the problem should be sent.
 *
 * @example
 * ```
 * import { SERVICE_UNAVAILABLE } from 'readable-http-codes';
 *
 * if (response.status === SERVICE_UNAVAILABLE) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 503](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503)
 * @see [Retry-After](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)
 */
export const SERVICE_UNAVAILABLE = 503;

/**
 * ### 504 Gateway Timeout
 *
 * @description
 * The HTTP **504 Gateway Timeout** server error response code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request.
 *
 * **Note:**
 * A Gateway might refer to different things in networking and a 504 error is usually not something you can fix, but requires a fix by the web server or the proxies you are trying to get access through.
 *
 * @example
 * ```
 * import { GATEWAY_TIMEOUT } from 'readable-http-codes';
 *
 * if (response.status === GATEWAY_TIMEOUT) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 504](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504)
 */
export const GATEWAY_TIMEOUT = 504;

/**
 * ### 505 HTTP Version Not Supported
 *
 * @description
 * The HTTP **505 HTTP Version Not Supported** response status code indicates that the HTTP version used in the request is not supported by the server.
 *
 * @example
 * ```
 * import { HTTP_VERSION_NOT_SUPPORTED } from 'readable-http-codes';
 *
 * if (response.status === HTTP_VERSION_NOT_SUPPORTED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 505](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505)
 */
export const HTTP_VERSION_NOT_SUPPORTED = 505;

/**
 * ### 506 Variant Also Negotiates
 *
 * @description
 * The HTTP **506 Variant Also Negotiates** response status code may be given in the context of Transparent Content Negotiation (see `RFC 2295`). This protocol enables a client to retrieve the best variant of a given resource, where the server supports multiple variants.
 *
 * The Variant Also Negotiates status code indicates an internal server configuration error in which the chosen variant is itself configured to engage in content negotiation, so is not a proper negotiation endpoint.
 *
 * @example
 * ```
 * import { VARIANT_ALSO_NEGOTIATES } from 'readable-http-codes';
 *
 * if (response.status === VARIANT_ALSO_NEGOTIATES) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 506](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506)
 * @see [RFC 2295](https://datatracker.ietf.org/doc/html/rfc2295)
 */
export const VARIANT_ALSO_NEGOTIATES = 506;

/**
 * ### 507 Insufficient Storage
 *
 * @description
 * The HTTP 507 Insufficient Storage response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol (see `RFC 4918`).
 *
 * It indicates that a method could not be performed because the server cannot store the representation needed to successfully complete the request.
 *
 * @example
 * ```
 * import { INSUFFICIENT_STORAGE } from 'readable-http-codes';
 *
 * if (response.status === INSUFFICIENT_STORAGE) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 507](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507)
 * @see [RFC 4918](https://datatracker.ietf.org/doc/html/rfc4918)
 */
export const INSUFFICIENT_STORAGE = 507;

/**
 * ### 508 Loop Detected
 *
 * @description
 * The HTTP **508 Loop Detected** response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol.
 *
 * It indicates that the server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed.
 *
 * @example
 * ```
 * import { LOOP_DETECTED } from 'readable-http-codes';
 *
 * if (response.status === LOOP_DETECTED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 508](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508)
 */
export const LOOP_DETECTED = 508;

/**
 * ### 510 Not Extended
 *
 * @description
 * The HTTP **510 Not Extended** response status code is sent in the context of the HTTP Extension Framework, defined in `RFC 2774`.
 *
 * In that specification a client may send a request that contains an extension declaration, that describes the extension to be used. If the server receives such a request, but any described extensions are not supported for the request, then the server responds with the `510` status code.
 *
 * @example
 * ```
 * import { NOT_EXTENDED } from 'readable-http-codes';
 *
 * if (response.status === NOT_EXTENDED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 510](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510)
 * @see [RFC 2774](https://datatracker.ietf.org/doc/html/rfc2774)
 */
export const NOT_EXTENDED = 510;

/**
 * ### 511 Network Authentication Required
 *
 * @description
 * The HTTP **511 Network Authentication Required** response status code indicates that the client needs to authenticate to gain network access.
 *
 * This status is not generated by origin servers, but by intercepting proxies that control access to the network.
 *
 * Network operators sometimes require some authentication, acceptance of terms, or other user interaction before granting access (for example in an internet café or at an airport). They often identify clients who have not done so using their Media Access Control (MAC) addresses.
 *
 * @example
 * ```
 * import { NETWORK_AUTHENTICATION_REQUIRED } from 'readable-http-codes';
 *
 * if (response.status === NETWORK_AUTHENTICATION_REQUIRED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 511](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511)
 */
export const NETWORK_AUTHENTICATION_REQUIRED = 511;
