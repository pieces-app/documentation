# Linkify API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**linkify**](LinkifyApi#linkify) | **POST** /linkify
[**linkifyMultiple**](LinkifyApi#linkifymultiple) | **POST** /linkify/multiple
[**linkifyShareRevoke**](LinkifyApi#linkifysharerevoke) | **POST** /linkify/\{share\}/revoke


## **linkify** {#linkify}
> Shares linkify(linkify)

/linkify [POST]



### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = LinkifyApi();
final linkify = Linkify(); // Linkify | 

try {
    final result = api_instance.linkify(linkify);
    print(result);
} catch (e) {
    print('Exception when calling LinkifyApi->linkify: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkify** | [**Linkify**](../models/Linkify)|  | [optional] 

### Return type

[**Shares**](../models/Shares)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **linkifyMultiple** {#linkifymultiple}
> Shares linkifyMultiple(linkifyMultiple)

/linkify/multiple [POST]

- assumption that you have already backed up the asset's that you are sending to this endpoint.(b/c the assets are ids.)

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = LinkifyApi();
final linkifyMultiple = LinkifyMultiple(); // LinkifyMultiple | 

try {
    final result = api_instance.linkifyMultiple(linkifyMultiple);
    print(result);
} catch (e) {
    print('Exception when calling LinkifyApi->linkifyMultiple: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkifyMultiple** | [**LinkifyMultiple**](../models/LinkifyMultiple)|  | [optional] 

### Return type

[**Shares**](../models/Shares)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **linkifyShareRevoke** {#linkifysharerevoke}
> String linkifyShareRevoke(share)

[POST} /linkify/\{share\}/revoke

This will revoke a link.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = LinkifyApi();
final share = share_example; // String | 

try {
    final result = api_instance.linkifyShareRevoke(share);
    print(result);
} catch (e) {
    print('Exception when calling LinkifyApi->linkifyShareRevoke: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



