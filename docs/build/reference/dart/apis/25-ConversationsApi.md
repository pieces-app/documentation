---
title: Conversations API | Dart SDK
---

# Conversations API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationsCreateFromAsset**](ConversationsApi#conversationscreatefromasset) | **POST** /conversations/create/from_asset/\{asset\} | /conversations/create/from_asset/\{asset\} [POST]
[**conversationsCreateSpecificConversation**](ConversationsApi#conversationscreatespecificconversation) | **POST** /conversations/create | /conversations/create [POST]
[**conversationsDeleteSpecificConversation**](ConversationsApi#conversationsdeletespecificconversation) | **POST** /conversations/\{conversation\}/delete | /conversations/\{conversation\}/delete [POST]
[**conversationsIdentifiersSnapshot**](ConversationsApi#conversationsidentifierssnapshot) | **GET** /conversations/identifiers | /conversations/identifiers [GET]
[**conversationsSnapshot**](ConversationsApi#conversationssnapshot) | **GET** /conversations | /conversations [GET]
[**conversationsStreamIdentifiers**](ConversationsApi#conversationsstreamidentifiers) | **GET** /conversations/stream/identifiers | /conversations/stream/identifiers [WS]


## **conversationsCreateFromAsset** {#conversationscreatefromasset}
> ConversationsCreateFromAssetOutput conversationsCreateFromAsset(asset)

/conversations/create/from_asset/\{asset\} [POST]

Creates a conversation based on an asset. It initiates a conversation and generates an initial message that includes a summary of the asset used as contextual grounding.

### Example {#conversationscreatefromasset-example}
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

### Parameters {#conversationscreatefromasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 

### Return type {#conversationscreatefromasset-return-type}

[**ConversationsCreateFromAssetOutput**](../models/ConversationsCreateFromAssetOutput)

### Authorization {#conversationscreatefromasset-authorization}

No authorization required

### HTTP request headers {#conversationscreatefromasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **conversationsCreateSpecificConversation** {#conversationscreatespecificconversation}
> Conversation conversationsCreateSpecificConversation(transferables, seededConversation)

/conversations/create [POST]

Creates a specific conversation.

### Example {#conversationscreatespecificconversation-example}
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

### Parameters {#conversationscreatespecificconversation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededConversation** | [**SeededConversation**](../models/SeededConversation) |  | [optional] 

### Return type {#conversationscreatespecificconversation-return-type}

[**Conversation**](../models/Conversation)

### Authorization {#conversationscreatespecificconversation-authorization}

No authorization required

### HTTP request headers {#conversationscreatespecificconversation-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **conversationsDeleteSpecificConversation** {#conversationsdeletespecificconversation}
> conversationsDeleteSpecificConversation(conversation)

/conversations/\{conversation\}/delete [POST]

Deletes a specific conversation.

### Example {#conversationsdeletespecificconversation-example}
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

### Parameters {#conversationsdeletespecificconversation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **String** | This is the uuid of a conversation. | 

### Return type {#conversationsdeletespecificconversation-return-type}

void (empty response body)

### Authorization {#conversationsdeletespecificconversation-authorization}

No authorization required

### HTTP request headers {#conversationsdeletespecificconversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **conversationsIdentifiersSnapshot** {#conversationsidentifierssnapshot}
> FlattenedConversations conversationsIdentifiersSnapshot()

/conversations/identifiers [GET]

Retrieves all the UUIDs associated with a Conversation.

### Example {#conversationsidentifierssnapshot-example}
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

### Parameters {#conversationsidentifierssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#conversationsidentifierssnapshot-return-type}

[**FlattenedConversations**](../models/FlattenedConversations)

### Authorization {#conversationsidentifierssnapshot-authorization}

No authorization required

### HTTP request headers {#conversationsidentifierssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **conversationsSnapshot** {#conversationssnapshot}
> Conversations conversationsSnapshot(transferables)

/conversations [GET]

Retrieves a snapshot of a specific conversation.

### Example {#conversationssnapshot-example}
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

### Parameters {#conversationssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#conversationssnapshot-return-type}

[**Conversations**](../models/Conversations)

### Authorization {#conversationssnapshot-authorization}

No authorization required

### HTTP request headers {#conversationssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **conversationsStreamIdentifiers** {#conversationsstreamidentifiers}
> conversationsStreamIdentifiers()

/conversations/stream/identifiers [WS]

Provides a WebSocket connection that emits changes to your conversation identifiers (UUIDs).

### Example {#conversationsstreamidentifiers-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ConversationsApi();

try {
    api_instance.conversationsStreamIdentifiers();
} catch (e) {
    print('Exception when calling ConversationsApi->conversationsStreamIdentifiers: $e\n');
}
```

### Parameters {#conversationsstreamidentifiers-parameters}
This endpoint does not need any parameter.

### Return type {#conversationsstreamidentifiers-return-type}

void (empty response body)

### Authorization {#conversationsstreamidentifiers-authorization}

No authorization required

### HTTP request headers {#conversationsstreamidentifiers-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

