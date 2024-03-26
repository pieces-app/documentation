# Application API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_update**](ApplicationApi#application_update) | **POST** /application/update | /application/update [GET]


## **application_update**
> Application application_update(application=application)

/application/update [GET]

This is an endpoint for updating an application.

### Example


```python
import pieces_os_client
from pieces_os_client.models.application import Application
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
    api_instance = pieces_os_client.ApplicationApi(api_client)
    application = pieces_os_client.Application() # Application |  (optional)

    try:
        # /application/update [GET]
        api_response = api_instance.application_update(application=application)
        print("The response of ApplicationApi->application_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [**Application**](Application)|  | [optional] 

### Return type

[**Application**](Application)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



