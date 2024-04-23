---
title: Sensitives API | Dart SDK
---

# Sensitives API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensitivesCreateNewSensitive**](SensitivesApi#sensitivescreatenewsensitive) | **POST** /sensitives/create | /sensitives/create [POST]
[**sensitivesDeleteSensitive**](SensitivesApi#sensitivesdeletesensitive) | **POST** /sensitives/\{sensitive\}/delete | /sensitives/\{sensitive\}/delete [POST]
[**sensitivesSnapshot**](SensitivesApi#sensitivessnapshot) | **GET** /sensitives | /sensitives [GET]


## **sensitivesCreateNewSensitive** {#sensitivescreatenewsensitive}
> Sensitive sensitivesCreateNewSensitive(seededSensitive)

/sensitives/create [POST]

This will create a new sensitive model.

### Example {#sensitivescreatenewsensitive-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = SensitivesApi();
final seededSensitive = SeededSensitive(); // SeededSensitive | 

try {
    final result = api_instance.sensitivesCreateNewSensitive(seededSensitive);
    print(result);
} catch (e) {
    print('Exception when calling SensitivesApi->sensitivesCreateNewSensitive: $e\n');
}
```

### Parameters {#sensitivescreatenewsensitive-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededSensitive** | [**SeededSensitive**](../models/SeededSensitive) |  | [optional] 

### Return type {#sensitivescreatenewsensitive-return-type}

[**Sensitive**](../models/Sensitive)

### Authorization {#sensitivescreatenewsensitive-authorization}

No authorization required

### HTTP request headers {#sensitivescreatenewsensitive-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **sensitivesDeleteSensitive** {#sensitivesdeletesensitive}
> sensitivesDeleteSensitive(sensitive)

/sensitives/\{sensitive\}/delete [POST]

This will delete a sensitive based on the sensitive uuid.

### Example {#sensitivesdeletesensitive-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = SensitivesApi();
final sensitive = sensitive_example; // String | This is a uuid that represents a sensitive.

try {
    api_instance.sensitivesDeleteSensitive(sensitive);
} catch (e) {
    print('Exception when calling SensitivesApi->sensitivesDeleteSensitive: $e\n');
}
```

### Parameters {#sensitivesdeletesensitive-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **String** | This is a uuid that represents a sensitive. | 

### Return type {#sensitivesdeletesensitive-return-type}

void (empty response body)

### Authorization {#sensitivesdeletesensitive-authorization}

No authorization required

### HTTP request headers {#sensitivesdeletesensitive-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **sensitivesSnapshot** {#sensitivessnapshot}
> Sensitives sensitivesSnapshot()

/sensitives [GET]

This will get a snapshot of all of the sensitives.

### Example {#sensitivessnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = SensitivesApi();

try {
    final result = api_instance.sensitivesSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling SensitivesApi->sensitivesSnapshot: $e\n');
}
```

### Parameters {#sensitivessnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#sensitivessnapshot-return-type}

[**Sensitives**](../models/Sensitives)

### Authorization {#sensitivessnapshot-authorization}

No authorization required

### HTTP request headers {#sensitivessnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

