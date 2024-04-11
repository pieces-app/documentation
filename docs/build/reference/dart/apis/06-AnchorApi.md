# Anchor API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**anchorAssociateWorkstreamSummary**](AnchorApi#anchorassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\}
[**anchorDisassociateWorkstreamSummary**](AnchorApi#anchordisassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\}
[**anchorRename**](AnchorApi#anchorrename) | **POST** /anchor/\{anchor\}/rename
[**anchorScoresIncrement**](AnchorApi#anchorscoresincrement) | **POST** /anchor/\{anchor\}/scores/increment
[**anchorSpecificAnchorSnapshot**](AnchorApi#anchorspecificanchorsnapshot) | **GET** /anchor/\{anchor\}
[**anchorUpdate**](AnchorApi#anchorupdate) | **POST** /anchor/update


## **anchorAssociateWorkstreamSummary** {#anchorassociateworkstreamsummary}
> anchorAssociateWorkstreamSummary(anchor, workstreamSummary)

/anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a anchor with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String**| This is the specific uuid of an anchor. | 
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **anchorDisassociateWorkstreamSummary** {#anchordisassociateworkstreamsummary}
> anchorDisassociateWorkstreamSummary(anchor, workstreamSummary)

/anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a anchor from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String**| This is the specific uuid of an anchor. | 
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **anchorRename** {#anchorrename}
> Anchor anchorRename(anchor, transferables)

/anchor/\{anchor\}/rename [POST]

This will rename a specific anchor.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String**| This is the specific uuid of an anchor. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Anchor**](../models/Anchor)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **anchorScoresIncrement** {#anchorscoresincrement}
> anchorScoresIncrement(anchor, seededScoreIncrement)

'/anchor/\{anchor\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String**| This is the specific uuid of an anchor. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **anchorSpecificAnchorSnapshot** {#anchorspecificanchorsnapshot}
> Anchor anchorSpecificAnchorSnapshot(anchor, transferables)

/anchor/\{anchor\} [GET]

This will get a snapshot of a single anchor.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String**| This is the specific uuid of an anchor. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Anchor**](../models/Anchor)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **anchorUpdate** {#anchorupdate}
> Anchor anchorUpdate(transferables, anchor)

/anchor/update [POST]

This will update a specific anchor.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **anchor** | [**Anchor**](../models/Anchor)|  | [optional] 

### Return type

[**Anchor**](../models/Anchor)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



