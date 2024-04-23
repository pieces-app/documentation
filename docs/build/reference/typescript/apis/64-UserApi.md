---
title: User API | TypeScript SDK
---

# User API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearUser**](UserApi#clearuser) | **POST** /user/clear | /user/clear
[**refreshUser**](UserApi#refreshuser) | **GET** /user/refresh | /user/refresh [GET]
[**selectUser**](UserApi#selectuser) | **POST** /user/select | /user/select [POST]
[**streamUser**](UserApi#streamuser) | **GET** /user/stream | /user/stream [WS]
[**updateUser**](UserApi#updateuser) | **POST** /user/update | /user/update [POST]
[**userBetaStatus**](UserApi#userbetastatus) | **POST** /user/beta/status | /user/beta/status [POST]
[**userProviders**](UserApi#userproviders) | **GET** /user/providers | Your GET endpoint
[**userSnapshot**](UserApi#usersnapshot) | **GET** /user | /user [GET]
[**userUpdateVanity**](UserApi#userupdatevanity) | **POST** /user/update/vanity | /user/update/vanity [POST]


## **clearUser** {#clearuser}
> clearUser()

An endpoint to clear the current user. 

### Example {#clearuser-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UserApi(configuration)

apiInstance.clearUser().then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#clearuser-parameters}

This endpoint does not need any parameters.


### Return type {#clearuser-return-type}

void (empty response body)

### HTTP request headers {#clearuser-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details {#clearuser-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |

## **refreshUser** {#refreshuser}
> UserProfile refreshUser()

This will refresh a user.

### Example {#refreshuser-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UserApi(configuration)

apiInstance.refreshUser().then((data: UserProfile) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#refreshuser-parameters}

This endpoint does not need any parameters.


### Return type {#refreshuser-return-type}

[**UserProfile**](../models/UserProfile)

### HTTP request headers {#refreshuser-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#refreshuser-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **selectUser** {#selectuser}
> UserProfile selectUser()

This will select the current user.

### Example {#selectuser-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UserApi(configuration)

const body: Pieces.SelectUserRequest = {
// Auth0User |  (optional)
auth0User: ,
};

apiInstance.selectUser(body).then((data: UserProfile) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#selectuser-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth0User** | **Auth0User**|  |


### Return type {#selectuser-return-type}

[**UserProfile**](../models/UserProfile)

### HTTP request headers {#selectuser-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#selectuser-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **streamUser** {#streamuser}
> UserProfile streamUser()

Provides a WebSocket connection that streams user data.

### Example {#streamuser-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UserApi(configuration)

apiInstance.streamUser().then((data: UserProfile) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#streamuser-parameters}

This endpoint does not need any parameters.


### Return type {#streamuser-return-type}

[**UserProfile**](../models/UserProfile)

### HTTP request headers {#streamuser-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#streamuser-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **updateUser** {#updateuser}
> UserProfile updateUser()

This will update a specific user in the database.

### Example {#updateuser-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UserApi(configuration)

const body: Pieces.UpdateUserRequest = {
// UserProfile |  (optional)
userProfile: ,
};

apiInstance.updateUser(body).then((data: UserProfile) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#updateuser-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | **UserProfile**|  |


### Return type {#updateuser-return-type}

[**UserProfile**](../models/UserProfile)

### HTTP request headers {#updateuser-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#updateuser-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **userBetaStatus** {#userbetastatus}
> UserBetaStatus userBetaStatus()

This will be an endpoint to give access or remove access immediately from a given user.(isomorphic from the given provider)

### Example {#userbetastatus-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UserApi(configuration)

const body: Pieces.UserBetaStatusRequest = {
// UserBetaStatus (optional)
userBetaStatus: ,
};

apiInstance.userBetaStatus(body).then((data: UserBetaStatus) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#userbetastatus-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBetaStatus** | **UserBetaStatus**|  |


### Return type {#userbetastatus-return-type}

[**UserBetaStatus**](../models/UserBetaStatus)

### HTTP request headers {#userbetastatus-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#userbetastatus-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to change the beta status |  -  |

## **userProviders** {#userproviders}
> ReturnedUserProfile userProviders()

This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.

### Example {#userproviders-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UserApi(configuration)

apiInstance.userProviders().then((data: ReturnedUserProfile) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#userproviders-parameters}

This endpoint does not need any parameters.


### Return type {#userproviders-return-type}

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### HTTP request headers {#userproviders-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#userproviders-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**501** | Not Implemented |  -  |

## **userSnapshot** {#usersnapshot}
> ReturnedUserProfile userSnapshot()

This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.

### Example {#usersnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UserApi(configuration)

apiInstance.userSnapshot().then((data: ReturnedUserProfile) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#usersnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#usersnapshot-return-type}

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### HTTP request headers {#usersnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#usersnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **userUpdateVanity** {#userupdatevanity}
> UserProfile userUpdateVanity()

This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.

### Example {#userupdatevanity-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UserApi(configuration)

const body: Pieces.UserUpdateVanityRequest = {
// UserProfile | This will take an update userProfile, with the updated vanity name! (optional)
userProfile: ,
};

apiInstance.userUpdateVanity(body).then((data: UserProfile) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#userupdatevanity-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | **UserProfile**| This will take an update userProfile, with the updated vanity name! |


### Return type {#userupdatevanity-return-type}

[**UserProfile**](../models/UserProfile)

### HTTP request headers {#userupdatevanity-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#userupdatevanity-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**404** | The original dns record was not found, please wait for cloud connectivity to fully connect. |  -  |
**409** | Conflict, This means that we were unable to update the username because it was already taken. |  -  |
**500** | Unable to create a username. Internal Server Error. |  -  |
**511** | Network Authentication Required, Cannot Update the Vanityname of the user because the user is either not signed in or in not connected to the cloud. |  -  |


