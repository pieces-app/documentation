---
title: Ranges API | Dart SDK
---

# Ranges API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rangesCreateNewRange**](RangesApi#rangescreatenewrange) | **POST** /ranges/create | /ranges/create [POST]
[**rangesDeleteSpecificRange**](RangesApi#rangesdeletespecificrange) | **POST** /ranges/\{range\}/delete | /ranges/\{range\}/delete [POST]
[**rangesSnapshot**](RangesApi#rangessnapshot) | **GET** /ranges | /ranges [GET]


## **rangesCreateNewRange** {#rangescreatenewrange}
> Range rangesCreateNewRange(seededRange)

/ranges/create [POST]

This will create a new Range in the database.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangesApi();
final seededRange = SeededRange(); // SeededRange | 

try {
    final result = api_instance.rangesCreateNewRange(seededRange);
    print(result);
} catch (e) {
    print('Exception when calling RangesApi->rangesCreateNewRange: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededRange** | [**SeededRange**](../models/SeededRange)|  | [optional] 

### Return type

[**Range**](../models/Range)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain



## **rangesDeleteSpecificRange** {#rangesdeletespecificrange}
> rangesDeleteSpecificRange(range)

/ranges/\{range\}/delete [POST]

This will delete a specific range from the database!

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangesApi();
final range = range_example; // String | This is a identifier that is used to identify a specific range.

try {
    api_instance.rangesDeleteSpecificRange(range);
} catch (e) {
    print('Exception when calling RangesApi->rangesDeleteSpecificRange: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| This is a identifier that is used to identify a specific range. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



## **rangesSnapshot** {#rangessnapshot}
> Ranges rangesSnapshot()

/ranges [GET]

This will get a snapshot of all your ranges.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangesApi();

try {
    final result = api_instance.rangesSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling RangesApi->rangesSnapshot: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Ranges**](../models/Ranges)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain



