# Connector API

## Load the API package
```dart
import 'package:pieces_os_client/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connect**](ConnectorApi#connect) | **POST** /connect | /connect [POST]
[**intention**](ConnectorApi#intention) | **POST** /\{application\}/intention | /\{application\}/intention [POST]
[**onboarded**](ConnectorApi#onboarded) | **POST** /\{application\}/onboarded | /onboarded [POST]
[**react**](ConnectorApi#react) | **POST** /\{application\}/reaction | /\{application\}/reaction [POST]
[**suggest**](ConnectorApi#suggest) | **POST** /\{application\}/suggestion | /\{application\}/suggestion [POST]
[**track**](ConnectorApi#track) | **POST** /\{application\}/track | /\{application\}/track [POST]


## **connect**
> Context connect(seededConnectorConnection)

/connect [POST]

An endpoint which abstracts a bootup/connection for a specific context

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = ConnectorApi();
final seededConnectorConnection = SeededConnectorConnection(); // SeededConnectorConnection | 

try {
    final result = api_instance.connect(seededConnectorConnection);
    print(result);
} catch (e) {
    print('Exception when calling ConnectorApi->connect: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorConnection** | [**SeededConnectorConnection**](../models/SeededConnectorConnection)|  | [optional] 

### Return type

[**Context**](../models/Context)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **intention**
> String intention(application, seededConnectorAsset)

/\{application\}/intention [POST]

This can be used to send a SeededAsset over that you may use to compair in the future.

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = ConnectorApi();
final application = application_example; // String | 
final seededConnectorAsset = SeededConnectorAsset(); // SeededConnectorAsset | 

try {
    final result = api_instance.intention(application, seededConnectorAsset);
    print(result);
} catch (e) {
    print('Exception when calling ConnectorApi->intention: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **String**|  | 
 **seededConnectorAsset** | [**SeededConnectorAsset**](../models/SeededConnectorAsset)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **onboarded**
> String onboarded(application, body)

/onboarded [POST]

A consolidation endpoint to handle the updating of an onboarding process.

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = ConnectorApi();
final application = application_example; // String | This is a uuid that represents an application
final body = bool(); // bool | Whether or not that application has been onboarded.

try {
    final result = api_instance.onboarded(application, body);
    print(result);
} catch (e) {
    print('Exception when calling ConnectorApi->onboarded: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **String**| This is a uuid that represents an application | 
 **body** | **bool**| Whether or not that application has been onboarded. | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **react**
> String react(application, reaction)

/\{application\}/reaction [POST]

This will react to the response returned from the /suggest endpoint. 

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = ConnectorApi();
final application = application_example; // String | 
final reaction = Reaction(); // Reaction | ** This body will need to be modified.

try {
    final result = api_instance.react(application, reaction);
    print(result);
} catch (e) {
    print('Exception when calling ConnectorApi->react: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **String**|  | 
 **reaction** | [**Reaction**](../models/Reaction)| ** This body will need to be modified. | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **suggest**
> Suggestion suggest(application, seededConnectorCreation)

/\{application\}/suggestion [POST]

This can and should be called everytime a snippet is coppied from an integration. IE A Jetbrains user coppies some code, then this end point can get called to weigh if we want to suggest a piece to be reused (if reuse is true we should provide asset that the user may want to use) or saved or neither.   **Note: Could potentially accept a SeededFormat for the request body if we want.  TODO potentially just make this a get endpoint. (because we are trying to retireve data.

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = ConnectorApi();
final application = application_example; // String | 
final seededConnectorCreation = SeededConnectorCreation(); // SeededConnectorCreation | This is the Snippet that we will compare to all the saved assets to determine what we want to do with it!

try {
    final result = api_instance.suggest(application, seededConnectorCreation);
    print(result);
} catch (e) {
    print('Exception when calling ConnectorApi->suggest: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **String**|  | 
 **seededConnectorCreation** | [**SeededConnectorCreation**](../models/SeededConnectorCreation)| This is the Snippet that we will compare to all the saved assets to determine what we want to do with it! | [optional] 

### Return type

[**Suggestion**](../models/Suggestion)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **track**
> String track(application, seededConnectorTracking)

/\{application\}/track [POST]

This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = ConnectorApi();
final application = application_example; // String | This is a uuid that represents an application
final seededConnectorTracking = SeededConnectorTracking(); // SeededConnectorTracking | The body is able to take in several properties 

try {
    final result = api_instance.track(application, seededConnectorTracking);
    print(result);
} catch (e) {
    print('Exception when calling ConnectorApi->track: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **String**| This is a uuid that represents an application | 
 **seededConnectorTracking** | [**SeededConnectorTracking**](../models/SeededConnectorTracking)| The body is able to take in several properties  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



