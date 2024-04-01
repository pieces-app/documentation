# Relationship API

## Load the API package
```dart
import 'package:pieces_os_client/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationshipsSpecificRelationshipSnapshot**](RelationshipApi#relationshipsspecificrelationshipsnapshot) | **GET** /relationship/\{relationship\} | /relationship/\{relationship\} [GET]


## **relationshipsSpecificRelationshipSnapshot**
> Relationship relationshipsSpecificRelationshipSnapshot(relationship)

/relationship/\{relationship\} [GET]

This will return a single relationship object.

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = RelationshipApi();
final relationship = relationship_example; // String | this is a specific relationship uuid.

try {
    final result = api_instance.relationshipsSpecificRelationshipSnapshot(relationship);
    print(result);
} catch (e) {
    print('Exception when calling RelationshipApi->relationshipsSpecificRelationshipSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship** | **String**| this is a specific relationship uuid. | 

### Return type

[**Relationship**](../models/Relationship)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



