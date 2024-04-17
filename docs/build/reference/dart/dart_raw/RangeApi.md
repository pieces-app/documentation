---
title: core_openapi.api.RangeApi | Dart SDK
---

# core_openapi.api.RangeApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rangeAssociateConversationGroundingTemporalRangeWorkstreams**](RangeApi.md#rangeassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/{range}/conversations/grounding/temporal_range/workstreams/associate/{conversation} | /range/{range}/conversations/grounding/temporal_range/workstreams/associate/{conversation} [POST]
[**rangeAssociateWorkstreamSummary**](RangeApi.md#rangeassociateworkstreamsummary) | **POST** /range/{range}/workstream_summaries/associate/{workstream_summary} | /range/{range}/workstream_summaries/associate/{workstream_summary} [POST]
[**rangeDisassociateConversationGroundingTemporalRangeWorkstreams**](RangeApi.md#rangedisassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/{range}/conversations/grounding/temporal_range/workstreams/disassociate/{conversation} | /range/{range}/conversations/grounding/temporal_range/workstreams/disassociate/{conversation} [POST]
[**rangeDisassociateWorkstreamSummary**](RangeApi.md#rangedisassociateworkstreamsummary) | **POST** /range/{range}/workstream_summaries/disassociate/{workstream_summary} | /range/{range}/workstream_summaries/disassociate/{workstream_summary} [POST]
[**rangeScoresIncrement**](RangeApi.md#rangescoresincrement) | **POST** /range/{range}/scores/increment | '/range/{range}/scores/increment' [POST]
[**rangeUpdate**](RangeApi.md#rangeupdate) | **POST** /range/update | /range/update [POST]
[**rangesSpecificRangeSnapshot**](RangeApi.md#rangesspecificrangesnapshot) | **GET** /range/{range} | /range/{range} [GET]


## **rangeAssociateConversationGroundingTemporalRangeWorkstreams** {#rangeassociateconversationgroundingtemporalrangeworkstreams}
> rangeAssociateConversationGroundingTemporalRangeWorkstreams(range, conversation)

/range/{range}/conversations/grounding/temporal_range/workstreams/associate/{conversation} [POST]

This will associate a range with a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangeApi();
final range = range_example; // String | This is a identifier that is used to identify a specific range.
final conversation = conversation_example; // String | This is the uuid of a conversation.

try {
    api_instance.rangeAssociateConversationGroundingTemporalRangeWorkstreams(range, conversation);
} catch (e) {
    print('Exception when calling RangeApi->rangeAssociateConversationGroundingTemporalRangeWorkstreams: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| This is a identifier that is used to identify a specific range. | 
 **conversation** | **String**| This is the uuid of a conversation. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **rangeAssociateWorkstreamSummary** {#rangeassociateworkstreamsummary}
> rangeAssociateWorkstreamSummary(range, workstreamSummary)

/range/{range}/workstream_summaries/associate/{workstream_summary} [POST]

This will associate a range with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangeApi();
final range = range_example; // String | This is a identifier that is used to identify a specific range.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.rangeAssociateWorkstreamSummary(range, workstreamSummary);
} catch (e) {
    print('Exception when calling RangeApi->rangeAssociateWorkstreamSummary: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| This is a identifier that is used to identify a specific range. | 
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **rangeDisassociateConversationGroundingTemporalRangeWorkstreams** {#rangedisassociateconversationgroundingtemporalrangeworkstreams}
> rangeDisassociateConversationGroundingTemporalRangeWorkstreams(range, conversation)

/range/{range}/conversations/grounding/temporal_range/workstreams/disassociate/{conversation} [POST]

This will enable us to disassociate a range from a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangeApi();
final range = range_example; // String | This is a identifier that is used to identify a specific range.
final conversation = conversation_example; // String | This is the uuid of a conversation.

try {
    api_instance.rangeDisassociateConversationGroundingTemporalRangeWorkstreams(range, conversation);
} catch (e) {
    print('Exception when calling RangeApi->rangeDisassociateConversationGroundingTemporalRangeWorkstreams: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| This is a identifier that is used to identify a specific range. | 
 **conversation** | **String**| This is the uuid of a conversation. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **rangeDisassociateWorkstreamSummary** {#rangedisassociateworkstreamsummary}
> rangeDisassociateWorkstreamSummary(range, workstreamSummary)

/range/{range}/workstream_summaries/disassociate/{workstream_summary} [POST]

This will enable us to disassociate a range from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangeApi();
final range = range_example; // String | This is a identifier that is used to identify a specific range.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.rangeDisassociateWorkstreamSummary(range, workstreamSummary);
} catch (e) {
    print('Exception when calling RangeApi->rangeDisassociateWorkstreamSummary: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| This is a identifier that is used to identify a specific range. | 
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **rangeScoresIncrement** {#rangescoresincrement}
> rangeScoresIncrement(range, seededScoreIncrement)

'/range/{range}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangeApi();
final range = range_example; // String | This is a identifier that is used to identify a specific range.
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.rangeScoresIncrement(range, seededScoreIncrement);
} catch (e) {
    print('Exception when calling RangeApi->rangeScoresIncrement: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| This is a identifier that is used to identify a specific range. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **rangeUpdate** {#rangeupdate}
> Range rangeUpdate(range)

/range/update [POST]

This will update a specific range.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangeApi();
final range = Range(); // Range | 

try {
    final result = api_instance.rangeUpdate(range);
    print(result);
} catch (e) {
    print('Exception when calling RangeApi->rangeUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**Range**](Range.md)|  | [optional] 

### Return type

[**Range**](Range.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **rangesSpecificRangeSnapshot** {#rangesspecificrangesnapshot}
> Range rangesSpecificRangeSnapshot(range)

/range/{range} [GET]

This will get a snapshot of a single range.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = RangeApi();
final range = range_example; // String | This is a identifier that is used to identify a specific range.

try {
    final result = api_instance.rangesSpecificRangeSnapshot(range);
    print(result);
} catch (e) {
    print('Exception when calling RangeApi->rangesSpecificRangeSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| This is a identifier that is used to identify a specific range. | 

### Return type

[**Range**](Range.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

