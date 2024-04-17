---
title: Share API | Dart SDK
---

# Share API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**shareScoresIncrement**](ShareApi#sharescoresincrement) | **POST** /share/\{share\}/scores/increment | '/share/\{share\}/scores/increment' [POST]
[**shareSnapshot**](ShareApi#sharesnapshot) | **GET** /share/\{share\} | /share/\{share\}
[**shareUpdate**](ShareApi#shareupdate) | **POST** /share/update | /share/update [POST]


## **shareScoresIncrement** {#sharescoresincrement}
> shareScoresIncrement(share, seededScoreIncrement)

'/share/\{share\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#sharescoresincrement-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ShareApi();
final share = share_example; // String | Share id
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.shareScoresIncrement(share, seededScoreIncrement);
} catch (e) {
    print('Exception when calling ShareApi->shareScoresIncrement: $e\n');
}
```

### Parameters {#sharescoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **String** | Share id | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement) |  | [optional] 

### Return type {#sharescoresincrement-return-type}

void (empty response body)

### Authorization {#sharescoresincrement-authorization}

No authorization required

### HTTP request headers {#sharescoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **shareSnapshot** {#sharesnapshot}
> Share shareSnapshot(share, transferables)

/share/\{share\}

Get the snapshot of a specific share.

### Example {#sharesnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ShareApi();
final share = share_example; // String | Share id
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.shareSnapshot(share, transferables);
    print(result);
} catch (e) {
    print('Exception when calling ShareApi->shareSnapshot: $e\n');
}
```

### Parameters {#sharesnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **String** | Share id | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#sharesnapshot-return-type}

[**Share**](../models/Share)

### Authorization {#sharesnapshot-authorization}

No authorization required

### HTTP request headers {#sharesnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **shareUpdate** {#shareupdate}
> Share shareUpdate(transferables, share)

/share/update [POST]

This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!

### Example {#shareupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ShareApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final share = Share(); // Share | This is the Share that needs to be updated.

try {
    final result = api_instance.shareUpdate(transferables, share);
    print(result);
} catch (e) {
    print('Exception when calling ShareApi->shareUpdate: $e\n');
}
```

### Parameters {#shareupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **share** | [**Share**](../models/Share) | This is the Share that needs to be updated. | [optional] 

### Return type {#shareupdate-return-type}

[**Share**](../models/Share)

### Authorization {#shareupdate-authorization}

No authorization required

### HTTP request headers {#shareupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

