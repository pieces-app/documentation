---
title: Linkify API | Dart SDK
---

# Linkify API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkify**](LinkifyApi#linkify) | **POST** /linkify | /linkify [POST]
[**linkifyMultiple**](LinkifyApi#linkifymultiple) | **POST** /linkify/multiple | /linkify/multiple [POST]
[**linkifyShareRevoke**](LinkifyApi#linkifysharerevoke) | **POST** /linkify/\{share\}/revoke | [POST} /linkify/\{share\}/revoke


## **linkify** {#linkify}
> Shares linkify(linkify)

/linkify [POST]



### Example {#linkify-example}
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

### Parameters {#linkify-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkify** | [**Linkify**](../models/Linkify) |  | [optional] 

### Return type {#linkify-return-type}

[**Shares**](../models/Shares)

### Authorization {#linkify-authorization}

No authorization required

### HTTP request headers {#linkify-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **linkifyMultiple** {#linkifymultiple}
> Shares linkifyMultiple(linkifyMultiple)

/linkify/multiple [POST]

- assumption that you have already backed up the asset's that you are sending to this endpoint.(b/c the assets are ids.)

### Example {#linkifymultiple-example}
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

### Parameters {#linkifymultiple-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkifyMultiple** | [**LinkifyMultiple**](../models/LinkifyMultiple) |  | [optional] 

### Return type {#linkifymultiple-return-type}

[**Shares**](../models/Shares)

### Authorization {#linkifymultiple-authorization}

No authorization required

### HTTP request headers {#linkifymultiple-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **linkifyShareRevoke** {#linkifysharerevoke}
> String linkifyShareRevoke(share)

[POST} /linkify/\{share\}/revoke

This will revoke a link.

### Example {#linkifysharerevoke-example}
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

### Parameters {#linkifysharerevoke-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **String** |  | 

### Return type {#linkifysharerevoke-return-type}

**String**

### Authorization {#linkifysharerevoke-authorization}

No authorization required

### HTTP request headers {#linkifysharerevoke-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

