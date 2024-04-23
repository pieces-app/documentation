---
title: User API | Dart SDK
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

/user/clear

An endpoint to clear the current user. 

### Example {#clearuser-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = UserApi();

try {
    api_instance.clearUser();
} catch (e) {
    print('Exception when calling UserApi->clearUser: $e\n');
}
```

### Parameters {#clearuser-parameters}
This endpoint does not need any parameter.

### Return type {#clearuser-return-type}

void (empty response body)

### Authorization {#clearuser-authorization}

No authorization required

### HTTP request headers {#clearuser-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **refreshUser** {#refreshuser}
> UserProfile refreshUser()

/user/refresh [GET]

This will refresh a user.

### Example {#refreshuser-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = UserApi();

try {
    final result = api_instance.refreshUser();
    print(result);
} catch (e) {
    print('Exception when calling UserApi->refreshUser: $e\n');
}
```

### Parameters {#refreshuser-parameters}
This endpoint does not need any parameter.

### Return type {#refreshuser-return-type}

[**UserProfile**](../models/UserProfile)

### Authorization {#refreshuser-authorization}

No authorization required

### HTTP request headers {#refreshuser-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **selectUser** {#selectuser}
> UserProfile selectUser(auth0User)

/user/select [POST]

This will select the current user.

### Example {#selectuser-example}
```dart
import 'package:core_openapi/api.dart';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication\<OAuth\>**('auth0').accessToken = 'YOUR_ACCESS_TOKEN';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication\<OAuth\>**('auth0').accessToken = 'YOUR_ACCESS_TOKEN';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication\<OAuth\>**('auth0').accessToken = 'YOUR_ACCESS_TOKEN';

final api_instance = UserApi();
final auth0User = Auth0User(); // Auth0User | 

try {
    final result = api_instance.selectUser(auth0User);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->selectUser: $e\n');
}
```

### Parameters {#selectuser-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth0User** | [**Auth0User**](../models/Auth0User) |  | [optional] 

### Return type {#selectuser-return-type}

[**UserProfile**](../models/UserProfile)

### Authorization {#selectuser-authorization}



### HTTP request headers {#selectuser-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **streamUser** {#streamuser}
> UserProfile streamUser()

/user/stream [WS]

Provides a WebSocket connection that streams user data.

### Example {#streamuser-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = UserApi();

try {
    final result = api_instance.streamUser();
    print(result);
} catch (e) {
    print('Exception when calling UserApi->streamUser: $e\n');
}
```

### Parameters {#streamuser-parameters}
This endpoint does not need any parameter.

### Return type {#streamuser-return-type}

[**UserProfile**](../models/UserProfile)

### Authorization {#streamuser-authorization}

No authorization required

### HTTP request headers {#streamuser-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **updateUser** {#updateuser}
> UserProfile updateUser(userProfile)

/user/update [POST]

This will update a specific user in the database.

### Example {#updateuser-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = UserApi();
final userProfile = UserProfile(); // UserProfile | 

try {
    final result = api_instance.updateUser(userProfile);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->updateUser: $e\n');
}
```

### Parameters {#updateuser-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | [**UserProfile**](../models/UserProfile) |  | [optional] 

### Return type {#updateuser-return-type}

[**UserProfile**](../models/UserProfile)

### Authorization {#updateuser-authorization}

No authorization required

### HTTP request headers {#updateuser-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **userBetaStatus** {#userbetastatus}
> UserBetaStatus userBetaStatus(userBetaStatus)

/user/beta/status [POST]

This will be an endpoint to give access or remove access immediately from a given user.(isomorphic from the given provider)

### Example {#userbetastatus-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = UserApi();
final userBetaStatus = UserBetaStatus(); // UserBetaStatus | 

try {
    final result = api_instance.userBetaStatus(userBetaStatus);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->userBetaStatus: $e\n');
}
```

### Parameters {#userbetastatus-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBetaStatus** | [**UserBetaStatus**](../models/UserBetaStatus) |  | [optional] 

### Return type {#userbetastatus-return-type}

[**UserBetaStatus**](../models/UserBetaStatus)

### Authorization {#userbetastatus-authorization}

No authorization required

### HTTP request headers {#userbetastatus-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **userProviders** {#userproviders}
> ReturnedUserProfile userProviders()

Your GET endpoint

This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.

### Example {#userproviders-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = UserApi();

try {
    final result = api_instance.userProviders();
    print(result);
} catch (e) {
    print('Exception when calling UserApi->userProviders: $e\n');
}
```

### Parameters {#userproviders-parameters}
This endpoint does not need any parameter.

### Return type {#userproviders-return-type}

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### Authorization {#userproviders-authorization}

No authorization required

### HTTP request headers {#userproviders-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **userSnapshot** {#usersnapshot}
> ReturnedUserProfile userSnapshot()

/user [GET]

This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.

### Example {#usersnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = UserApi();

try {
    final result = api_instance.userSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling UserApi->userSnapshot: $e\n');
}
```

### Parameters {#usersnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#usersnapshot-return-type}

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### Authorization {#usersnapshot-authorization}

No authorization required

### HTTP request headers {#usersnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **userUpdateVanity** {#userupdatevanity}
> UserProfile userUpdateVanity(userProfile)

/user/update/vanity [POST]

This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.

### Example {#userupdatevanity-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = UserApi();
final userProfile = UserProfile(); // UserProfile | This will take an update userProfile, with the updated vanity name!

try {
    final result = api_instance.userUpdateVanity(userProfile);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->userUpdateVanity: $e\n');
}
```

### Parameters {#userupdatevanity-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | [**UserProfile**](../models/UserProfile) | This will take an update userProfile, with the updated vanity name! | [optional] 

### Return type {#userupdatevanity-return-type}

[**UserProfile**](../models/UserProfile)

### Authorization {#userupdatevanity-authorization}

No authorization required

### HTTP request headers {#userupdatevanity-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

