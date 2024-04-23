---
title: Sensitive API | Dart SDK
---

# Sensitive API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensitiveScoresIncrement**](SensitiveApi#sensitivescoresincrement) | **POST** /sensitive/\{sensitive\}/scores/increment | '/sensitive/\{sensitive\}/scores/increment' [POST]
[**sensitiveSnapshot**](SensitiveApi#sensitivesnapshot) | **GET** /sensitive/\{sensitive\} | /sensitive/\{sensitive\} [GET]
[**updateSensitive**](SensitiveApi#updatesensitive) | **POST** /sensitive/update | /sensitive/update [POST]


## **sensitiveScoresIncrement** {#sensitivescoresincrement}
> sensitiveScoresIncrement(sensitive, seededScoreIncrement)

'/sensitive/\{sensitive\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#sensitivescoresincrement-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = SensitiveApi();
final sensitive = sensitive_example; // String | This is a uuid that represents a sensitive.
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.sensitiveScoresIncrement(sensitive, seededScoreIncrement);
} catch (e) {
    print('Exception when calling SensitiveApi->sensitiveScoresIncrement: $e\n');
}
```

### Parameters {#sensitivescoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **String** | This is a uuid that represents a sensitive. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement) |  | [optional] 

### Return type {#sensitivescoresincrement-return-type}

void (empty response body)

### Authorization {#sensitivescoresincrement-authorization}

No authorization required

### HTTP request headers {#sensitivescoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **sensitiveSnapshot** {#sensitivesnapshot}
> Sensitive sensitiveSnapshot(sensitive)

/sensitive/\{sensitive\} [GET]

This will get a specific sensitive via the sensitive uuid.

### Example {#sensitivesnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = SensitiveApi();
final sensitive = sensitive_example; // String | 

try {
    final result = api_instance.sensitiveSnapshot(sensitive);
    print(result);
} catch (e) {
    print('Exception when calling SensitiveApi->sensitiveSnapshot: $e\n');
}
```

### Parameters {#sensitivesnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **String** |  | 

### Return type {#sensitivesnapshot-return-type}

[**Sensitive**](../models/Sensitive)

### Authorization {#sensitivesnapshot-authorization}

No authorization required

### HTTP request headers {#sensitivesnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **updateSensitive** {#updatesensitive}
> Sensitive updateSensitive(sensitive)

/sensitive/update [POST]

This will update a specific sensitive

### Example {#updatesensitive-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = SensitiveApi();
final sensitive = Sensitive(); // Sensitive | 

try {
    final result = api_instance.updateSensitive(sensitive);
    print(result);
} catch (e) {
    print('Exception when calling SensitiveApi->updateSensitive: $e\n');
}
```

### Parameters {#updatesensitive-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | [**Sensitive**](../models/Sensitive) |  | [optional] 

### Return type {#updatesensitive-return-type}

[**Sensitive**](../models/Sensitive)

### Authorization {#updatesensitive-authorization}

No authorization required

### HTTP request headers {#updatesensitive-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

