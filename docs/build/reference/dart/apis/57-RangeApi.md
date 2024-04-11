# Range API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**rangeAssociateConversationGroundingTemporalRangeWorkstreams**](RangeApi#rangeassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\}
[**rangeAssociateWorkstreamSummary**](RangeApi#rangeassociateworkstreamsummary) | **POST** /range/\{range\}/workstream_summaries/associate/\{workstream_summary\}
[**rangeDisassociateConversationGroundingTemporalRangeWorkstreams**](RangeApi#rangedisassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\}
[**rangeDisassociateWorkstreamSummary**](RangeApi#rangedisassociateworkstreamsummary) | **POST** /range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\}
[**rangeScoresIncrement**](RangeApi#rangescoresincrement) | **POST** /range/\{range\}/scores/increment
[**rangeUpdate**](RangeApi#rangeupdate) | **POST** /range/update
[**rangesSpecificRangeSnapshot**](RangeApi#rangesspecificrangesnapshot) | **GET** /range/\{range\}


## **rangeAssociateConversationGroundingTemporalRangeWorkstreams** {#rangeassociateconversationgroundingtemporalrangeworkstreams}
> rangeAssociateConversationGroundingTemporalRangeWorkstreams(range, conversation)

/range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} [POST]

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
 - **Accept**: application/json



## **rangeAssociateWorkstreamSummary** {#rangeassociateworkstreamsummary}
> rangeAssociateWorkstreamSummary(range, workstreamSummary)

/range/\{range\}/workstream_summaries/associate/\{workstream_summary\} [POST]

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
 - **Accept**: application/json



## **rangeDisassociateConversationGroundingTemporalRangeWorkstreams** {#rangedisassociateconversationgroundingtemporalrangeworkstreams}
> rangeDisassociateConversationGroundingTemporalRangeWorkstreams(range, conversation)

/range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} [POST]

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
 - **Accept**: application/json



## **rangeDisassociateWorkstreamSummary** {#rangedisassociateworkstreamsummary}
> rangeDisassociateWorkstreamSummary(range, workstreamSummary)

/range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

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
 - **Accept**: application/json



## **rangeScoresIncrement** {#rangescoresincrement}
> rangeScoresIncrement(range, seededScoreIncrement)

'/range/\{range\}/scores/increment' [POST]

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
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



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
 **range** | [**Range**](../models/Range)|  | [optional] 

### Return type

[**Range**](../models/Range)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **rangesSpecificRangeSnapshot** {#rangesspecificrangesnapshot}
> Range rangesSpecificRangeSnapshot(range)

/range/\{range\} [GET]

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

[**Range**](../models/Range)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



