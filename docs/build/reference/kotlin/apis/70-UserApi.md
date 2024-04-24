---
title: User API | Kotlin SDK
---

# User API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearUser**](#clearuser) | **POST** /user/clear | /user/clear
[**refreshUser**](#refreshuser) | **GET** /user/refresh | /user/refresh [GET]
[**selectUser**](#selectuser) | **POST** /user/select | /user/select [POST]
[**streamUser**](#streamuser) | **GET** /user/stream | /user/stream [WS]
[**updateUser**](#updateuser) | **POST** /user/update | /user/update [POST]
[**userBetaStatus**](#userbetastatus) | **POST** /user/beta/status | /user/beta/status [POST]
[**userProviders**](#userproviders) | **GET** /user/providers | Your GET endpoint
[**userSnapshot**](#usersnapshot) | **GET** /user | /user [GET]
[**userUpdateVanity**](#userupdatevanity) | **POST** /user/update/vanity | /user/update/vanity [POST]


## **clearUser** {#clearuser}
> clearUser()

/user/clear

An endpoint to clear the current user. 

### Example {#clearuser-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UserApi()
try {
    apiInstance.clearUser()
} catch (e: ClientException) {
    println("4xx response calling UserApi#clearUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserApi#clearUser")
    e.printStackTrace()
}
```

### Parameters {#clearuser-parameters}
This endpoint does not need any parameter.

### Return type {#clearuser-return-type}

null (empty response body)

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
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UserApi()
try {
    val result : UserProfile = apiInstance.refreshUser()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserApi#refreshUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserApi#refreshUser")
    e.printStackTrace()
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
 - **Accept**: application/json

## **selectUser** {#selectuser}
> UserProfile selectUser(auth0User)

/user/select [POST]

This will select the current user.

### Example {#selectuser-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UserApi()
val auth0User : Auth0User =  // Auth0User | 
try {
    val result : UserProfile = apiInstance.selectUser(auth0User)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserApi#selectUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserApi#selectUser")
    e.printStackTrace()
}
```

### Parameters {#selectuser-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth0User** | [**Auth0User**](../models/Auth0User)|  | [optional]

### Return type {#selectuser-return-type}

[**UserProfile**](../models/UserProfile)

### Authorization {#selectuser-authorization}


Configure auth0:
    ApiClient.accessToken = ""
Configure auth0:
    ApiClient.accessToken = ""
Configure auth0:
    ApiClient.accessToken = ""

### HTTP request headers {#selectuser-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **streamUser** {#streamuser}
> UserProfile streamUser()

/user/stream [WS]

Provides a WebSocket connection that streams user data.

### Example {#streamuser-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UserApi()
try {
    val result : UserProfile = apiInstance.streamUser()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserApi#streamUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserApi#streamUser")
    e.printStackTrace()
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
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UserApi()
val userProfile : UserProfile =  // UserProfile | 
try {
    val result : UserProfile = apiInstance.updateUser(userProfile)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserApi#updateUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserApi#updateUser")
    e.printStackTrace()
}
```

### Parameters {#updateuser-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | [**UserProfile**](../models/UserProfile)|  | [optional]

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
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UserApi()
val userBetaStatus : UserBetaStatus =  // UserBetaStatus | 
try {
    val result : UserBetaStatus = apiInstance.userBetaStatus(userBetaStatus)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserApi#userBetaStatus")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserApi#userBetaStatus")
    e.printStackTrace()
}
```

### Parameters {#userbetastatus-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBetaStatus** | [**UserBetaStatus**](../models/UserBetaStatus)|  | [optional]

### Return type {#userbetastatus-return-type}

[**UserBetaStatus**](../models/UserBetaStatus)

### Authorization {#userbetastatus-authorization}

No authorization required

### HTTP request headers {#userbetastatus-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **userProviders** {#userproviders}
> ReturnedUserProfile userProviders()

Your GET endpoint

This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh &amp;&amp; get your access tokens to access these providers.

### Example {#userproviders-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UserApi()
try {
    val result : ReturnedUserProfile = apiInstance.userProviders()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserApi#userProviders")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserApi#userProviders")
    e.printStackTrace()
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
 - **Accept**: application/json

## **userSnapshot** {#usersnapshot}
> ReturnedUserProfile userSnapshot()

/user [GET]

This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.

### Example {#usersnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UserApi()
try {
    val result : ReturnedUserProfile = apiInstance.userSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserApi#userSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserApi#userSnapshot")
    e.printStackTrace()
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

This is a local route to update your vanityname. ie mark.pieces.cloud, where \&quot;mark\&quot; is the vanityname.

### Example {#userupdatevanity-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UserApi()
val userProfile : UserProfile =  // UserProfile | This will take an update userProfile, with the updated vanity name!
try {
    val result : UserProfile = apiInstance.userUpdateVanity(userProfile)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserApi#userUpdateVanity")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserApi#userUpdateVanity")
    e.printStackTrace()
}
```

### Parameters {#userupdatevanity-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | [**UserProfile**](../models/UserProfile)| This will take an update userProfile, with the updated vanity name! | [optional]

### Return type {#userupdatevanity-return-type}

[**UserProfile**](../models/UserProfile)

### Authorization {#userupdatevanity-authorization}

No authorization required

### HTTP request headers {#userupdatevanity-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

