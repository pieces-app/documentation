# Application API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**applicationUpdate**](ApplicationApi#applicationupdate) | **POST** /application/update


## **applicationUpdate**
> Application applicationUpdate()

This is an endpoint for updating an application.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

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

Name | Type | Description
------------- | ------------- | ------------- | -------------
 **application** | **Application**|  |


### Return type

[**Application**](../models/Application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


