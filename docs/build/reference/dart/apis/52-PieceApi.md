# Piece API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**htmlShare**](PieceApi#htmlshare) | **GET** / | / [GET]


## **htmlShare** {#htmlshare}
> String htmlShare(p)

/ [GET]

This is a cloud only Api. This will get a preview of your publically accessble Piece.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = PieceApi();
final p = p_example; // String | this is the a query param, that a shortened version of the share.

try {
    final result = api_instance.htmlShare(p);
    print(result);
} catch (e) {
    print('Exception when calling PieceApi->htmlShare: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **p** | **String**| this is the a query param, that a shortened version of the share. | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html



