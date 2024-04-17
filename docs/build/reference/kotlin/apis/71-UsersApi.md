---
title: Users API | Kotlin SDK
---

# Users API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateFromOauthToken**](#authenticatefromoauthtoken) | **POST** /users/authenticate/from_token | /users/authenticate/from_token [POST]
[**usersDisconnectUser**](#usersdisconnectuser) | **POST** /users/\{user\}/disconnect | /users/\{user\}/disconnect [POST]
[**usersSnapshot**](#userssnapshot) | **GET** /users | /users [GET]
[**usersSpecificUserSnapshot**](#usersspecificusersnapshot) | **GET** /users/\{user\} | /users/\{user\} [GET] Scoped to Users


## **authenticateFromOauthToken** {#authenticatefromoauthtoken}
> UserProfile authenticateFromOauthToken(oauthToken)

/users/authenticate/from_token [POST]

Creates a User From a oAuth Token

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Users API()
val oauthToken : OAuthToken =  // OAuthToken | 
try {
    val result : UserProfile = apiInstance.authenticateFromOauthToken(oauthToken)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Users API#authenticateFromOauthToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Users API#authenticateFromOauthToken")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthToken** | [**OAuthToken**](../models/OAuthToken)|  | [optional]

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization


Configure auth0:
    ApiClient.accessToken = ""
Configure auth0:
    ApiClient.accessToken = ""
Configure auth0:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **usersDisconnectUser** {#usersdisconnectuser}
> Users usersDisconnectUser(user)

/users/\{user\}/disconnect [POST]

Locally Removing a user for the purpose of Signing Out

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Users API()
val user : kotlin.String = user_example // kotlin.String | 
try {
    val result : Users = apiInstance.usersDisconnectUser(user)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Users API#usersDisconnectUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Users API#usersDisconnectUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **kotlin.String**|  |

### Return type

[**Users**](../models/Users)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **usersSnapshot** {#userssnapshot}
> Users usersSnapshot()

/users [GET]

this will return a snapshot of all of the users that are in the users database. TODO might want to make this internal.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Users API()
try {
    val result : Users = apiInstance.usersSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Users API#usersSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Users API#usersSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Users**](../models/Users)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **usersSpecificUserSnapshot** {#usersspecificusersnapshot}
> UserProfile usersSpecificUserSnapshot(user)

/users/\{user\} [GET] Scoped to Users

This enables the client to get the current user.  This endpoint will return a UserPRofile or will throw an error since you are sending user uid.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Users API()
val user : java.util.UUID = 497f6eca-6276-4993-bfeb-53cbbbba6f08 // java.util.UUID | The id (uuid) for a specific user.
try {
    val result : UserProfile = apiInstance.usersSpecificUserSnapshot(user)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Users API#usersSpecificUserSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Users API#usersSpecificUserSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **java.util.UUID**| The id (uuid) for a specific user. |

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

