---
title: Hint API | Dart SDK
---

# Hint API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**hintScoresIncrement**](HintApi#hintscoresincrement) | **POST** /hint/\{hint\}/scores/increment | '/hint/\{hint\}/scores/increment' [POST]
[**hintSpecificHintSnapshot**](HintApi#hintspecifichintsnapshot) | **GET** /hint/\{hint\} | /hint/\{hint\} [POST]
[**hintUpdate**](HintApi#hintupdate) | **POST** /hint/update | /hint/update [POST]


## **hintScoresIncrement** {#hintscoresincrement}
> hintScoresIncrement(hint, seededScoreIncrement)

'/hint/\{hint\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#hintscoresincrement-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = HintApi();
final hint = hint_example; // String | This is a specific hint uuid
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.hintScoresIncrement(hint, seededScoreIncrement);
} catch (e) {
    print('Exception when calling HintApi->hintScoresIncrement: $e\n');
}
```

### Parameters {#hintscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **String** | This is a specific hint uuid | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement) |  | [optional] 

### Return type {#hintscoresincrement-return-type}

void (empty response body)

### Authorization {#hintscoresincrement-authorization}

No authorization required

### HTTP request headers {#hintscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **hintSpecificHintSnapshot** {#hintspecifichintsnapshot}
> Hint hintSpecificHintSnapshot(hint)

/hint/\{hint\} [POST]

This will get a snapshot of a specific hint.

### Example {#hintspecifichintsnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = HintApi();
final hint = hint_example; // String | This is a specific hint uuid

try {
    final result = api_instance.hintSpecificHintSnapshot(hint);
    print(result);
} catch (e) {
    print('Exception when calling HintApi->hintSpecificHintSnapshot: $e\n');
}
```

### Parameters {#hintspecifichintsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **String** | This is a specific hint uuid | 

### Return type {#hintspecifichintsnapshot-return-type}

[**Hint**](../models/Hint)

### Authorization {#hintspecifichintsnapshot-authorization}

No authorization required

### HTTP request headers {#hintspecifichintsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **hintUpdate** {#hintupdate}
> Hint hintUpdate(hint)

/hint/update [POST]

This will update a specific hint.

### Example {#hintupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = HintApi();
final hint = Hint(); // Hint | 

try {
    final result = api_instance.hintUpdate(hint);
    print(result);
} catch (e) {
    print('Exception when calling HintApi->hintUpdate: $e\n');
}
```

### Parameters {#hintupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | [**Hint**](../models/Hint) |  | [optional] 

### Return type {#hintupdate-return-type}

[**Hint**](../models/Hint)

### Authorization {#hintupdate-authorization}

No authorization required

### HTTP request headers {#hintupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

