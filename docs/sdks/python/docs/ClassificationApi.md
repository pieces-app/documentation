# Classification API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert_generic_classification**](ClassificationApi#convert_generic_classification) | **POST** /classification/generic/convert | Convert Generic Classification


## **convert_generic_classification**
> SeededFormat convert_generic_classification(seeded_format=seeded_format)

Convert Generic Classification

This endpoint converts on a best effort basis from one generic format to another, i.e. from Code to HLJS 

### Example


```python
import pieces_os_client
from pieces_os_client.models.seeded_format import SeededFormat
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
    api_instance = pieces_os_client.ClassificationApi(api_client)
    seeded_format = pieces_os_client.SeededFormat() # SeededFormat | This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified  (optional)

    try:
        # Convert Generic Classification
        api_response = api_instance.convert_generic_classification(seeded_format=seeded_format)
        print("The response of ClassificationApi->convert_generic_classification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassificationApi->convert_generic_classification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seeded_format** | [**SeededFormat**](SeededFormat)| This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified  | [optional] 

### Return type

[**SeededFormat**](SeededFormat)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - The SeededFormat that was successfully converted to the rendering format that was specified. |  -  |
**500** | Internal Server Error |  -  |
**501** | Generic Classification Conversion Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

