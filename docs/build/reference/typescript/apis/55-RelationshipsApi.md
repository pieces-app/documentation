# Relationships API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**relationshipsSnapshot**](RelationshipsApi#relationshipssnapshot) | **GET** /relationships


## **relationshipsSnapshot**
> Relationships relationshipsSnapshot()

This will reurn all of the relationships that exists within your pieces db.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.RelationshipsApi(configuration);

apiInstance.relationshipsSnapshot().then((data: Relationships) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**Relationships**](../models/Relationships)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


