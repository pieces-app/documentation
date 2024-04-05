# Application API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationUpdate**](ApplicationApi#applicationupdate) | **POST** /application/update | /application/update [GET]


## **applicationUpdate**
> Application applicationUpdate()

This is an endpoint for updating an application.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ApplicationApi(configuration);

let body:.ApplicationApiApplicationUpdateRequest = {
    // Application (optional)
    application: ,
};

apiInstance.applicationUpdate(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **Application**|  |


### Return type

**Application**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




