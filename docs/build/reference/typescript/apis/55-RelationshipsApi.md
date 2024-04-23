---
title: Relationships API | TypeScript SDK
---

# Relationships API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationshipsSnapshot**](RelationshipsApi#relationshipssnapshot) | **GET** /relationships | /relationships [GET]


## **relationshipsSnapshot** {#relationshipssnapshot}
> Relationships relationshipsSnapshot()

This will return all of the relationships that exists within your pieces db.

### Example {#relationshipssnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RelationshipsApi(configuration)

apiInstance.relationshipsSnapshot().then((data: Relationships) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#relationshipssnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#relationshipssnapshot-return-type}

[**Relationships**](../models/Relationships)

### HTTP request headers {#relationshipssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#relationshipssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


