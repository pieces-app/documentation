# OS API

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**link_provider**](OSApi#link_provider) | **POST** /os/link_provider | /os/link_provider [POST]
[**os_device_information**](OSApi#os_device_information) | **GET** /os/device/information | /os/device/information [GET]
[**os_restart**](OSApi#os_restart) | **GET** /os/restart | Your GET endpoint
[**os_update_check**](OSApi#os_update_check) | **POST** /os/update/check | /os/update/check [POST]
[**pick_files**](OSApi#pick_files) | **POST** /os/files/pick | /os/files/pick [POST]
[**pick_folders**](OSApi#pick_folders) | **POST** /os/folders/pick | /os/folders/pick [POST]
[**sign_into_os**](OSApi#sign_into_os) | **POST** /os/sign_in | 
[**sign_out_of_os**](OSApi#sign_out_of_os) | **POST** /os/sign_out | /os/sign_out [POST]


## **link_provider**
> ReturnedUserProfile link_provider(seeded_external_provider=seeded_external_provider)

/os/link_provider [POST]

This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.

### Example


```python
import pieces_os_client
from pieces_os_client.models.returned_user_profile import ReturnedUserProfile
from pieces_os_client.models.seeded_external_provider import SeededExternalProvider
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.OSApi(api_client)
    seeded_external_provider = pieces_os_client.SeededExternalProvider() # SeededExternalProvider |  (optional)

    try:
        # /os/link_provider [POST]
        api_response = api_instance.link_provider(seeded_external_provider=seeded_external_provider)
        print("The response of OSApi->link_provider:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OSApi->link_provider: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seeded_external_provider** | [**SeededExternalProvider**](../models/SeededExternalProvider)|  | [optional] 

### Return type

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized, this means your user is not authenticated |  -  |
**500** | Internal Server Error |  -  |



## **os_device_information**
> OSDeviceInformationReturnable os_device_information()

/os/device/information [GET]

This will get information related to your specific device.

### Example


```python
import pieces_os_client
from pieces_os_client.models.os_device_information_returnable import OSDeviceInformationReturnable
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.OSApi(api_client)

    try:
        # /os/device/information [GET]
        api_response = api_instance.os_device_information()
        print("The response of OSApi->os_device_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OSApi->os_device_information: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OSDeviceInformationReturnable**](../models/OSDeviceInformationReturnable)

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



## **os_restart**
> os_restart()

Your GET endpoint

This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.

### Example


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.OSApi(api_client)

    try:
        # Your GET endpoint
        api_instance.os_restart()
    except Exception as e:
        print("Exception when calling OSApi->os_restart: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **os_update_check**
> CheckedOSUpdate os_update_check(unchecked_os_update=unchecked_os_update)

/os/update/check [POST]

This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc

### Example


```python
import pieces_os_client
from pieces_os_client.models.checked_os_update import CheckedOSUpdate
from pieces_os_client.models.unchecked_os_update import UncheckedOSUpdate
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.OSApi(api_client)
    unchecked_os_update = pieces_os_client.UncheckedOSUpdate() # UncheckedOSUpdate |  (optional)

    try:
        # /os/update/check [POST]
        api_response = api_instance.os_update_check(unchecked_os_update=unchecked_os_update)
        print("The response of OSApi->os_update_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OSApi->os_update_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unchecked_os_update** | [**UncheckedOSUpdate**](../models/UncheckedOSUpdate)|  | [optional] 

### Return type

[**CheckedOSUpdate**](../models/CheckedOSUpdate)

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



## **pick_files**
> List[str] pick_files(file_picker_input=file_picker_input)

/os/files/pick [POST]

This will trigger a filer picker and return the string paths of the files that were selected.

### Example


```python
import pieces_os_client
from pieces_os_client.models.file_picker_input import FilePickerInput
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.OSApi(api_client)
    file_picker_input = pieces_os_client.FilePickerInput() # FilePickerInput |  (optional)

    try:
        # /os/files/pick [POST]
        api_response = api_instance.pick_files(file_picker_input=file_picker_input)
        print("The response of OSApi->pick_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OSApi->pick_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_picker_input** | [**FilePickerInput**](../models/FilePickerInput)|  | [optional] 

### Return type

**List[str]**

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



## **pick_folders**
> List[str] pick_folders()

/os/folders/pick [POST]

This will trigger a folder picker and return the string paths of the folders that were selected.

### Example


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.OSApi(api_client)

    try:
        # /os/folders/pick [POST]
        api_response = api_instance.pick_folders()
        print("The response of OSApi->pick_folders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OSApi->pick_folders: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

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



## **sign_into_os**
> UserProfile sign_into_os()



A trigger that launches a Sign into OS Server

### Example


```python
import pieces_os_client
from pieces_os_client.models.user_profile import UserProfile
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.OSApi(api_client)

    try:
        # 
        api_response = api_instance.sign_into_os()
        print("The response of OSApi->sign_into_os:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OSApi->sign_into_os: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **sign_out_of_os**
> Users sign_out_of_os()

/os/sign_out [POST]

A trigger that signs out a user from the OS

### Example


```python
import pieces_os_client
from pieces_os_client.models.users import Users
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.OSApi(api_client)

    try:
        # /os/sign_out [POST]
        api_response = api_instance.sign_out_of_os()
        print("The response of OSApi->sign_out_of_os:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OSApi->sign_out_of_os: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



