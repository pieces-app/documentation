# Classification Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**convertGenericClassification**](ClassificationApi#convertgenericclassification) | **POST** /classification/generic/convert


## **convertGenericClassification** {#convertgenericclassification}
> SeededFormat convertGenericClassification()

This endpoint converts on a best effort basis from one generic format to another, i.e. from Code to HLJS 

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ClassificationApi(configuration)

const body: Pieces.ConvertGenericClassificationRequest = {
    // SeededFormat | This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified  (optional)
    seededFormat: ,
};

apiInstance.convertGenericClassification(body).then((data: SeededFormat) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededFormat** | **SeededFormat**| This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified  |


### Return Model type

[**SeededFormat**](../models/SeededFormat)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK - The SeededFormat that was successfully converted to the rendering format that was specified. |  -  |
**500** | Internal Server Error |  -  |
**501** | Generic Classification Conversion Not Implemented |  -  |


