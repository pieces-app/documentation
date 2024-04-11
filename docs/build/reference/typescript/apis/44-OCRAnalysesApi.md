# OCRAnalyses Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocrAnalysesSnapshot**](OCRAnalysesApi#ocranalysessnapshot) | **GET** /ocr_analyses | Your GET endpoint


## **ocrAnalysesSnapshot** {#ocranalysessnapshot}
> OCRAnalyses ocrAnalysesSnapshot()

This will get a snapshot of all of your ocr analyses, an ocr analysis is attached to an image analysis.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OCRAnalysesApi(configuration)

const body: Pieces.OcrAnalysesSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.ocrAnalysesSnapshot(body).then((data: OCRAnalyses) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**OCRAnalyses**](../models/OCRAnalyses)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


