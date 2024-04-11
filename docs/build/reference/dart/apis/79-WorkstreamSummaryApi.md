# WorkstreamSummary API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamSummariesSpecificWorkstreamSummarySnapshot**](WorkstreamSummaryApi#workstreamsummariesspecificworkstreamsummarysnapshot) | **GET** /workstream_summary/\{workstream_summary\} | /workstream_summary/\{workstream_summary\} [GET]
[**workstreamSummaryAssociateAnchor**](WorkstreamSummaryApi#workstreamsummaryassociateanchor) | **POST** /workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} | /workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} [POST]
[**workstreamSummaryAssociateAsset**](WorkstreamSummaryApi#workstreamsummaryassociateasset) | **POST** /workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} | /workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} [POST]
[**workstreamSummaryAssociateConversation**](WorkstreamSummaryApi#workstreamsummaryassociateconversation) | **POST** /workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} | /workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} [POST]
[**workstreamSummaryAssociatePerson**](WorkstreamSummaryApi#workstreamsummaryassociateperson) | **POST** /workstream_summary/\{workstream_summary\}/persons/associate/\{person\} | /workstream_summary/\{workstream_summary\}/persons/associate/\{person\} [POST]
[**workstreamSummaryAssociateRange**](WorkstreamSummaryApi#workstreamsummaryassociaterange) | **POST** /workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} | /workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} [POST]
[**workstreamSummaryAssociateWebsite**](WorkstreamSummaryApi#workstreamsummaryassociatewebsite) | **POST** /workstream_summary/\{workstream_summary\}/websites/associate/\{website\} | /workstream_summary/\{workstream_summary\}/websites/associate/\{website\} [POST]
[**workstreamSummaryAssociateWorkstreamEvent**](WorkstreamSummaryApi#workstreamsummaryassociateworkstreamevent) | **POST** /workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} | /workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} [POST]
[**workstreamSummaryDisassociateAnchor**](WorkstreamSummaryApi#workstreamsummarydisassociateanchor) | **POST** /workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} | /workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} [POST]
[**workstreamSummaryDisassociateAsset**](WorkstreamSummaryApi#workstreamsummarydisassociateasset) | **POST** /workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} | /workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} [POST]
[**workstreamSummaryDisassociateConversation**](WorkstreamSummaryApi#workstreamsummarydisassociateconversation) | **POST** /workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} | /workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} [POST]
[**workstreamSummaryDisassociatePerson**](WorkstreamSummaryApi#workstreamsummarydisassociateperson) | **POST** /workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} | /workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} [POST]
[**workstreamSummaryDisassociateRange**](WorkstreamSummaryApi#workstreamsummarydisassociaterange) | **POST** /workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} | /workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} [POST]
[**workstreamSummaryDisassociateWebsite**](WorkstreamSummaryApi#workstreamsummarydisassociatewebsite) | **POST** /workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} | /workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} [POST]
[**workstreamSummaryDisassociateWorkstreamEvent**](WorkstreamSummaryApi#workstreamsummarydisassociateworkstreamevent) | **POST** /workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} | /workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} [POST]
[**workstreamSummaryScoresIncrement**](WorkstreamSummaryApi#workstreamsummaryscoresincrement) | **POST** /workstream_summary/\{workstream_summary\}/scores/increment | '/workstream_summary/\{workstream_summary\}/scores/increment' [POST]
[**workstreamSummaryUpdate**](WorkstreamSummaryApi#workstreamsummaryupdate) | **POST** /workstream_summary/update | /workstream_summary/update [POST]


## **workstreamSummariesSpecificWorkstreamSummarySnapshot** {#workstreamsummariesspecificworkstreamsummarysnapshot}
> WorkstreamSummary workstreamSummariesSpecificWorkstreamSummarySnapshot(workstreamSummary, transferables)

/workstream_summary/\{workstream_summary\} [GET]

This will get a snapshot of a single workstream_summary.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.workstreamSummariesSpecificWorkstreamSummarySnapshot(workstreamSummary, transferables);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummariesSpecificWorkstreamSummarySnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**WorkstreamSummary**](../models/WorkstreamSummary)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryAssociateAnchor** {#workstreamsummaryassociateanchor}
> workstreamSummaryAssociateAnchor(workstreamSummary, anchor)

/workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} [POST]

This will associate a anchor with a workstream_summary. This will do the same thing as the anchor equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final anchor = anchor_example; // String | This is the specific uuid of an anchor.

try {
    api_instance.workstreamSummaryAssociateAnchor(workstreamSummary, anchor);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryAssociateAnchor: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **anchor** | **String**| This is the specific uuid of an anchor. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryAssociateAsset** {#workstreamsummaryassociateasset}
> workstreamSummaryAssociateAsset(workstreamSummary, asset)

/workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} [POST]

This will associate an asset with a workstream_summary. This will do the same thing as the asset equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.workstreamSummaryAssociateAsset(workstreamSummary, asset);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryAssociateAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryAssociateConversation** {#workstreamsummaryassociateconversation}
> workstreamSummaryAssociateConversation(workstreamSummary, conversation)

/workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} [POST]

This will associate an conversation with a workstream_summary. This will do the same thing as the conversation equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final conversation = conversation_example; // String | This is the uuid of a conversation.

try {
    api_instance.workstreamSummaryAssociateConversation(workstreamSummary, conversation);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryAssociateConversation: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **conversation** | **String**| This is the uuid of a conversation. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryAssociatePerson** {#workstreamsummaryassociateperson}
> workstreamSummaryAssociatePerson(workstreamSummary, person)

/workstream_summary/\{workstream_summary\}/persons/associate/\{person\} [POST]

This will associate an person with a workstream_summary. This will do the same thing as the person equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final person = person_example; // String | This is a uuid that represents a person.

try {
    api_instance.workstreamSummaryAssociatePerson(workstreamSummary, person);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryAssociatePerson: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **person** | **String**| This is a uuid that represents a person. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryAssociateRange** {#workstreamsummaryassociaterange}
> workstreamSummaryAssociateRange(workstreamSummary, range)

/workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} [POST]

This will associate a range with a workstream_summary. This will do the same thing as the range equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final range = range_example; // String | This is a identifier that is used to identify a specific range.

try {
    api_instance.workstreamSummaryAssociateRange(workstreamSummary, range);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryAssociateRange: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **range** | **String**| This is a identifier that is used to identify a specific range. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryAssociateWebsite** {#workstreamsummaryassociatewebsite}
> workstreamSummaryAssociateWebsite(workstreamSummary, website)

/workstream_summary/\{workstream_summary\}/websites/associate/\{website\} [POST]

This will associate a website with a workstream_summary. This will do the same thing as the website equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final website = website_example; // String | website id

try {
    api_instance.workstreamSummaryAssociateWebsite(workstreamSummary, website);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryAssociateWebsite: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **website** | **String**| website id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryAssociateWorkstreamEvent** {#workstreamsummaryassociateworkstreamevent}
> workstreamSummaryAssociateWorkstreamEvent(workstreamSummary, workstreamEvent)

/workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} [POST]

This will associate a workstream_summary with a workstream_event. This will do the same thing as the workstream_event equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final workstreamEvent = workstreamEvent_example; // String | This is a identifier that is used to identify a specific workstream_event.

try {
    api_instance.workstreamSummaryAssociateWorkstreamEvent(workstreamSummary, workstreamEvent);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryAssociateWorkstreamEvent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **workstreamEvent** | **String**| This is a identifier that is used to identify a specific workstream_event. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryDisassociateAnchor** {#workstreamsummarydisassociateanchor}
> workstreamSummaryDisassociateAnchor(workstreamSummary, anchor)

/workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} [POST]

This will enable us to disassociate a anchor from a workstream_summary. This will do the same thing as the anchor equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final anchor = anchor_example; // String | This is the specific uuid of an anchor.

try {
    api_instance.workstreamSummaryDisassociateAnchor(workstreamSummary, anchor);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryDisassociateAnchor: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **anchor** | **String**| This is the specific uuid of an anchor. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryDisassociateAsset** {#workstreamsummarydisassociateasset}
> workstreamSummaryDisassociateAsset(workstreamSummary, asset)

/workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} [POST]

This will enable us to disassociate a asset from a workstream_summary. This will do the same thing as the asset equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.workstreamSummaryDisassociateAsset(workstreamSummary, asset);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryDisassociateAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryDisassociateConversation** {#workstreamsummarydisassociateconversation}
> workstreamSummaryDisassociateConversation(workstreamSummary, conversation)

/workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} [POST]

This will enable us to disassociate a conversation from a workstream_summary. This will do the same thing as the conversation equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final conversation = conversation_example; // String | This is the uuid of a conversation.

try {
    api_instance.workstreamSummaryDisassociateConversation(workstreamSummary, conversation);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryDisassociateConversation: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **conversation** | **String**| This is the uuid of a conversation. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryDisassociatePerson** {#workstreamsummarydisassociateperson}
> workstreamSummaryDisassociatePerson(workstreamSummary, person)

/workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} [POST]

This will enable us to disassociate a person from a workstream_summary. This will do the same thing as the person equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final person = person_example; // String | This is a uuid that represents a person.

try {
    api_instance.workstreamSummaryDisassociatePerson(workstreamSummary, person);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryDisassociatePerson: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **person** | **String**| This is a uuid that represents a person. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryDisassociateRange** {#workstreamsummarydisassociaterange}
> workstreamSummaryDisassociateRange(workstreamSummary, range)

/workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} [POST]

This will enable us to disassociate a range from a workstream_summary. This will do the same thing as the range equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final range = range_example; // String | This is a identifier that is used to identify a specific range.

try {
    api_instance.workstreamSummaryDisassociateRange(workstreamSummary, range);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryDisassociateRange: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **range** | **String**| This is a identifier that is used to identify a specific range. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryDisassociateWebsite** {#workstreamsummarydisassociatewebsite}
> workstreamSummaryDisassociateWebsite(workstreamSummary, website)

/workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} [POST]

This will enable us to disassociate a website from a workstream_summary. This will do the same thing as the website equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final website = website_example; // String | website id

try {
    api_instance.workstreamSummaryDisassociateWebsite(workstreamSummary, website);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryDisassociateWebsite: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **website** | **String**| website id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryDisassociateWorkstreamEvent** {#workstreamsummarydisassociateworkstreamevent}
> workstreamSummaryDisassociateWorkstreamEvent(workstreamSummary, workstreamEvent)

/workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} [POST]

This will enable us to disassociate a workstream_summary from a workstream_event. This will do the same thing as the workstream_event equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final workstreamEvent = workstreamEvent_example; // String | This is a identifier that is used to identify a specific workstream_event.

try {
    api_instance.workstreamSummaryDisassociateWorkstreamEvent(workstreamSummary, workstreamEvent);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryDisassociateWorkstreamEvent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **workstreamEvent** | **String**| This is a identifier that is used to identify a specific workstream_event. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **workstreamSummaryScoresIncrement** {#workstreamsummaryscoresincrement}
> workstreamSummaryScoresIncrement(workstreamSummary, seededScoreIncrement)

'/workstream_summary/\{workstream_summary\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.workstreamSummaryScoresIncrement(workstreamSummary, seededScoreIncrement);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryScoresIncrement: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **workstreamSummaryUpdate** {#workstreamsummaryupdate}
> WorkstreamSummary workstreamSummaryUpdate(transferables, workstreamSummary)

/workstream_summary/update [POST]

This will update a specific workstream_summary.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummaryApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final workstreamSummary = WorkstreamSummary(); // WorkstreamSummary | 

try {
    final result = api_instance.workstreamSummaryUpdate(transferables, workstreamSummary);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamSummaryApi->workstreamSummaryUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **workstreamSummary** | [**WorkstreamSummary**](../models/WorkstreamSummary)|  | [optional] 

### Return type

[**WorkstreamSummary**](../models/WorkstreamSummary)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



