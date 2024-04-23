---
title: Hints API | Dart SDK
---

# Hints API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**hintsCreateNewHint**](HintsApi#hintscreatenewhint) | **POST** /hints/create | /hints/create [POST]
[**hintsDeleteSpecificHint**](HintsApi#hintsdeletespecifichint) | **POST** /hints/\{hint\}/delete | /hints/\{hint\}/delete [POST]
[**hintsSnapshot**](HintsApi#hintssnapshot) | **GET** /hints | /hints [GET]


## **hintsCreateNewHint** {#hintscreatenewhint}
> Hint hintsCreateNewHint(seededHint)

/hints/create [POST]

This will create a hint.

### Example {#hintscreatenewhint-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = HintsApi();
final seededHint = SeededHint(); // SeededHint | 

try {
    final result = api_instance.hintsCreateNewHint(seededHint);
    print(result);
} catch (e) {
    print('Exception when calling HintsApi->hintsCreateNewHint: $e\n');
}
```

### Parameters {#hintscreatenewhint-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededHint** | [**SeededHint**](../models/SeededHint) |  | [optional] 

### Return type {#hintscreatenewhint-return-type}

[**Hint**](../models/Hint)

### Authorization {#hintscreatenewhint-authorization}

No authorization required

### HTTP request headers {#hintscreatenewhint-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **hintsDeleteSpecificHint** {#hintsdeletespecifichint}
> hintsDeleteSpecificHint(hint)

/hints/\{hint\}/delete [POST]

This will delete a specific hint.

### Example {#hintsdeletespecifichint-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = HintsApi();
final hint = hint_example; // String | This is a specific hint uuid

try {
    api_instance.hintsDeleteSpecificHint(hint);
} catch (e) {
    print('Exception when calling HintsApi->hintsDeleteSpecificHint: $e\n');
}
```

### Parameters {#hintsdeletespecifichint-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **String** | This is a specific hint uuid | 

### Return type {#hintsdeletespecifichint-return-type}

void (empty response body)

### Authorization {#hintsdeletespecifichint-authorization}

No authorization required

### HTTP request headers {#hintsdeletespecifichint-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **hintsSnapshot** {#hintssnapshot}
> Hints hintsSnapshot()

/hints [GET]

This will get a snapshot of all of the hints.

### Example {#hintssnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = HintsApi();

try {
    final result = api_instance.hintsSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling HintsApi->hintsSnapshot: $e\n');
}
```

### Parameters {#hintssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#hintssnapshot-return-type}

[**Hints**](../models/Hints)

### Authorization {#hintssnapshot-authorization}

No authorization required

### HTTP request headers {#hintssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

