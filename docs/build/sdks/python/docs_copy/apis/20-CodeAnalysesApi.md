# CodeAnalyses API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**code_analyses_snapshot**](CodeAnalysesApi#code_analyses_snapshot) | **GET** /code_analyses | Your GET endpoint


## **code_analyses_snapshot**
> CodeAnalyses code_analyses_snapshot()

Your GET endpoint

This will get a snapshot of all of your code analyses, a code analysis is attached to an analysis.

### Example


```python
import pieces_os_client
from pieces_os_client.models.code_analyses import CodeAnalyses
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
    api_instance = pieces_os_client.CodeAnalysesApi(api_client)

    try:
        # Your GET endpoint
        api_response = api_instance.code_analyses_snapshot()
        print("The response of CodeAnalysesApi->code_analyses_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodeAnalysesApi->code_analyses_snapshot: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CodeAnalyses**](../models/CodeAnalyses)

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



