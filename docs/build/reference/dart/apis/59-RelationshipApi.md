---
title: Relationship API | Dart SDK
---

# Relationship API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationshipsSpecificRelationshipSnapshot**](RelationshipApi#relationshipsspecificrelationshipsnapshot) | **GET** /relationship/\{relationship\} | /relationship/\{relationship\} [GET]


## **relationshipsSpecificRelationshipSnapshot** {#relationshipsspecificrelationshipsnapshot}
> Relationship relationshipsSpecificRelationshipSnapshot(relationship)

/relationship/\{relationship\} [GET]

This will return a single relationship object.

### Example {#relationshipsspecificrelationshipsnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = RelationshipApi();
final relationship = relationship_example; // String | this is a specific relationship uuid.

try {
    final result = api_instance.relationshipsSpecificRelationshipSnapshot(relationship);
    print(result);
} catch (e) {
    print('Exception when calling RelationshipApi->relationshipsSpecificRelationshipSnapshot: $e\n');
}
```

### Parameters {#relationshipsspecificrelationshipsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship** | **String** | this is a specific relationship uuid. | 

### Return type {#relationshipsspecificrelationshipsnapshot-return-type}

[**Relationship**](../models/Relationship)

### Authorization {#relationshipsspecificrelationshipsnapshot-authorization}

No authorization required

### HTTP request headers {#relationshipsspecificrelationshipsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

