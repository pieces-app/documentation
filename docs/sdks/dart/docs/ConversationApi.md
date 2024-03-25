# core_openapi.api.ConversationApi

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationAssociateAnchor**](ConversationApi#conversationassociateanchor) | **POST** /conversation/{conversation}/anchors/associate/{anchor} | /conversation/{conversation}/anchors/associate/{anchor} [POST]
[**conversationAssociateAsset**](ConversationApi#conversationassociateasset) | **POST** /conversation/{conversation}/assets/associate/{asset} | /conversation/{conversation}/assets/associate/{asset} [POST]
[**conversationAssociateWebsite**](ConversationApi#conversationassociatewebsite) | **POST** /conversation/{conversation}/websites/associate/{website} | /conversation/{conversation}/websites/associate/{website} [POST]
[**conversationDisassociateAnchor**](ConversationApi#conversationdisassociateanchor) | **POST** /conversation/{conversation}/anchors/delete/{anchor} | /conversation/{conversation}/anchors/delete/{anchor} [POST]
[**conversationDisassociateAsset**](ConversationApi#conversationdisassociateasset) | **POST** /conversation/{conversation}/assets/delete/{asset} | /conversation/{conversation}/assets/delete/{asset} [POST]
[**conversationDisassociateWebsite**](ConversationApi#conversationdisassociatewebsite) | **POST** /conversation/{conversation}/websites/disassociate/{website} | /website/{website}/websites/disassociate/{website} [POST]
[**conversationGetSpecificConversation**](ConversationApi#conversationgetspecificconversation) | **GET** /conversation/{conversation} | /conversation/{conversation} [GET]
[**conversationGroundingMessagesAssociateMessage**](ConversationApi#conversationgroundingmessagesassociatemessage) | **POST** /conversation/{conversation}/grounding/messages/associate/{message} | /conversation/{conversation}/grounding/messages/associate/{message} [POST]
[**conversationGroundingMessagesDisassociateMessage**](ConversationApi#conversationgroundingmessagesdisassociatemessage) | **POST** /conversation/{conversation}/grounding/messages/disassociate/{message} | /conversation/{conversation}/grounding/messages/disassociate/{message} [POST]
[**conversationScoresIncrement**](ConversationApi#conversationscoresincrement) | **POST** /conversation/{conversation}/scores/increment | '/conversation/{conversation}/scores/increment' [POST]
[**conversationSpecificConversationMessages**](ConversationApi#conversationspecificconversationmessages) | **GET** /conversation/{conversation}/messages | /conversation/{conversation}/messages [GET]
[**conversationSpecificConversationRename**](ConversationApi#conversationspecificconversationrename) | **POST** /conversation/{conversation}/rename | /conversation/{conversation}/rename [POST]
[**conversationSummarize**](ConversationApi#conversationsummarize) | **POST** /conversation/{conversation}/summarize | /conversation/{conversation}/summarize [POST]
[**conversationUpdate**](ConversationApi#conversationupdate) | **POST** /conversation/update | /conversation/update [POST]


# **conversationAssociateAnchor**
> conversationAssociateAnchor(conversation, anchor)

/conversation/{conversation}/anchors/associate/{anchor} [POST]

This will update both the anchor and the conversation.  and associate the 2 together

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationAssociateAsset**
> conversationAssociateAsset(conversation, asset)

/conversation/{conversation}/assets/associate/{asset} [POST]

This will update both the asset and the conversation.  and associate the 2 together

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationAssociateWebsite**
> conversationAssociateWebsite(conversation, website)

/conversation/{conversation}/websites/associate/{website} [POST]

This will update both the website and the conversation.  and associate the 2 together

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationDisassociateAnchor**
> conversationDisassociateAnchor(conversation, anchor)

/conversation/{conversation}/anchors/delete/{anchor} [POST]

This will update both the anchor and the conversation.  and delete(disassociate) the 2 together

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationDisassociateAsset**
> conversationDisassociateAsset(conversation, asset)

/conversation/{conversation}/assets/delete/{asset} [POST]

This will update both the asset and the conversation.  and delete(disassociate) the 2.

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationDisassociateWebsite**
> conversationDisassociateWebsite(conversation, website)

/website/{website}/websites/disassociate/{website} [POST]

This will enable us to dissassociate a conversation from a website.

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationGetSpecificConversation**
> Conversation conversationGetSpecificConversation(conversation, transferables)

/conversation/{conversation} [GET]

This will get a specific conversation.

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

[**Conversation**](Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationGroundingMessagesAssociateMessage**
> conversationGroundingMessagesAssociateMessage(conversation, message)

/conversation/{conversation}/grounding/messages/associate/{message} [POST]

This will save the grounding context for a conversation. This will enable us to associate a message to the conversation.grounding object.

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationGroundingMessagesDisassociateMessage**
> conversationGroundingMessagesDisassociateMessage(conversation, message)

/conversation/{conversation}/grounding/messages/disassociate/{message} [POST]

This will remove specific grounding context for a conversation. This will enable us to dissassociate a message from the conversation.grounding object.

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationScoresIncrement**
> conversationScoresIncrement(conversation, seededScoreIncrement)

'/conversation/{conversation}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

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
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationSpecificConversationMessages**
> ConversationMessages conversationSpecificConversationMessages(conversation, transferables)

/conversation/{conversation}/messages [GET]

This will get a specific conversations messages

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

[**ConversationMessages**](ConversationMessages)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationSpecificConversationRename**
> Conversation conversationSpecificConversationRename(conversation, transferables)

/conversation/{conversation}/rename [POST]

This will take a specific converssation and it will rename using ML.

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

[**Conversation**](Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationSummarize**
> ConversationSummarizeOutput conversationSummarize(conversation, conversationSummarizeInput)

/conversation/{conversation}/summarize [POST]

This will take a current conversation and create a summary of the conversation and save it as an annotation on the conversation.  will return the annotation reference used as the summary.

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
 **conversationSummarizeInput** | [**ConversationSummarizeInput**](ConversationSummarizeInput)|  | [optional] 

### Return type

[**ConversationSummarizeOutput**](ConversationSummarizeOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **conversationUpdate**
> Conversation conversationUpdate(transferables, conversation)

/conversation/update [POST]

This will update a specific conversation.

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
 **conversation** | [**Conversation**](Conversation)|  | [optional] 

### Return type

[**Conversation**](Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

