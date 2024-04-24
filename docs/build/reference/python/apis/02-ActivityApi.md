---
title: Activity API | Python SDK
---

# Activity API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**activities_specific_activity_snapshot**](ActivityApi#activities_specific_activity_snapshot) | **GET** /activity/\{activity\} | /activity/\{activity\} [GET]
[**activity_identifiers_snapshot**](ActivityApi#activity_identifiers_snapshot) | **GET** /activity/identifiers | /activity/identifiers [GET]
[**activity_update**](ActivityApi#activity_update) | **POST** /activity/update | /activity/update [POST]


## **activities_specific_activity_snapshot** {#activities_specific_activity_snapshot}
> Activity activities_specific_activity_snapshot(activity, transferables=transferables)

/activity/\{activity\} [GET]

This will attempt to get a specific activity.

### Example {#activities_specific_activity_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.activity import Activity
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ActivityApi(api_client)
    activity = 'activity_example' # str | This is a specific activity uuid.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /activity/\{activity\} [GET]
        api_response = api_instance.activities_specific_activity_snapshot(activity, transferables=transferables)
        print("The response of ActivityApi->activities_specific_activity_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityApi->activities_specific_activity_snapshot: %s\n" % e)
```



### Parameters {#activities_specific_activity_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | **str**| This is a specific activity uuid. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#activities_specific_activity_snapshot-return-type}

[**Activity**](../models/Activity)

### Authorization {#activities_specific_activity_snapshot-authorization}

No authorization required

### HTTP request headers {#activities_specific_activity_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#activities_specific_activity_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Activity was not found. |  -  |
**500** | Internal Server Error |  -  |

## **activity_identifiers_snapshot** {#activity_identifiers_snapshot}
> FlattenedActivities activity_identifiers_snapshot(pseudo=pseudo, activity_filter_enum=activity_filter_enum)

/activity/identifiers [GET]

This is going to return all the identifiers of the activity event in order of most recent -> oldest.

### Example {#activity_identifiers_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.flattened_activities import FlattenedActivities
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ActivityApi(api_client)
    pseudo = True # bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    activity_filter_enum = 'activity_filter_enum_example' # str | This is an ActivityFilterEnum as a optional filter. Ensure you update ActivityFilterEnum if this is updated. (optional)

    try:
        # /activity/identifiers [GET]
        api_response = api_instance.activity_identifiers_snapshot(pseudo=pseudo, activity_filter_enum=activity_filter_enum)
        print("The response of ActivityApi->activity_identifiers_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityApi->activity_identifiers_snapshot: %s\n" % e)
```



### Parameters {#activity_identifiers_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 
 **activity_filter_enum** | **str**| This is an ActivityFilterEnum as a optional filter. Ensure you update ActivityFilterEnum if this is updated. | [optional] 

### Return type {#activity_identifiers_snapshot-return-type}

[**FlattenedActivities**](../models/FlattenedActivities)

### Authorization {#activity_identifiers_snapshot-authorization}

No authorization required

### HTTP request headers {#activity_identifiers_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#activity_identifiers_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **activity_update** {#activity_update}
> Activity activity_update(transferables=transferables, activity=activity)

/activity/update [POST]

this will update a specific activity.

### Example {#activity_update-example}


```python
import pieces_os_client
from pieces_os_client.models.activity import Activity
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ActivityApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    activity = pieces_os_client.Activity() # Activity |  (optional)

    try:
        # /activity/update [POST]
        api_response = api_instance.activity_update(transferables=transferables, activity=activity)
        print("The response of ActivityApi->activity_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityApi->activity_update: %s\n" % e)
```



### Parameters {#activity_update-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **activity** | [**Activity**](../models/Activity)|  | [optional] 

### Return type {#activity_update-return-type}

[**Activity**](../models/Activity)

### Authorization {#activity_update-authorization}

No authorization required

### HTTP request headers {#activity_update-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#activity_update-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

