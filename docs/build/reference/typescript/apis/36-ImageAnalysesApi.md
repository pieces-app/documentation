# ImageAnalyses API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**imageAnalysesSnapshot**](ImageAnalysesApi#imageanalysessnapshot) | **GET** /image_analyses


## **imageAnalysesSnapshot**
> ImageAnalyses imageAnalysesSnapshot()

This will get a snapshot of all of your code analyses, a code analysis is attached to an image analysis.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ImageAnalysesApi(configuration);

const body: Pieces.ImageAnalysesSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.imageAnalysesSnapshot(body).then((data: ImageAnalyses) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**ImageAnalyses**](../models/ImageAnalyses)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


