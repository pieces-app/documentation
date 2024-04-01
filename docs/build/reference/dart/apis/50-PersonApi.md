# Person API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personScoresIncrement**](PersonApi#personscoresincrement) | **POST** /person/\{person\}/scores/increment | '/person/\{person\}/scores/increment' [POST]
[**personSnapshot**](PersonApi#personsnapshot) | **GET** /person/\{person\} | /person/\{person\} [GET]
[**updatePerson**](PersonApi#updateperson) | **POST** /person/update | /person/update [POST]


## **personScoresIncrement**
> personScoresIncrement(person, seededScoreIncrement)

'/person/\{person\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = PersonApi();
final person = person_example; // String | This is a uuid that represents a person.
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.personScoresIncrement(person, seededScoreIncrement);
} catch (e) {
    print('Exception when calling PersonApi->personScoresIncrement: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String**| This is a uuid that represents a person. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **personSnapshot**
> Person personSnapshot(person, transferables)

/person/\{person\} [GET]

This will get a snapshot of a specific person

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = PersonApi();
final person = person_example; // String | This is a uuid that represents a person.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.personSnapshot(person, transferables);
    print(result);
} catch (e) {
    print('Exception when calling PersonApi->personSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String**| This is a uuid that represents a person. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Person**](../models/Person)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **updatePerson**
> Person updatePerson(transferables, person)

/person/update [POST]

This will update a specific person

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = PersonApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final person = Person(); // Person | 

try {
    final result = api_instance.updatePerson(transferables, person);
    print(result);
} catch (e) {
    print('Exception when calling PersonApi->updatePerson: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **person** | [**Person**](../models/Person)|  | [optional] 

### Return type

[**Person**](../models/Person)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



