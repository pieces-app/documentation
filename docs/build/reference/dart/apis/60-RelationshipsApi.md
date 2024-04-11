# Relationships API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**relationshipsSnapshot**](RelationshipsApi#relationshipssnapshot) | **GET** /relationships


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

[**Relationships**](../models/Relationships)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



