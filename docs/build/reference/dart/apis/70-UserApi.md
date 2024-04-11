# User API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**clearUser**](UserApi#clearuser) | **POST** /user/clear
[**refreshUser**](UserApi#refreshuser) | **GET** /user/refresh
[**selectUser**](UserApi#selectuser) | **POST** /user/select
[**streamUser**](UserApi#streamuser) | **GET** /user/stream
[**updateUser**](UserApi#updateuser) | **POST** /user/update
[**userBetaStatus**](UserApi#userbetastatus) | **POST** /user/beta/status
[**userProviders**](UserApi#userproviders) | **GET** /user/providers
[**userSnapshot**](UserApi#usersnapshot) | **GET** /user
[**userUpdateVanity**](UserApi#userupdatevanity) | **POST** /user/update/vanity


## **clearUser** {#clearuser}
> clearUser()

/user/clear

An endpoint to clear the current user. 

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = UserApi();

try {
    api_instance.clearUser();
} catch (e) {
    print('Exception when calling UserApi->clearUser: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



## **refreshUser** {#refreshuser}
> UserProfile refreshUser()

/user/refresh [GET]

This will refresh a user.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **selectUser** {#selectuser}
> UserProfile selectUser(auth0User)

/user/select [POST]

This will select the current user.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth0User** | [**Auth0User**](../models/Auth0User)|  | [optional] 

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization



### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **streamUser** {#streamuser}
> UserProfile streamUser()

/user/stream [WS]

Provides a WebSocket connection that streams user data.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **updateUser** {#updateuser}
> UserProfile updateUser(userProfile)

/user/update [POST]

This will update a specific user in the database.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | [**UserProfile**](../models/UserProfile)|  | [optional] 

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **userBetaStatus** {#userbetastatus}
> UserBetaStatus userBetaStatus(userBetaStatus)

/user/beta/status [POST]

This will be an endpoint to give access or remove access immediately from a given user.(isomorphic from the given provider)

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBetaStatus** | [**UserBetaStatus**](../models/UserBetaStatus)|  | [optional] 

### Return type

[**UserBetaStatus**](../models/UserBetaStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **userProviders** {#userproviders}
> ReturnedUserProfile userProviders()

Your GET endpoint

This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **userSnapshot** {#usersnapshot}
> ReturnedUserProfile userSnapshot()

/user [GET]

This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **userUpdateVanity** {#userupdatevanity}
> UserProfile userUpdateVanity(userProfile)

/user/update/vanity [POST]

This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | [**UserProfile**](../models/UserProfile)| This will take an update userProfile, with the updated vanity name! | [optional] 

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



