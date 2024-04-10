# User API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**clearUser**](#clearuser) | **POST** /user/clear
[**refreshUser**](#refreshuser) | **GET** /user/refresh
[**selectUser**](#selectuser) | **POST** /user/select
[**streamUser**](#streamuser) | **GET** /user/stream
[**updateUser**](#updateuser) | **POST** /user/update
[**userProviders**](#userproviders) | **GET** /user/providers
[**userSnapshot**](#usersnapshot) | **GET** /user
[**userUpdateVanity**](#userupdatevanity) | **POST** /user/update/vanity


<a id="clearUser"></a>
## **clearUser** {#clearuser}
> clearUser()

/user/clear

An endpoint to clear the current user. 

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

### Parameters
This endpoint does not need any parameters.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a id="refreshUser"></a>
## **refreshUser** {#refreshuser}
> UserProfile refreshUser()

/user/refresh [GET]

This will refresh a user.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

### Parameters
This endpoint does not need any parameters.

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="selectUser"></a>
## **selectUser** {#selectuser}
> UserProfile selectUser(auth0User)

/user/select [POST]

This will select the current user.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth0User** | [**Auth0User**](../models/Auth0User)|  | [optional]

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

<a id="streamUser"></a>
## **streamUser** {#streamuser}
> UserProfile streamUser()

/user/stream [GET]

This will stream in the current user, not quiet sure yet how we want to do this.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

### Parameters
This endpoint does not need any parameters.

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateUser"></a>
## **updateUser** {#updateuser}
> UserProfile updateUser(userProfile)

/user/update [POST]

This will update a specific user in the database.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

<a id="userProviders"></a>
## **userProviders** {#userproviders}
> ReturnedUserProfile userProviders()

Your GET endpoint

This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh &amp;&amp; get your access tokens to access these providers.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

### Parameters
This endpoint does not need any parameters.

### Return type

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="userSnapshot"></a>
## **userSnapshot** {#usersnapshot}
> ReturnedUserProfile userSnapshot()

/user [GET]

This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

### Parameters
This endpoint does not need any parameters.

### Return type

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="userUpdateVanity"></a>
## **userUpdateVanity** {#userupdatevanity}
> UserProfile userUpdateVanity(userProfile)

/user/update/vanity [POST]

This is a local route to update your vanityname. ie mark.pieces.cloud, where \&quot;mark\&quot; is the vanityname.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

