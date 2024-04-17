---
title: core_openapi.api.SharesApi | Dart SDK
---

# core_openapi.api.SharesApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sharesCreateNewShare**](SharesApi.md#sharescreatenewshare) | **POST** /shares/create | /shares/create [POST]
[**sharesDeleteShare**](SharesApi.md#sharesdeleteshare) | **POST** /shares/{share}/delete | /shares/{share}/delete [POST]
[**sharesSnapshot**](SharesApi.md#sharessnapshot) | **GET** /shares | /shares [GET]
[**sharesSpecificShareSnapshot**](SharesApi.md#sharesspecificsharesnapshot) | **GET** /shares/{share} | /shares/{share} [GET]


## **sharesCreateNewShare** {#sharescreatenewshare}
> Shares sharesCreateNewShare(transferables, seededShare)

/shares/create [POST]

This endpoint will accept an asset. Response here will be a Share that was created.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = SharesApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededShare = SeededShare(); // SeededShare | 

try {
    final result = api_instance.sharesCreateNewShare(transferables, seededShare);
    print(result);
} catch (e) {
    print('Exception when calling SharesApi->sharesCreateNewShare: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededShare** | [**SeededShare**](SeededShare.md)|  | [optional] 

### Return type

[**Shares**](Shares.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **sharesDeleteShare** {#sharesdeleteshare}
> String sharesDeleteShare(share)

/shares/{share}/delete [POST]

This endpoint will just take a share id(as a url param) to delete out of the shares table, will return the share id that was deleted.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = SharesApi();
final share = share_example; // String | Share id

try {
    final result = api_instance.sharesDeleteShare(share);
    print(result);
} catch (e) {
    print('Exception when calling SharesApi->sharesDeleteShare: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **String**| Share id | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **sharesSnapshot** {#sharessnapshot}
> Shares sharesSnapshot(transferables)

/shares [GET]

This will return all of your shares. A Share is an asset that you as a user decided to share with another user via link.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = SharesApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.sharesSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling SharesApi->sharesSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Shares**](Shares.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **sharesSpecificShareSnapshot** {#sharesspecificsharesnapshot}
> Share sharesSpecificShareSnapshot(share, transferables)

/shares/{share} [GET]

This is an endpoint to enable a client to access a specific share through a provided share id.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = SharesApi();
final share = share_example; // String | Share id
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.sharesSpecificShareSnapshot(share, transferables);
    print(result);
} catch (e) {
    print('Exception when calling SharesApi->sharesSpecificShareSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **String**| Share id | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Share**](Share.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

