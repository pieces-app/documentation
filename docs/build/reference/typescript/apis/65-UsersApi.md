# Users API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateFromOauthToken**](UsersApi#authenticatefromoauthtoken) | **POST** /users/authenticate/from_token | /users/authenticate/from_token [POST]
[**usersDisconnectUser**](UsersApi#usersdisconnectuser) | **POST** /users/\{user\}/disconnect | /users/\{user\}/disconnect [POST]
[**usersSnapshot**](UsersApi#userssnapshot) | **GET** /users | /users [GET]
[**usersSpecificUserSnapshot**](UsersApi#usersspecificusersnapshot) | **GET** /users/\{user\} | /users/\{user\} [GET] Scoped to Users


## **authenticateFromOauthToken**
> UserProfile authenticateFromOauthToken()

Creates a User From a oAuth Token

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.UsersApi(configuration);

let body:.UsersApiAuthenticateFromOauthTokenRequest = {
    // OAuthToken |  (optional)
    oAuthToken: ,
};

apiInstance.authenticateFromOauthToken(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthToken** | **OAuthToken**|  |


### Return type

**UserProfile**

### Authorization

[auth0](README#auth0), [auth0](README#auth0), [auth0](README#auth0)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **usersDisconnectUser**
> Users usersDisconnectUser()

Locally Removing a user for the purpose of Signing Out

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.UsersApi(configuration);

let body:.UsersApiUsersDisconnectUserRequest = {
    // string
    user: user_example,
};

apiInstance.usersDisconnectUser(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined


### Return type

**Users**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **usersSnapshot**
> Users usersSnapshot()

this will return a snapshot of all of the users that are in the users database. TODO might want to make this internal.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.UsersApi(configuration);

let body:any = {};

apiInstance.usersSnapshot(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Users**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **usersSpecificUserSnapshot**
> UserProfile usersSpecificUserSnapshot()

This enables the client to get the current user.  This endpoint will return a UserPRofile or will throw an error since you are sending user uid.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.UsersApi(configuration);

let body:.UsersApiUsersSpecificUserSnapshotRequest = {
    // string | The id (uuid) for a specific user.
    user: 497f6eca-6276-4993-bfeb-53cbbbba6f08,
};

apiInstance.usersSpecificUserSnapshot(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] | The id (uuid) for a specific user. | defaults to undefined


### Return type

**UserProfile**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




