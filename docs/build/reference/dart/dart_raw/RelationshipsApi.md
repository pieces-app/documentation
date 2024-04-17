---
title: core_openapi.api.RelationshipsApi | Dart SDK
---

# core_openapi.api.RelationshipsApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationshipsSnapshot**](RelationshipsApi.md#relationshipssnapshot) | **GET** /relationships | /relationships [GET]


## **relationshipsSnapshot** {#relationshipssnapshot}
> Relationships relationshipsSnapshot()

/relationships [GET]

This will return all of the relationships that exists within your pieces db.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Relationships**](Relationships.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

