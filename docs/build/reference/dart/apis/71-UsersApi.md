---
title: Users API | Dart SDK
---

# Users API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateFromOauthToken**](UsersApi#authenticatefromoauthtoken) | **POST** /users/authenticate/from_token | /users/authenticate/from_token [POST]
[**usersDisconnectUser**](UsersApi#usersdisconnectuser) | **POST** /users/\{user\}/disconnect | /users/\{user\}/disconnect [POST]
[**usersSnapshot**](UsersApi#userssnapshot) | **GET** /users | /users [GET]
[**usersSpecificUserSnapshot**](UsersApi#usersspecificusersnapshot) | **GET** /users/\{user\} | /users/\{user\} [GET] Scoped to Users


## **authenticateFromOauthToken** {#authenticatefromoauthtoken}
> UserProfile authenticateFromOauthToken(oAuthToken)

/users/authenticate/from_token [POST]

Creates a User From a oAuth Token

### Example {#authenticatefromoauthtoken-example}
```dart
import 'package:core_openapi/api.dart';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication\<OAuth\>**('auth0').accessToken = 'YOUR_ACCESS_TOKEN';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication\<OAuth\>**('auth0').accessToken = 'YOUR_ACCESS_TOKEN';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication\<OAuth\>**('auth0').accessToken = 'YOUR_ACCESS_TOKEN';

final api_instance = UsersApi();
final oAuthToken = OAuthToken(); // OAuthToken | 

try {
    final result = api_instance.authenticateFromOauthToken(oAuthToken);
    print(result);
} catch (e) {
    print('Exception when calling UsersApi->authenticateFromOauthToken: $e\n');
}
```

### Parameters {#authenticatefromoauthtoken-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthToken** | [**OAuthToken**](../models/OAuthToken) |  | [optional] 

### Return type {#authenticatefromoauthtoken-return-type}

[**UserProfile**](../models/UserProfile)

### Authorization {#authenticatefromoauthtoken-authorization}



### HTTP request headers {#authenticatefromoauthtoken-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **usersDisconnectUser** {#usersdisconnectuser}
> Users usersDisconnectUser(user)

/users/\{user\}/disconnect [POST]

Locally Removing a user for the purpose of Signing Out

### Example {#usersdisconnectuser-example}
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

### Parameters {#usersdisconnectuser-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String** |  | 

### Return type {#usersdisconnectuser-return-type}

[**Users**](../models/Users)

### Authorization {#usersdisconnectuser-authorization}

No authorization required

### HTTP request headers {#usersdisconnectuser-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **usersSnapshot** {#userssnapshot}
> Users usersSnapshot()

/users [GET]

this will return a snapshot of all of the users that are in the users database. TODO might want to make this internal.

### Example {#userssnapshot-example}
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

### Parameters {#userssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#userssnapshot-return-type}

[**Users**](../models/Users)

### Authorization {#userssnapshot-authorization}

No authorization required

### HTTP request headers {#userssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **usersSpecificUserSnapshot** {#usersspecificusersnapshot}
> UserProfile usersSpecificUserSnapshot(user)

/users/\{user\} [GET] Scoped to Users

This enables the client to get the current user.  This endpoint will return a UserPRofile or will throw an error since you are sending user uid.

### Example {#usersspecificusersnapshot-example}
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

### Parameters {#usersspecificusersnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String** | The id (uuid) for a specific user. | 

### Return type {#usersspecificusersnapshot-return-type}

[**UserProfile**](../models/UserProfile)

### Authorization {#usersspecificusersnapshot-authorization}

No authorization required

### HTTP request headers {#usersspecificusersnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

