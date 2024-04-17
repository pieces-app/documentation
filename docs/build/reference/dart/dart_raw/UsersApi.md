---
title: core_openapi.api.UsersApi | Dart SDK
---

# core_openapi.api.UsersApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateFromOauthToken**](UsersApi.md#authenticatefromoauthtoken) | **POST** /users/authenticate/from_token | /users/authenticate/from_token [POST]
[**usersDisconnectUser**](UsersApi.md#usersdisconnectuser) | **POST** /users/{user}/disconnect | /users/{user}/disconnect [POST]
[**usersSnapshot**](UsersApi.md#userssnapshot) | **GET** /users | /users [GET]
[**usersSpecificUserSnapshot**](UsersApi.md#usersspecificusersnapshot) | **GET** /users/{user} | /users/{user} [GET] Scoped to Users


## **authenticateFromOauthToken** {#authenticatefromoauthtoken}
> UserProfile authenticateFromOauthToken(oAuthToken)

/users/authenticate/from_token [POST]

Creates a User From a oAuth Token

### Example
```dart
import 'package:core_openapi/api.dart';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication<OAuth>('auth0').accessToken = 'YOUR_ACCESS_TOKEN';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication<OAuth>('auth0').accessToken = 'YOUR_ACCESS_TOKEN';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication<OAuth>('auth0').accessToken = 'YOUR_ACCESS_TOKEN';

final api_instance = UsersApi();
final oAuthToken = OAuthToken(); // OAuthToken | 

try {
    final result = api_instance.authenticateFromOauthToken(oAuthToken);
    print(result);
} catch (e) {
    print('Exception when calling UsersApi->authenticateFromOauthToken: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthToken** | [**OAuthToken**](OAuthToken.md)|  | [optional] 

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[auth0](../README.md#auth0), [auth0](../README.md#auth0), [auth0](../README.md#auth0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **usersDisconnectUser** {#usersdisconnectuser}
> Users usersDisconnectUser(user)

/users/{user}/disconnect [POST]

Locally Removing a user for the purpose of Signing Out

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = UsersApi();
final user = user_example; // String | 

try {
    final result = api_instance.usersDisconnectUser(user);
    print(result);
} catch (e) {
    print('Exception when calling UsersApi->usersDisconnectUser: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**|  | 

### Return type

[**Users**](Users.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **usersSnapshot** {#userssnapshot}
> Users usersSnapshot()

/users [GET]

this will return a snapshot of all of the users that are in the users database. TODO might want to make this internal.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = UsersApi();

try {
    final result = api_instance.usersSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling UsersApi->usersSnapshot: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Users**](Users.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **usersSpecificUserSnapshot** {#usersspecificusersnapshot}
> UserProfile usersSpecificUserSnapshot(user)

/users/{user} [GET] Scoped to Users

This enables the client to get the current user.  This endpoint will return a UserPRofile or will throw an error since you are sending user uid.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = UsersApi();
final user = 497f6eca-6276-4993-bfeb-53cbbbba6f08; // String | The id (uuid) for a specific user.

try {
    final result = api_instance.usersSpecificUserSnapshot(user);
    print(result);
} catch (e) {
    print('Exception when calling UsersApi->usersSpecificUserSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The id (uuid) for a specific user. | 

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

