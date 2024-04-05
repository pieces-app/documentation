# Classification API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertGenericClassification**](ClassificationApi#convertgenericclassification) | **POST** /classification/generic/convert | Convert Generic Classification


## **convertGenericClassification**
> SeededFormat convertGenericClassification()

This endpoint converts on a best effort basis from one generic format to another, i.e. from Code to HLJS 

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ClassificationApi(configuration);

let body:.ClassificationApiConvertGenericClassificationRequest = {
    // SeededFormat | This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified  (optional)
    seededFormat: ,
};

apiInstance.convertGenericClassification(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededFormat** | **SeededFormat**| This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified  |


### Return type

**SeededFormat**

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

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)


