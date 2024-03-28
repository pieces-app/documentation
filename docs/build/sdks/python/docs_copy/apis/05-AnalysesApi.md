# Analyses API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyses_snapshot**](AnalysesApi#analyses_snapshot) | **GET** /analyses | Your GET endpoint


## **analyses_snapshot**
> Analyses analyses_snapshot(transferables=transferables)

Your GET endpoint

This will get a snapshot of all of your analyses, that are all attached to formats. An analysis can optionally have an codeAnalysis or an optional imageAnalysis.

### Example


```python
import pieces_os_client
from pieces_os_client.models.analyses import Analyses
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
    api_instance = pieces_os_client.AnalysesApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # Your GET endpoint
        api_response = api_instance.analyses_snapshot(transferables=transferables)
        print("The response of AnalysesApi->analyses_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysesApi->analyses_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Analyses**](../models/Analyses)

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



