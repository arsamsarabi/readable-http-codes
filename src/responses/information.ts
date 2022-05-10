/**
 * ### 100 Continue
 *
 * @description
 * The HTTP **100 Continue** informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
 *
 * To have a server check the request's headers, a client must send `Expect`: **100-continue** as a header in its initial request and receive a 100 Continue status code in response before sending the body.
 *
 * @example
 * ```
 * import { CONTINUE } from 'readable-http-codes';
 *
 * if (response.status === CONTINUE) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 100](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)
 * @see [MDN Headers Expect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect)
 */
export const CONTINUE = 100

/**
 * ### 101 Switching Protocols
 *
 * @description
 * The HTTP **101 Switching Protocols** response code indicates a protocol to which the server switches. The protocol is specified in the `Upgrade` request header received from a client.
 *
 * The server includes in this response an `Upgrade` response header to indicate the protocol it switched to. The process is described in the following article: `Protocol upgrade mechanism`.
 *
 * @example
 * ```
 * import { SWITCHING_PROTOCOLS } from 'readable-http-codes';
 *
 * if (response.status === SWITCHING_PROTOCOLS) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: not specified.
 *
 * @see [MDN Status 101](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101)
 * @see [MDN Headers Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
 * @see [MDN Protocol upgrade mechanism](https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)
 */
export const SWITCHING_PROTOCOLS = 101

/**
 * ### 102 Processing (WebDAV)
 *
 * @description
 * The HTTP **102 Processing** informational status response code indicates that the server has received and is processing the request, but no response is available yet.
 *
 * @example
 * ```
 * import { PROCESSING } from 'readable-http-codes';
 *
 * if (response.status === PROCESSING) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: Not specified.
 *
 * @see [MDN WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV)
 */
export const PROCESSING = 102

/**
 * ### 103 Early Hints
 *
 * @description
 * The HTTP **103 Early Hints** information response status code is primarily intended to be used with the `Link` header to allow the user agent to start preloading resources while the server is still preparing a response.
 *
 * @example
 * ```
 * import { EARLY_HINTS } from 'readable-http-codes';
 *
 * if (response.status === EARLY_HINTS) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: No compatibility data found for `http.status.103`.
 *
 * @see [MDN Status 103](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103)
 * @see [MDN Headers Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
 */
export const EARLY_HINTS = 103
