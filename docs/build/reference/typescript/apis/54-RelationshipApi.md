# Relationship API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**relationshipsSpecificRelationshipSnapshot**](RelationshipApi#relationshipsspecificrelationshipsnapshot) | **GET** /relationship/\{relationship\}


## **relationshipsSpecificRelationshipSnapshot**
> Relationship relationshipsSpecificRelationshipSnapshot()

This will return a single relationship object.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.RelationshipApi(configuration);

const body: Pieces.RelationshipsSpecificRelationshipSnapshotRequest = {
    // string | this is a specific relationship uuid.
    relationship: relationship_example,
};

apiInstance.relationshipsSpecificRelationshipSnapshot(body).then((data: Relationship) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **relationship** | [**string**] | this is a specific relationship uuid. | defaults to undefined


### Return type

[**Relationship**](../models/Relationship)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


