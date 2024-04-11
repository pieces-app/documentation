# User API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**clear_user**](UserApi#clear_user) | **POST** /user/clear
[**refresh_user**](UserApi#refresh_user) | **GET** /user/refresh
[**select_user**](UserApi#select_user) | **POST** /user/select
[**stream_user**](UserApi#stream_user) | **GET** /user/stream
[**update_user**](UserApi#update_user) | **POST** /user/update
[**user_beta_status**](UserApi#user_beta_status) | **POST** /user/beta/status
[**user_providers**](UserApi#user_providers) | **GET** /user/providers
[**user_snapshot**](UserApi#user_snapshot) | **GET** /user
[**user_update_vanity**](UserApi#user_update_vanity) | **POST** /user/update/vanity


## **clear_user** {#clear_user}
> clear_user()

/user/clear

An endpoint to clear the current user. 

### Example


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.UserApi(api_client)

    try:
        # /user/clear
        api_instance.clear_user()
    except Exception as e:
        print("Exception when calling UserApi->clear_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameters.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |



## **refresh_user** {#refresh_user}
> UserProfile refresh_user()

/user/refresh [GET]

This will refresh a user.

### Example


```python
import pieces_os_client
from pieces_os_client.models.user_profile import UserProfile
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.UserApi(api_client)

    try:
        # /user/refresh [GET]
        api_response = api_instance.refresh_user()
        print("The response of UserApi->refresh_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->refresh_user: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **select_user** {#select_user}
> UserProfile select_user(auth0_user=auth0_user)

/user/select [POST]

This will select the current user.

### Example

* OAuth Authentication (auth0):
* OAuth Authentication (auth0):
* OAuth Authentication (auth0):

```python
import pieces_os_client
from pieces_os_client.models.auth0_user import Auth0User
from pieces_os_client.models.user_profile import UserProfile
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.UserApi(api_client)
    auth0_user = pieces_os_client.Auth0User() # Auth0User |  (optional)

    try:
        # /user/select [POST]
        api_response = api_instance.select_user(auth0_user=auth0_user)
        print("The response of UserApi->select_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->select_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth0_user** | [**Auth0User**](../models/Auth0User)|  | [optional] 

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization



### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **stream_user** {#stream_user}
> UserProfile stream_user()

/user/stream [WS]

Provides a WebSocket connection that streams user data.

### Example


```python
import pieces_os_client
from pieces_os_client.models.user_profile import UserProfile
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.UserApi(api_client)

    try:
        # /user/stream [WS]
        api_response = api_instance.stream_user()
        print("The response of UserApi->stream_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->stream_user: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **update_user** {#update_user}
> UserProfile update_user(user_profile=user_profile)

/user/update [POST]

This will update a specific user in the database.

### Example


```python
import pieces_os_client
from pieces_os_client.models.user_profile import UserProfile
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.UserApi(api_client)
    user_profile = pieces_os_client.UserProfile() # UserProfile |  (optional)

    try:
        # /user/update [POST]
        api_response = api_instance.update_user(user_profile=user_profile)
        print("The response of UserApi->update_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->update_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_profile** | [**UserProfile**](../models/UserProfile)|  | [optional] 

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **user_beta_status** {#user_beta_status}
> UserBetaStatus user_beta_status(user_beta_status=user_beta_status)

/user/beta/status [POST]

This will be an endpoint to give access or remove access immediately from a given user.(isomorphic from the given provider)

### Example


```python
import pieces_os_client
from pieces_os_client.models.user_beta_status import UserBetaStatus
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.UserApi(api_client)
    user_beta_status = pieces_os_client.UserBetaStatus() # UserBetaStatus |  (optional)

    try:
        # /user/beta/status [POST]
        api_response = api_instance.user_beta_status(user_beta_status=user_beta_status)
        print("The response of UserApi->user_beta_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->user_beta_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_beta_status** | [**UserBetaStatus**](../models/UserBetaStatus)|  | [optional] 

### Return type

[**UserBetaStatus**](../models/UserBetaStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to change the beta status |  -  |



## **user_providers** {#user_providers}
> ReturnedUserProfile user_providers()

Your GET endpoint

This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.

### Example


```python
import pieces_os_client
from pieces_os_client.models.returned_user_profile import ReturnedUserProfile
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.UserApi(api_client)

    try:
        # Your GET endpoint
        api_response = api_instance.user_providers()
        print("The response of UserApi->user_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->user_providers: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**501** | Not Implemented |  -  |



## **user_snapshot** {#user_snapshot}
> ReturnedUserProfile user_snapshot()

/user [GET]

This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.

### Example


```python
import pieces_os_client
from pieces_os_client.models.returned_user_profile import ReturnedUserProfile
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.UserApi(api_client)

    try:
        # /user [GET]
        api_response = api_instance.user_snapshot()
        print("The response of UserApi->user_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->user_snapshot: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **user_update_vanity** {#user_update_vanity}
> UserProfile user_update_vanity(user_profile=user_profile)

/user/update/vanity [POST]

This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.

### Example


```python
import pieces_os_client
from pieces_os_client.models.user_profile import UserProfile
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.UserApi(api_client)
    user_profile = pieces_os_client.UserProfile() # UserProfile | This will take an update userProfile, with the updated vanity name! (optional)

    try:
        # /user/update/vanity [POST]
        api_response = api_instance.user_update_vanity(user_profile=user_profile)
        print("The response of UserApi->user_update_vanity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->user_update_vanity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_profile** | [**UserProfile**](../models/UserProfile)| This will take an update userProfile, with the updated vanity name! | [optional] 

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | The original dns record was not found, please wait for cloud connectivity to fully connect. |  -  |
**409** | Conflict, This means that we were unable to update the username because it was already taken. |  -  |
**500** | Unable to create a username. Internal Server Error. |  -  |
**511** | Network Authentication Required, Cannot Update the Vanityname of the user because the user is either not signed in or in not connected to the cloud. |  -  |



