/**
 * ### 200 OK
 *
 * @description
 * The HTTP **200 OK** success status response code indicates that the request has succeeded. A 200 response is cacheable by default.
 *
 * The meaning of a success depends on the HTTP request method: <br />
 * - `GET`: The resource has been fetched and is transmitted in the message body.
 * - `HEAD`: The representation headers are included in the response without any message body.
 * - `POST`: The resource describing the result of the action is transmitted in the message body.
 * - `TRACE`: The message body contains the request message as received by the server.
 *
 * The successful result of a `PUT` or a `DELETE` is often not a **200 OK** but a **204 No Content** (or a **201 Created** when the resource is uploaded for the first time).
 *
 * @example
 * ```
 * import { OK } from 'readable-http-codes';
 *
 * if (response.status === OK) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
 */
export const OK: number = 200

/**
 * ### 201 Created
 *
 * @description
 * The HTTP **201 Created** success status response code indicates that the request has succeeded and has led to the creation of a resource. The new resource is effectively created before this response is sent back and the new resource is returned in the body of the message, its location being either the URL of the request, or the content of the `Location` header.
 *
 * The common use case of this status code is as the result of a `POST` request.
 *
 * @example
 * ```
 * import { CREATED } from 'readable-http-codes';
 *
 * if (response.status === CREATED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 201](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)
 * @see [MDN Headers Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
 */
export const CREATED: number = 201

/**
 * ### 202 Accepted
 *
 * @description
 * The HyperText Transfer Protocol (HTTP) **202 Accepted** response status code indicates that the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.
 *
 * 202 is non-committal, meaning that there is no way for the HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
 *
 * @example
 * ```
 * import { ACCEPTED } from 'readable-http-codes';
 *
 * if (response.status === ACCEPTED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: Not specified.
 *
 * @see [MDN Status 202](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202)
 */
export const ACCEPTED: number = 202

/**
 * ### 203 Non-Authoritative Information
 *
 * @description
 * The HTTP **203 Non-Authoritative Information** response status indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server's 200 (OK) response .
 *
 * The 203 response is similar to the value 214, meaning `Transformation Applied`, of the Warning header code, which has the additional advantage of being applicable to responses with any status code.
 *
 * @example
 * ```
 * import { NON_AUTHORITATIVE_INFORMATION } from 'readable-http-codes';
 *
 * if (response.status === NON_AUTHORITATIVE_INFORMATION) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: Not specified.
 *
 * @see [MDN Status 203](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203)
 * @see [MDN Proxy Server](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server)
 */
export const NON_AUTHORITATIVE_INFORMATION: number = 203

/**
 * ### 204 No Content
 *
 * @description
 * The HTTP **204 No Content** success status response code indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page.
 *
 * This might be used, for example, when implementing "save and continue editing" functionality for a wiki site. In this case a `PUT` request would be used to save the page, and the **204 No Content** response would be sent to indicate that the editor should not be replaced by some other page.
 *
 * A 204 response is cacheable by default (an `ETag` header is included in such a response).
 *
 * @example
 * ```
 * import { NO_CONTENT } from 'readable-http-codes';
 *
 * if (response.status === NO_CONTENT) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 204](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)
 * @see [MDN Headers ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
 */
export const NO_CONTENT: number = 204

/**
 * ### 205 Reset Content
 *
 * @description
 * The HTTP **205 Reset Content** response status tells the client to reset the document view, so for example to clear the content of a form, reset a canvas state, or to refresh the UI.
 *
 * @example
 * ```
 * import { RESET_CONTENT } from 'readable-http-codes';
 *
 * if (response.status === RESET_CONTENT) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: Browser behavior differs if this response erroneously includes a body on persistent connections See **204 No Content** for more detail.
 *
 * @see [MDN Status 205](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205)
 */
export const RESET_CONTENT: number = 205

/**
 * ### 206 Partial Content
 *
 * @description
 * The HTTP **206 Partial Content** success status response code indicates that the request has succeeded and the body contains the requested ranges of data, as described in the `Range` header of the request.
 *
 * If there is only one range, the `Content-Type` of the whole response is set to the type of the document, and a `Content-Range` is provided.
 *
 * If several ranges are sent back, the `Content-Type` is set to multipart/byteranges and each fragment covers one range, with `Content-Range` and `Content-Type` describing it.
 *
 * @example
 * ```
 * import { PARTIAL_CONTENT } from 'readable-http-codes';
 *
 * if (response.status === PARTIAL_CONTENT) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 206](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)
 * @see [MDN Headers Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)
 * @see [MDN Headers Content-Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)
 * @see [MDN Headers Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
 */
export const PARTIAL_CONTENT: number = 206

/**
 * ### 207 Multi-Status (WebDAV)
 *
 * @description
 * The HTTP **207 Multi-Status** success status response code conveys information about multiple resources, for situations where multiple status codes might be appropriate.
 *
 * @example
 * ```
 * import { MULTI_STATUS } from 'readable-http-codes';
 *
 * if (response.status === MULTI_STATUS) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: Not specified.
 *
 * @see [MDN WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV)
 */
export const MULTI_STATUS: number = 207

/**
 * ### 208 Already Reported (WebDAV)
 *
 * @description
 * The HTTP **208 Already Reported** success status response code is used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
 *
 * @example
 * ```
 * import { ALREADY_REPORTED } from 'readable-http-codes';
 *
 * if (response.status === ALREADY_REPORTED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: Not specified.
 *
 * @see [MDN WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV)
 */
export const ALREADY_REPORTED: number = 208

/**
 * ### 226 IM Used (HTTP Delta encoding)
 *
 * @description
 * The HTTP **226 IM Used** success status response code indicates that the server has fulfilled a `GET` request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
 *
 * @example
 * ```
 * import { IM_USED } from 'readable-http-codes';
 *
 * if (response.status === IM_USED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: Not specified.
 *
 * @see [Delta encoding in HTTP](https://datatracker.ietf.org/doc/html/rfc3229)
 */
export const IM_USED: number = 226
