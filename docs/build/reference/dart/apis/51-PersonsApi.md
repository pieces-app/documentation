# Persons API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**personDisassociateAsset**](PersonsApi#persondisassociateasset) | **POST** /persons/\{person\}/assets/delete/\{asset\}
[**personsCreateNewPerson**](PersonsApi#personscreatenewperson) | **POST** /persons/create
[**personsDeletePerson**](PersonsApi#personsdeleteperson) | **POST** /persons/\{person\}/delete
[**personsSnapshot**](PersonsApi#personssnapshot) | **GET** /persons


## **personDisassociateAsset** {#persondisassociateasset}
> personDisassociateAsset(person, asset)

/persons/\{person\}/assets/delete/\{asset\} [POST]

This will update both the asset and the person reference, that will remove a person from an asset(only the references).  This will NOT remove the person. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = PersonsApi();
final person = person_example; // String | This is a uuid that represents a person.
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.personDisassociateAsset(person, asset);
} catch (e) {
    print('Exception when calling PersonsApi->personDisassociateAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String**| This is a uuid that represents a person. | 
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **personsCreateNewPerson** {#personscreatenewperson}
> Person personsCreateNewPerson(transferables, seededPerson)

/persons/create [POST]

This will create a new person.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = PersonsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededPerson = SeededPerson(); // SeededPerson | 

try {
    final result = api_instance.personsCreateNewPerson(transferables, seededPerson);
    print(result);
} catch (e) {
    print('Exception when calling PersonsApi->personsCreateNewPerson: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededPerson** | [**SeededPerson**](../models/SeededPerson)|  | [optional] 

### Return type

[**Person**](../models/Person)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **personsDeletePerson** {#personsdeleteperson}
> personsDeletePerson(person)

/persons/\{person\}/delete [POST]

This will delete a specific person.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = PersonsApi();
final person = person_example; // String | This is a uuid that represents a person.

try {
    api_instance.personsDeletePerson(person);
} catch (e) {
    print('Exception when calling PersonsApi->personsDeletePerson: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String**| This is a uuid that represents a person. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **personsSnapshot** {#personssnapshot}
> Persons personsSnapshot(transferables)

/persons [GET]

This will get a snapshot of all of your people

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = PersonsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.personsSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling PersonsApi->personsSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Persons**](../models/Persons)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



