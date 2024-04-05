# Application API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationUpdate**](ApplicationApi#applicationupdate) | **POST** /application/update | /application/update [GET]


## **applicationUpdate** Deprecated: 
> Application applicationUpdate()

This is an endpoint for updating an application.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationApi(configuration);

const body: Pieces.ApplicationUpdateRequest = {
    // Application (optional)
    application: ,
};

apiInstance.applicationUpdate(body).then((data: Application) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **Application**|  |


### Return type

**Application**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




