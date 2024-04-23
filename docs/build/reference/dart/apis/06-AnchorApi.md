---
title: Anchor API | Dart SDK
---

# Anchor API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorAssociateWorkstreamSummary**](AnchorApi#anchorassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} | /anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**anchorDisassociateWorkstreamSummary**](AnchorApi#anchordisassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} | /anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**anchorRename**](AnchorApi#anchorrename) | **POST** /anchor/\{anchor\}/rename | /anchor/\{anchor\}/rename [POST]
[**anchorScoresIncrement**](AnchorApi#anchorscoresincrement) | **POST** /anchor/\{anchor\}/scores/increment | '/anchor/\{anchor\}/scores/increment' [POST]
[**anchorSpecificAnchorSnapshot**](AnchorApi#anchorspecificanchorsnapshot) | **GET** /anchor/\{anchor\} | /anchor/\{anchor\} [GET]
[**anchorUpdate**](AnchorApi#anchorupdate) | **POST** /anchor/update | /anchor/update [POST]


## **anchorAssociateWorkstreamSummary** {#anchorassociateworkstreamsummary}
> anchorAssociateWorkstreamSummary(anchor, workstreamSummary)

/anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a anchor with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#anchorassociateworkstreamsummary-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorApi();
final anchor = anchor_example; // String | This is the specific uuid of an anchor.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.anchorAssociateWorkstreamSummary(anchor, workstreamSummary);
} catch (e) {
    print('Exception when calling AnchorApi->anchorAssociateWorkstreamSummary: $e\n');
}
```

### Parameters {#anchorassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String** | This is the specific uuid of an anchor. | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#anchorassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#anchorassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#anchorassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **anchorDisassociateWorkstreamSummary** {#anchordisassociateworkstreamsummary}
> anchorDisassociateWorkstreamSummary(anchor, workstreamSummary)

/anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a anchor from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#anchordisassociateworkstreamsummary-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorApi();
final anchor = anchor_example; // String | This is the specific uuid of an anchor.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.anchorDisassociateWorkstreamSummary(anchor, workstreamSummary);
} catch (e) {
    print('Exception when calling AnchorApi->anchorDisassociateWorkstreamSummary: $e\n');
}
```

### Parameters {#anchordisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String** | This is the specific uuid of an anchor. | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#anchordisassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#anchordisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#anchordisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **anchorRename** {#anchorrename}
> Anchor anchorRename(anchor, transferables)

/anchor/\{anchor\}/rename [POST]

This will rename a specific anchor.

### Example {#anchorrename-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorApi();
final anchor = anchor_example; // String | This is the specific uuid of an anchor.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.anchorRename(anchor, transferables);
    print(result);
} catch (e) {
    print('Exception when calling AnchorApi->anchorRename: $e\n');
}
```

### Parameters {#anchorrename-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String** | This is the specific uuid of an anchor. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#anchorrename-return-type}

[**Anchor**](../models/Anchor)

### Authorization {#anchorrename-authorization}

No authorization required

### HTTP request headers {#anchorrename-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **anchorScoresIncrement** {#anchorscoresincrement}
> anchorScoresIncrement(anchor, seededScoreIncrement)

'/anchor/\{anchor\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#anchorscoresincrement-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorApi();
final anchor = anchor_example; // String | This is the specific uuid of an anchor.
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.anchorScoresIncrement(anchor, seededScoreIncrement);
} catch (e) {
    print('Exception when calling AnchorApi->anchorScoresIncrement: $e\n');
}
```

### Parameters {#anchorscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String** | This is the specific uuid of an anchor. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement) |  | [optional] 

### Return type {#anchorscoresincrement-return-type}

void (empty response body)

### Authorization {#anchorscoresincrement-authorization}

No authorization required

### HTTP request headers {#anchorscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **anchorSpecificAnchorSnapshot** {#anchorspecificanchorsnapshot}
> Anchor anchorSpecificAnchorSnapshot(anchor, transferables)

/anchor/\{anchor\} [GET]

This will get a snapshot of a single anchor.

### Example {#anchorspecificanchorsnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorApi();
final anchor = anchor_example; // String | This is the specific uuid of an anchor.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.anchorSpecificAnchorSnapshot(anchor, transferables);
    print(result);
} catch (e) {
    print('Exception when calling AnchorApi->anchorSpecificAnchorSnapshot: $e\n');
}
```

### Parameters {#anchorspecificanchorsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String** | This is the specific uuid of an anchor. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#anchorspecificanchorsnapshot-return-type}

[**Anchor**](../models/Anchor)

### Authorization {#anchorspecificanchorsnapshot-authorization}

No authorization required

### HTTP request headers {#anchorspecificanchorsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **anchorUpdate** {#anchorupdate}
> Anchor anchorUpdate(transferables, anchor)

/anchor/update [POST]

This will update a specific anchor.

### Example {#anchorupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final anchor = Anchor(); // Anchor | 

try {
    final result = api_instance.anchorUpdate(transferables, anchor);
    print(result);
} catch (e) {
    print('Exception when calling AnchorApi->anchorUpdate: $e\n');
}
```

### Parameters {#anchorupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **anchor** | [**Anchor**](../models/Anchor) |  | [optional] 

### Return type {#anchorupdate-return-type}

[**Anchor**](../models/Anchor)

### Authorization {#anchorupdate-authorization}

No authorization required

### HTTP request headers {#anchorupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

