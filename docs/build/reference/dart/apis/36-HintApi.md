# Hint API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**hintScoresIncrement**](HintApi#hintscoresincrement) | **POST** /hint/\{hint\}/scores/increment
[**hintSpecificHintSnapshot**](HintApi#hintspecifichintsnapshot) | **GET** /hint/\{hint\}
[**hintUpdate**](HintApi#hintupdate) | **POST** /hint/update


## **hintScoresIncrement** {#hintscoresincrement}
> hintScoresIncrement(hint, seededScoreIncrement)

'/hint/\{hint\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **String**| This is a specific hint uuid | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **hintSpecificHintSnapshot** {#hintspecifichintsnapshot}
> Hint hintSpecificHintSnapshot(hint)

/hint/\{hint\} [POST]

This will get a snapshot of a specific hint.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **String**| This is a specific hint uuid | 

### Return type

[**Hint**](../models/Hint)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **hintUpdate** {#hintupdate}
> Hint hintUpdate(hint)

/hint/update [POST]

This will update a specific hint.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | [**Hint**](../models/Hint)|  | [optional] 

### Return type

[**Hint**](../models/Hint)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



