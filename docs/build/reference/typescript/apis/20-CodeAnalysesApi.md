---
title: CodeAnalyses API | TypeScript SDK
---

# CodeAnalyses API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**codeAnalysesSnapshot**](CodeAnalysesApi#codeanalysessnapshot) | **GET** /code_analyses | Your GET endpoint


## **codeAnalysesSnapshot** {#codeanalysessnapshot}
> CodeAnalyses codeAnalysesSnapshot()

This will get a snapshot of all of your code analyses, a code analysis is attached to an analysis.

### Example {#codeanalysessnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.CodeAnalysesApi(configuration)

apiInstance.codeAnalysesSnapshot().then((data: CodeAnalyses) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#codeanalysessnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#codeanalysessnapshot-return-type}

[**CodeAnalyses**](../models/CodeAnalyses)

### HTTP request headers {#codeanalysessnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#codeanalysessnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


