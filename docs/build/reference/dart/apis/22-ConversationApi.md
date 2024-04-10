# Conversation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationAssociateAnchor**](ConversationApi#conversationassociateanchor) | **POST** /conversation/\{conversation\}/anchors/associate/\{anchor\} | /conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]
[**conversationAssociateAsset**](ConversationApi#conversationassociateasset) | **POST** /conversation/\{conversation\}/assets/associate/\{asset\} | /conversation/\{conversation\}/assets/associate/\{asset\} [POST]
[**conversationAssociateGroundingTemporalRangeWorkstream**](ConversationApi#conversationassociategroundingtemporalrangeworkstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/associate/\{range\} | /conversation/\{conversation\}/grounding/temporal/ranges/associate/\{range\} [POST]
[**conversationAssociateWebsite**](ConversationApi#conversationassociatewebsite) | **POST** /conversation/\{conversation\}/websites/associate/\{website\} | /conversation/\{conversation\}/websites/associate/\{website\} [POST]
[**conversationAssociateWorkstreamSummary**](ConversationApi#conversationassociateworkstreamsummary) | **POST** /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} | /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**conversationDisassociateAnchor**](ConversationApi#conversationdisassociateanchor) | **POST** /conversation/\{conversation\}/anchors/delete/\{anchor\} | /conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]
[**conversationDisassociateAsset**](ConversationApi#conversationdisassociateasset) | **POST** /conversation/\{conversation\}/assets/delete/\{asset\} | /conversation/\{conversation\}/assets/delete/\{asset\} [POST]
[**conversationDisassociateGroundingTemporalRangeWorkstream**](ConversationApi#conversationdisassociategroundingtemporalrangeworkstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} | /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} [POST]
[**conversationDisassociateWebsite**](ConversationApi#conversationdisassociatewebsite) | **POST** /conversation/\{conversation\}/websites/disassociate/\{website\} | /website/\{website\}/websites/disassociate/\{website\} [POST]
[**conversationDisassociateWorkstreamSummary**](ConversationApi#conversationdisassociateworkstreamsummary) | **POST** /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} | /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**conversationGetSpecificConversation**](ConversationApi#conversationgetspecificconversation) | **GET** /conversation/\{conversation\} | /conversation/\{conversation\} [GET]
[**conversationGroundingMessagesAssociateMessage**](ConversationApi#conversationgroundingmessagesassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/associate/\{message\} | /conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]
[**conversationGroundingMessagesDisassociateMessage**](ConversationApi#conversationgroundingmessagesdisassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} | /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]
[**conversationScoresIncrement**](ConversationApi#conversationscoresincrement) | **POST** /conversation/\{conversation\}/scores/increment | '/conversation/\{conversation\}/scores/increment' [POST]
[**conversationSpecificConversationMessages**](ConversationApi#conversationspecificconversationmessages) | **GET** /conversation/\{conversation\}/messages | /conversation/\{conversation\}/messages [GET]
[**conversationSpecificConversationRename**](ConversationApi#conversationspecificconversationrename) | **POST** /conversation/\{conversation\}/rename | /conversation/\{conversation\}/rename [POST]
[**conversationSummarize**](ConversationApi#conversationsummarize) | **POST** /conversation/\{conversation\}/summarize | /conversation/\{conversation\}/summarize [POST]
[**conversationUpdate**](ConversationApi#conversationupdate) | **POST** /conversation/update | /conversation/update [POST]


## **conversationAssociateAnchor** {#conversationassociateanchor}
> conversationAssociateAnchor(conversation, anchor)

/conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]

Updates both the anchor and the conversation, associating them together.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final anchor = anchor_example; // String | This is the specific uuid of an anchor.

try {
    api_instance.conversationAssociateAnchor(conversation, anchor);
} catch (e) {
    print('Exception when calling ConversationApi->conversationAssociateAnchor: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **anchor** | **String**| This is the specific uuid of an anchor. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationAssociateAsset** {#conversationassociateasset}
> conversationAssociateAsset(conversation, asset)

/conversation/\{conversation\}/assets/associate/\{asset\} [POST]

Updates both the asset and the conversation, associating the two together.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.conversationAssociateAsset(conversation, asset);
} catch (e) {
    print('Exception when calling ConversationApi->conversationAssociateAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationAssociateGroundingTemporalRangeWorkstream** {#conversationassociategroundingtemporalrangeworkstream}
> conversationAssociateGroundingTemporalRangeWorkstream(conversation, range)

/conversation/\{conversation\}/grounding/temporal/ranges/associate/\{range\} [POST]

This will associate a workstream(range) with a conversation. This will do the same thing as the range equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final range = range_example; // String | This is a identifier that is used to identify a specific range.

try {
    api_instance.conversationAssociateGroundingTemporalRangeWorkstream(conversation, range);
} catch (e) {
    print('Exception when calling ConversationApi->conversationAssociateGroundingTemporalRangeWorkstream: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **range** | **String**| This is a identifier that is used to identify a specific range. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationAssociateWebsite** {#conversationassociatewebsite}
> conversationAssociateWebsite(conversation, website)

/conversation/\{conversation\}/websites/associate/\{website\} [POST]

Updates both the website and the conversation, and associate them together.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final website = website_example; // String | website id

try {
    api_instance.conversationAssociateWebsite(conversation, website);
} catch (e) {
    print('Exception when calling ConversationApi->conversationAssociateWebsite: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **website** | **String**| website id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationAssociateWorkstreamSummary** {#conversationassociateworkstreamsummary}
> conversationAssociateWorkstreamSummary(conversation, workstreamSummary)

/conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a conversation with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.conversationAssociateWorkstreamSummary(conversation, workstreamSummary);
} catch (e) {
    print('Exception when calling ConversationApi->conversationAssociateWorkstreamSummary: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationDisassociateAnchor** {#conversationdisassociateanchor}
> conversationDisassociateAnchor(conversation, anchor)

/conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]

Updates both the anchor and the conversation, deleting (disassociating) them simultaneously.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final anchor = anchor_example; // String | This is the specific uuid of an anchor.

try {
    api_instance.conversationDisassociateAnchor(conversation, anchor);
} catch (e) {
    print('Exception when calling ConversationApi->conversationDisassociateAnchor: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **anchor** | **String**| This is the specific uuid of an anchor. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationDisassociateAsset** {#conversationdisassociateasset}
> conversationDisassociateAsset(conversation, asset)

/conversation/\{conversation\}/assets/delete/\{asset\} [POST]

Updates both the asset and the conversation, effectively disassociating them.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.conversationDisassociateAsset(conversation, asset);
} catch (e) {
    print('Exception when calling ConversationApi->conversationDisassociateAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationDisassociateGroundingTemporalRangeWorkstream** {#conversationdisassociategroundingtemporalrangeworkstream}
> conversationDisassociateGroundingTemporalRangeWorkstream(conversation, range)

/conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} [POST]

This will enable us to disassociate a workstream(range) from a conversation. This will do the same thing as the range equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final range = range_example; // String | This is a identifier that is used to identify a specific range.

try {
    api_instance.conversationDisassociateGroundingTemporalRangeWorkstream(conversation, range);
} catch (e) {
    print('Exception when calling ConversationApi->conversationDisassociateGroundingTemporalRangeWorkstream: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **range** | **String**| This is a identifier that is used to identify a specific range. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationDisassociateWebsite** {#conversationdisassociatewebsite}
> conversationDisassociateWebsite(conversation, website)

/website/\{website\}/websites/disassociate/\{website\} [POST]

Allows us to disassociate a conversation from a specific website

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final website = website_example; // String | website id

try {
    api_instance.conversationDisassociateWebsite(conversation, website);
} catch (e) {
    print('Exception when calling ConversationApi->conversationDisassociateWebsite: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **website** | **String**| website id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationDisassociateWorkstreamSummary** {#conversationdisassociateworkstreamsummary}
> conversationDisassociateWorkstreamSummary(conversation, workstreamSummary)

/conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an conversation from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.conversationDisassociateWorkstreamSummary(conversation, workstreamSummary);
} catch (e) {
    print('Exception when calling ConversationApi->conversationDisassociateWorkstreamSummary: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationGetSpecificConversation** {#conversationgetspecificconversation}
> Conversation conversationGetSpecificConversation(conversation, transferables)

/conversation/\{conversation\} [GET]

Retrieves a specific conversation.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.conversationGetSpecificConversation(conversation, transferables);
    print(result);
} catch (e) {
    print('Exception when calling ConversationApi->conversationGetSpecificConversation: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationGroundingMessagesAssociateMessage** {#conversationgroundingmessagesassociatemessage}
> conversationGroundingMessagesAssociateMessage(conversation, message)

/conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]

Stores the grounding context for a conversation. It allows to associate a message with the conversation's grounding object, facilitating contextual understanding and management of the conversation.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final message = message_example; // String | This is the uuid of a message.

try {
    api_instance.conversationGroundingMessagesAssociateMessage(conversation, message);
} catch (e) {
    print('Exception when calling ConversationApi->conversationGroundingMessagesAssociateMessage: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **message** | **String**| This is the uuid of a message. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationGroundingMessagesDisassociateMessage** {#conversationgroundingmessagesdisassociatemessage}
> conversationGroundingMessagesDisassociateMessage(conversation, message)

/conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]

Removes a specific grounding context for a conversation, and allows us to disassociate a message from the conversation's grounding object.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final message = message_example; // String | This is the uuid of a message.

try {
    api_instance.conversationGroundingMessagesDisassociateMessage(conversation, message);
} catch (e) {
    print('Exception when calling ConversationApi->conversationGroundingMessagesDisassociateMessage: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **message** | **String**| This is the uuid of a message. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationScoresIncrement** {#conversationscoresincrement}
> conversationScoresIncrement(conversation, seededScoreIncrement)

'/conversation/\{conversation\}/scores/increment' [POST]

Increment scores associated with a conversation. It accepts a SeededScoreIncrement object as input to adjust the scores accordingly based on the provided data.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.conversationScoresIncrement(conversation, seededScoreIncrement);
} catch (e) {
    print('Exception when calling ConversationApi->conversationScoresIncrement: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **conversationSpecificConversationMessages** {#conversationspecificconversationmessages}
> ConversationMessages conversationSpecificConversationMessages(conversation, transferables)

/conversation/\{conversation\}/messages [GET]

Retrieves messages specific to a particular conversation.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.conversationSpecificConversationMessages(conversation, transferables);
    print(result);
} catch (e) {
    print('Exception when calling ConversationApi->conversationSpecificConversationMessages: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**ConversationMessages**](../models/ConversationMessages)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationSpecificConversationRename** {#conversationspecificconversationrename}
> Conversation conversationSpecificConversationRename(conversation, transferables)

/conversation/\{conversation\}/rename [POST]

Renames a specific conversation using machine learning (ML) techniques.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.conversationSpecificConversationRename(conversation, transferables);
    print(result);
} catch (e) {
    print('Exception when calling ConversationApi->conversationSpecificConversationRename: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationSummarize** {#conversationsummarize}
> ConversationSummarizeOutput conversationSummarize(conversation, conversationSummarizeInput)

/conversation/\{conversation\}/summarize [POST]

Generates a summary of a given conversation and saves it as an annotation associated with the conversation. It returns a reference to the annotation, which serves as the summary.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.
final conversationSummarizeInput = ConversationSummarizeInput(); // ConversationSummarizeInput | 

try {
    final result = api_instance.conversationSummarize(conversation, conversationSummarizeInput);
    print(result);
} catch (e) {
    print('Exception when calling ConversationApi->conversationSummarize: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 
 **conversationSummarizeInput** | [**ConversationSummarizeInput**](../models/ConversationSummarizeInput)|  | [optional] 

### Return type

[**ConversationSummarizeOutput**](../models/ConversationSummarizeOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **conversationUpdate** {#conversationupdate}
> Conversation conversationUpdate(transferables, conversation)

/conversation/update [POST]

Updates a specific conversation.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final conversation = Conversation(); // Conversation | 

try {
    final result = api_instance.conversationUpdate(transferables, conversation);
    print(result);
} catch (e) {
    print('Exception when calling ConversationApi->conversationUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **conversation** | [**Conversation**](../models/Conversation)|  | [optional] 

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



