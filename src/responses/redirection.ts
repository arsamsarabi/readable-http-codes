/**
 * ### 300 Multiple Choices
 *
 * @description
 * The HTTP **300 Multiple Choices** redirect status response code indicates that the request has more than one possible responses. The user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used.
 *
 * If the server has a preferred choice, it should generate a `Location` header.
 *
 * @example
 * ```
 * import { MULTIPLE_CHOICES } from 'readable-http-codes';
 *
 * if (response.status === MULTIPLE_CHOICES) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: not specified.
 *
 * @see [MDN Status 300](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300)
 * @see [MDN Headers Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
 */
export const MULTIPLE_CHOICES = 300

/**
 * ### 301 Moved Permanently
 *
 * @description
 * The HTTP **301 Moved Permanently** redirect status response code indicates that the requested resource has been definitively moved to the URL given by the `Location` headers. A browser redirects to the new URL and search engines update their links to the resource.
 *
 * **Note:**
 * Although the specification requires the method and the body to remain unchanged when the redirection is performed, not all user-agents meet this requirement. Use the **301** code only as a response for `GET` or `HEAD` methods and use the **308 Permanent Redirect** for `POST` methods instead, as the method change is explicitly prohibited with this status.
 *
 * @example
 * ```
 * import { MOVED_PERMANENTLY } from 'readable-http-codes';
 *
 * if (response.status === MOVED_PERMANENTLY) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 301](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301)
 * @see [MDN Headers Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
 */
export const MOVED_PERMANENTLY = 301

/**
 * ### 302 Found
 *
 * @description
 * The HTTP **302 Found** redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the `Location` header. A browser redirects to this page but search engines don't update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is not sent to the new URL).
 *
 * Even if the specification requires the method (and the body) not to be altered when the redirection is performed, not all user-agents conform here - you can still find this type of bugged software out there. It is therefore recommended to set the 302 code only as a response for `GET` or `HEAD` methods and to use **307 Temporary Redirect** instead, as the method change is explicitly prohibited in that case.
 *
 * In the cases where you want the method used to be changed to `GET`, use **303 See Other** instead. This is useful when you want to give a response to a `PUT` method that is not the uploaded resource but a confirmation message such as: 'you successfully uploaded XYZ'.
 *
 * @example
 * ```
 * import { FOUND } from 'readable-http-codes';
 *
 * if (response.status === FOUND) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 302](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
 */
export const FOUND = 302

/**
 * ### 303 See Other
 *
 * @description
 * The HTTP **303 See Other** redirect status response code indicates that the redirects don't link to the newly uploaded resources, but to another page (such as a confirmation page or an upload progress page). This response code is usually sent back as a result of `PUT` or `POST`. The method used to display this redirected page is always `GET`.
 *
 * @example
 * ```
 * import { SEE_OTHER } from 'readable-http-codes';
 *
 * if (response.status === SEE_OTHER) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 303](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303)
 */
export const SEE_OTHER = 303

/**
 * ### 304 Not Modified
 *
 * @description
 * The HTTP **304 Not Modified** client redirection response code indicates that there is no need to retransmit the requested resources. It is an implicit redirection to a cached resource. This happens when the request method is a **safe** method, such as `GET` or `HEAD`, or when the request is conditional and uses an `If-None-Match` or an `If-Modified-Since` header.
 *
 * The equivalent **200 OK** response would have included the headers `Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires`, and `Vary`.
 *
 * > **Note**: Many developer tools' network panels of browsers create extraneous requests leading to **304** responses, so that access to the local cache is visible to developers.
 *
 * @example
 * ```
 * import { NOT_MODIFIED } from 'readable-http-codes';
 *
 * if (response.status === NOT_MODIFIED) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 304](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304)
 * @see [MDN Safe](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP)
 * @see [MDN Headers If-None-Match](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match)
 * @see [MDN Headers If-Modified-Since](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since)
 * @see [MDN Headers Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
 * @see [MDN Headers Content-Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location)
 * @see [MDN Headers Date](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date)
 * @see [MDN Headers ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
 * @see [MDN Headers Expires](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires)
 * @see [MDN Headers Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)
 */
export const NOT_MODIFIED = 304

/**
 * @deprecated
 * ### 305 Use Proxy
 *
 * @description
 * Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
 *
 * @example
 * ```
 * import { USE_PROXY } from 'readable-http-codes';
 *
 * if (response.status === USE_PROXY) {
 *  // Do something
 * }
 *
 * ```
 *
 */
export const USE_PROXY = 305

/**
 * ### 306 Unused
 *
 * @description
 * This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.
 *
 * @example
 * ```
 * import { UNUSED } from 'readable-http-codes';
 *
 * if (response.status === UNUSED) {
 *  // Do something
 * }
 *
 * ```
 *
 */
export const UNUSED = 306

/**
 * ### 307 Temporary Redirect
 *
 * @description
 * The HTTP **307 Temporary Redirect** redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the `Location` headers.
 *
 * The method and the body of the original request are reused to perform the redirected request. In the cases where you want the method used to be changed to `GET`, use **303 See Other** instead. This is useful when you want to give an answer to a `PUT` method that is not the uploaded resources, but a confirmation message (like "You successfully uploaded XYZ").
 *
 * The only difference between **307** and **302** is that **307** guarantees that the method and the body will not be changed when the redirected request is made. With **302**, some old clients were incorrectly changing the method to `GET`: the behavior with **non-GET** methods and **302** is then unpredictable on the Web, whereas the behavior with **307** is predictable. For `GET` requests, their behavior is identical.
 *
 * @example
 * ```
 * import { TEMPORARY_REDIRECT } from 'readable-http-codes';
 *
 * if (response.status === TEMPORARY_REDIRECT) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**.
 *
 * @see [MDN Status 306](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307)
 * @see [MDN Headers Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
 */
export const TEMPORARY_REDIRECT = 307

/**
 * ### 308 Permanent Redirect
 *
 * @description
 * The HTTP **308 Permanent Redirect** redirect status response code indicates that the resource requested has been definitively moved to the URL given by the `Location` headers. A browser redirects to this page and search engines update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is sent to the new URL).
 *
 * The request method and the body will not be altered, whereas **301** may incorrectly sometimes be changed to a `GET` method.
 *
 * > **Note**: Some Web applications may use the **308 Permanent Redirect** in a non-standard way and for other purposes. For example, Google Drive uses a **308 Resume Incomplete** response to indicate to the client when an incomplete upload stalled. (See Perform a resumable download on Google Drive documentation.)
 *
 * @example
 * ```
 * import { PERMANENT_REDIRECT } from 'readable-http-codes';
 *
 * if (response.status === PERMANENT_REDIRECT) {
 *  // Do something
 * }
 *
 * ```
 *
 * Browser compatibility: **Full support**\*.
 *
 * *On IE11 does not work below Windows 10.
 *
 * @see [MDN Status 308](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308)
 * @see [MDN Headers Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
 * @see [Perform a resumable upload](https://developers.google.com/drive/api/v3/manage-uploads#resumable)
 */
export const PERMANENT_REDIRECT = 308
