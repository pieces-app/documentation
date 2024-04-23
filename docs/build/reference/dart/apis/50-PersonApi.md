---
title: Person API | Dart SDK
---

# Person API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**personAssociateWorkstreamSummary**](PersonApi#personassociateworkstreamsummary) | **POST** /person/\{person\}/workstream_summaries/associate/\{workstream_summary\} | /person/\{person\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**personDisassociateWorkstreamSummary**](PersonApi#persondisassociateworkstreamsummary) | **POST** /person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} | /person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**personScoresIncrement**](PersonApi#personscoresincrement) | **POST** /person/\{person\}/scores/increment | '/person/\{person\}/scores/increment' [POST]
[**personSnapshot**](PersonApi#personsnapshot) | **GET** /person/\{person\} | /person/\{person\} [GET]
[**updatePerson**](PersonApi#updateperson) | **POST** /person/update | /person/update [POST]


## **personAssociateWorkstreamSummary** {#personassociateworkstreamsummary}
> personAssociateWorkstreamSummary(person, workstreamSummary)

/person/\{person\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a person with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#personassociateworkstreamsummary-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = PersonApi();
final person = person_example; // String | This is a uuid that represents a person.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.personAssociateWorkstreamSummary(person, workstreamSummary);
} catch (e) {
    print('Exception when calling PersonApi->personAssociateWorkstreamSummary: $e\n');
}
```

### Parameters {#personassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String** | This is a uuid that represents a person. | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#personassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#personassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#personassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **personDisassociateWorkstreamSummary** {#persondisassociateworkstreamsummary}
> personDisassociateWorkstreamSummary(person, workstreamSummary)

/person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an person from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#persondisassociateworkstreamsummary-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = PersonApi();
final person = person_example; // String | This is a uuid that represents a person.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.personDisassociateWorkstreamSummary(person, workstreamSummary);
} catch (e) {
    print('Exception when calling PersonApi->personDisassociateWorkstreamSummary: $e\n');
}
```

### Parameters {#persondisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String** | This is a uuid that represents a person. | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#persondisassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#persondisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#persondisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **personScoresIncrement** {#personscoresincrement}
> personScoresIncrement(person, seededScoreIncrement)

'/person/\{person\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#personscoresincrement-example}
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

### Parameters {#personscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String** | This is a uuid that represents a person. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement) |  | [optional] 

### Return type {#personscoresincrement-return-type}

void (empty response body)

### Authorization {#personscoresincrement-authorization}

No authorization required

### HTTP request headers {#personscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **personSnapshot** {#personsnapshot}
> Person personSnapshot(person, transferables)

/person/\{person\} [GET]

This will get a snapshot of a specific person

### Example {#personsnapshot-example}
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

### Parameters {#personsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String** | This is a uuid that represents a person. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#personsnapshot-return-type}

[**Person**](../models/Person)

### Authorization {#personsnapshot-authorization}

No authorization required

### HTTP request headers {#personsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **updatePerson** {#updateperson}
> Person updatePerson(transferables, person)

/person/update [POST]

This will update a specific person

### Example {#updateperson-example}
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

### Parameters {#updateperson-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **person** | [**Person**](../models/Person) |  | [optional] 

### Return type {#updateperson-return-type}

[**Person**](../models/Person)

### Authorization {#updateperson-authorization}

No authorization required

### HTTP request headers {#updateperson-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

