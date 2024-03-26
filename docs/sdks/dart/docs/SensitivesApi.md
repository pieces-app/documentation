# Sensitives API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensitivesCreateNewSensitive**](SensitivesApi#sensitivescreatenewsensitive) | **POST** /sensitives/create | /sensitives/create [POST]
[**sensitivesDeleteSensitive**](SensitivesApi#sensitivesdeletesensitive) | **POST** /sensitives/\{sensitive\}/delete | /sensitives/\{sensitive\}/delete [POST]
[**sensitivesSnapshot**](SensitivesApi#sensitivessnapshot) | **GET** /sensitives | /sensitives [GET]


## **sensitivesCreateNewSensitive**
> Sensitive sensitivesCreateNewSensitive(seededSensitive)

/sensitives/create [POST]

This will create a new sensitive model.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededSensitive** | [**SeededSensitive**](SeededSensitive)|  | [optional] 

### Return type

[**Sensitive**](Sensitive)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **sensitivesDeleteSensitive**
> sensitivesDeleteSensitive(sensitive)

/sensitives/\{sensitive\}/delete [POST]

This will delete a sensitive based on the sensitive uuid.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **String**| This is a uuid that represents a sensitive. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **sensitivesSnapshot**
> Sensitives sensitivesSnapshot()

/sensitives [GET]

This will get a snapshot of all of the sensitives.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Sensitives**](Sensitives)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



