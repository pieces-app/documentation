---
title: Relationships API | Dart SDK
---

# Relationships API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationshipsSnapshot**](RelationshipsApi#relationshipssnapshot) | **GET** /relationships | /relationships [GET]


## **relationshipsSnapshot** {#relationshipssnapshot}
> Relationships relationshipsSnapshot()

/relationships [GET]

This will return all of the relationships that exists within your pieces db.

### Example {#relationshipssnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = RelationshipsApi();

try {
    final result = api_instance.relationshipsSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling RelationshipsApi->relationshipsSnapshot: $e\n');
}
```

### Parameters {#relationshipssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#relationshipssnapshot-return-type}

[**Relationships**](../models/Relationships)

### Authorization {#relationshipssnapshot-authorization}

No authorization required

### HTTP request headers {#relationshipssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

