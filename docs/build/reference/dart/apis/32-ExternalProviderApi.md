# ExternalProvider API

## Load the API package
```dart
import 'package:pieces_os_client/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProviderApiKeyCreate**](ExternalProviderApi#externalproviderapikeycreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProviderApiKeyDelete**](ExternalProviderApi#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProviderApiKeyUpdate**](ExternalProviderApi#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **externalProviderApiKeyCreate**
> CreatedExternalProviderApiKey externalProviderApiKeyCreate(precreatedExternalProviderApiKey)

/external_provider/api_key/create [POST]

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = ExternalProviderApi();
final precreatedExternalProviderApiKey = PrecreatedExternalProviderApiKey(); // PrecreatedExternalProviderApiKey | 

try {
    final result = api_instance.externalProviderApiKeyCreate(precreatedExternalProviderApiKey);
    print(result);
} catch (e) {
    print('Exception when calling ExternalProviderApi->externalProviderApiKeyCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreatedExternalProviderApiKey** | [**PrecreatedExternalProviderApiKey**](PrecreatedExternalProviderApiKey)|  | [optional] 

### Return type

[**CreatedExternalProviderApiKey**](CreatedExternalProviderApiKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **externalProviderApiKeyDelete**
> DeletedExternalProviderApiKey externalProviderApiKeyDelete(predeletedExternalProviderApiKey)

/external_provider/api_key/delete [POST]

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = ExternalProviderApi();
final predeletedExternalProviderApiKey = PredeletedExternalProviderApiKey(); // PredeletedExternalProviderApiKey | 

try {
    final result = api_instance.externalProviderApiKeyDelete(predeletedExternalProviderApiKey);
    print(result);
} catch (e) {
    print('Exception when calling ExternalProviderApi->externalProviderApiKeyDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeletedExternalProviderApiKey** | [**PredeletedExternalProviderApiKey**](PredeletedExternalProviderApiKey)|  | [optional] 

### Return type

[**DeletedExternalProviderApiKey**](DeletedExternalProviderApiKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **externalProviderApiKeyUpdate**
> UpdatedExternalProviderApiKey externalProviderApiKeyUpdate(preupdatedExternalProviderApiKey)

/external_provider/api_key/update [POST]

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = ExternalProviderApi();
final preupdatedExternalProviderApiKey = PreupdatedExternalProviderApiKey(); // PreupdatedExternalProviderApiKey | 

try {
    final result = api_instance.externalProviderApiKeyUpdate(preupdatedExternalProviderApiKey);
    print(result);
} catch (e) {
    print('Exception when calling ExternalProviderApi->externalProviderApiKeyUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdatedExternalProviderApiKey** | [**PreupdatedExternalProviderApiKey**](PreupdatedExternalProviderApiKey)|  | [optional] 

### Return type

[**UpdatedExternalProviderApiKey**](UpdatedExternalProviderApiKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



