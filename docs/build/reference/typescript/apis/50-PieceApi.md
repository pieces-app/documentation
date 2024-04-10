# Piece API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**htmlShare**](PieceApi#htmlshare) | **GET** /


## **htmlShare**
> string htmlShare()

This is a cloud only Api. This will get a preview of your publically accessble Piece.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PieceApi(configuration);

const body: Pieces.HtmlShareRequest = {
    // string | this is the a query param, that a shortened version of the share.
    p: p_example,
};

apiInstance.htmlShare(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **p** | [**string**] | this is the a query param, that a shortened version of the share. | defaults to undefined


### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


