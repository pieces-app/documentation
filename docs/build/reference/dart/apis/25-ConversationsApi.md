# Conversations API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationsCreateFromAsset**](ConversationsApi#conversationscreatefromasset) | **POST** /conversations/create/from_asset/\{asset\} | /conversations/create/from_asset/\{asset\} [POST]
[**conversationsCreateSpecificConversation**](ConversationsApi#conversationscreatespecificconversation) | **POST** /conversations/create | /conversations/create [POST]
[**conversationsDeleteSpecificConversation**](ConversationsApi#conversationsdeletespecificconversation) | **POST** /conversations/\{conversation\}/delete | /conversations/\{conversation\}/delete [POST]
[**conversationsIdentifiersSnapshot**](ConversationsApi#conversationsidentifierssnapshot) | **GET** /conversations/identifiers | /conversations/identifiers [GET]
[**conversationsSnapshot**](ConversationsApi#conversationssnapshot) | **GET** /conversations | /conversations [GET]
[**conversationsStreamIdentifiers**](ConversationsApi#conversationsstreamidentifiers) | **GET** /conversations/stream/identifiers | /conversations/stream/identifiers [STREAMED]


## **conversationsCreateFromAsset** {#conversationscreatefromasset}
> ConversationsCreateFromAssetOutput conversationsCreateFromAsset(asset)

/conversations/create/from_asset/\{asset\} [POST]

Creates a conversation based on an asset. It initiates a conversation and generates an initial message that includes a summary of the asset used as contextual grounding.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationsApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    final result = api_instance.conversationsCreateFromAsset(asset);
    print(result);
} catch (e) {
    print('Exception when calling ConversationsApi->conversationsCreateFromAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

[**ConversationsCreateFromAssetOutput**](../models/ConversationsCreateFromAssetOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationsCreateSpecificConversation** {#conversationscreatespecificconversation}
> Conversation conversationsCreateSpecificConversation(transferables, seededConversation)

/conversations/create [POST]

Creates a specific conversation.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededConversation = SeededConversation(); // SeededConversation | 

try {
    final result = api_instance.conversationsCreateSpecificConversation(transferables, seededConversation);
    print(result);
} catch (e) {
    print('Exception when calling ConversationsApi->conversationsCreateSpecificConversation: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededConversation** | [**SeededConversation**](../models/SeededConversation)|  | [optional] 

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **conversationsDeleteSpecificConversation** {#conversationsdeletespecificconversation}
> conversationsDeleteSpecificConversation(conversation)

/conversations/\{conversation\}/delete [POST]

Deletes a specific conversation.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationsApi();
final conversation = conversation_example; // String | This is the uuid of a conversation.

try {
    api_instance.conversationsDeleteSpecificConversation(conversation);
} catch (e) {
    print('Exception when calling ConversationsApi->conversationsDeleteSpecificConversation: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String**| This is the uuid of a conversation. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationsIdentifiersSnapshot** {#conversationsidentifierssnapshot}
> FlattenedConversations conversationsIdentifiersSnapshot()

/conversations/identifiers [GET]

Retrieves all the UUIDs associated with a Conversation.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationsApi();

try {
    final result = api_instance.conversationsIdentifiersSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling ConversationsApi->conversationsIdentifiersSnapshot: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FlattenedConversations**](../models/FlattenedConversations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationsSnapshot** {#conversationssnapshot}
> Conversations conversationsSnapshot(transferables)

/conversations [GET]

Retrieves a snapshot of a specific conversation.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.conversationsSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling ConversationsApi->conversationsSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Conversations**](../models/Conversations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **conversationsStreamIdentifiers** {#conversationsstreamidentifiers}
> conversationsStreamIdentifiers()

/conversations/stream/identifiers [STREAMED]

Provides a continuous stream of conversation identifiers. It returns StreamedIdentifiers.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationsApi();

try {
    api_instance.conversationsStreamIdentifiers();
} catch (e) {
    print('Exception when calling ConversationsApi->conversationsStreamIdentifiers: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



