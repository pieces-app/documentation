---
title: Website API | Dart SDK
---

# Website API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**websiteAssociateAsset**](WebsiteApi#websiteassociateasset) | **POST** /website/\{website\}/assets/associate/\{asset\} | /website/\{website\}/assets/associate/\{asset\} [POST]
[**websiteAssociateConversation**](WebsiteApi#websiteassociateconversation) | **POST** /website/\{website\}/conversations/associate/\{conversation\} | /website/\{website\}/conversations/associate/\{conversation\} [POST]
[**websiteAssociatePerson**](WebsiteApi#websiteassociateperson) | **POST** /website/\{website\}/persons/associate/\{person\} | /website/\{website\}/persons/associate/\{person\} [POST]
[**websiteAssociateWorkstreamSummary**](WebsiteApi#websiteassociateworkstreamsummary) | **POST** /website/\{website\}/workstream_summaries/associate/\{workstream_summary\} | /website/\{website\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**websiteDisassociateAsset**](WebsiteApi#websitedisassociateasset) | **POST** /website/\{website\}/assets/disassociate/\{asset\} | /website/\{website\}/assets/disassociate/\{asset\} [POST]
[**websiteDisassociateConversation**](WebsiteApi#websitedisassociateconversation) | **POST** /website/\{website\}/conversations/disassociate/\{conversation\} | /website/\{website\}/conversations/disassociate/\{conversation\} [POST]
[**websiteDisassociatePerson**](WebsiteApi#websitedisassociateperson) | **POST** /website/\{website\}/persons/disassociate/\{person\} | /website/\{website\}/persons/disassociate/\{person\} [POST]
[**websiteDisassociateWorkstreamSummary**](WebsiteApi#websitedisassociateworkstreamsummary) | **POST** /website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} | /website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**websiteScoresIncrement**](WebsiteApi#websitescoresincrement) | **POST** /website/\{website\}/scores/increment | '/website/\{website\}/scores/increment' [POST]
[**websiteUpdate**](WebsiteApi#websiteupdate) | **POST** /website/update | /website/update [POST]
[**websitesSpecificWebsiteSnapshot**](WebsiteApi#websitesspecificwebsitesnapshot) | **GET** /website/\{website\} | /website/\{website\} [GET]


## **websiteAssociateAsset** {#websiteassociateasset}
> websiteAssociateAsset(asset, website)

/website/\{website\}/assets/associate/\{asset\} [POST]

This will associate a website with a asset.

### Example {#websiteassociateasset-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final website = website_example; // String | website id

try {
    api_instance.websiteAssociateAsset(asset, website);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteAssociateAsset: $e\n');
}
```

### Parameters {#websiteassociateasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **website** | **String** | website id | 

### Return type {#websiteassociateasset-return-type}

void (empty response body)

### Authorization {#websiteassociateasset-authorization}

No authorization required

### HTTP request headers {#websiteassociateasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **websiteAssociateConversation** {#websiteassociateconversation}
> websiteAssociateConversation(website, conversation)

/website/\{website\}/conversations/associate/\{conversation\} [POST]

This will associate a website with a conversation.

### Example {#websiteassociateconversation-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final website = website_example; // String | website id
final conversation = conversation_example; // String | This is the uuid of a conversation.

try {
    api_instance.websiteAssociateConversation(website, conversation);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteAssociateConversation: $e\n');
}
```

### Parameters {#websiteassociateconversation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **conversation** | **String** | This is the uuid of a conversation. | 

### Return type {#websiteassociateconversation-return-type}

void (empty response body)

### Authorization {#websiteassociateconversation-authorization}

No authorization required

### HTTP request headers {#websiteassociateconversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **websiteAssociatePerson** {#websiteassociateperson}
> websiteAssociatePerson(website, person)

/website/\{website\}/persons/associate/\{person\} [POST]

This will associate a website with a person.

### Example {#websiteassociateperson-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final website = website_example; // String | website id
final person = person_example; // String | This is a uuid that represents a person.

try {
    api_instance.websiteAssociatePerson(website, person);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteAssociatePerson: $e\n');
}
```

### Parameters {#websiteassociateperson-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **person** | **String** | This is a uuid that represents a person. | 

### Return type {#websiteassociateperson-return-type}

void (empty response body)

### Authorization {#websiteassociateperson-authorization}

No authorization required

### HTTP request headers {#websiteassociateperson-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **websiteAssociateWorkstreamSummary** {#websiteassociateworkstreamsummary}
> websiteAssociateWorkstreamSummary(website, workstreamSummary)

/website/\{website\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a website with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#websiteassociateworkstreamsummary-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final website = website_example; // String | website id
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.websiteAssociateWorkstreamSummary(website, workstreamSummary);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteAssociateWorkstreamSummary: $e\n');
}
```

### Parameters {#websiteassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#websiteassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#websiteassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#websiteassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **websiteDisassociateAsset** {#websitedisassociateasset}
> websiteDisassociateAsset(website, asset)

/website/\{website\}/assets/disassociate/\{asset\} [POST]

This will enable us to dissassociate a website from a asset.

### Example {#websitedisassociateasset-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final website = website_example; // String | website id
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.websiteDisassociateAsset(website, asset);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteDisassociateAsset: $e\n');
}
```

### Parameters {#websitedisassociateasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 

### Return type {#websitedisassociateasset-return-type}

void (empty response body)

### Authorization {#websitedisassociateasset-authorization}

No authorization required

### HTTP request headers {#websitedisassociateasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **websiteDisassociateConversation** {#websitedisassociateconversation}
> websiteDisassociateConversation(website, conversation)

/website/\{website\}/conversations/disassociate/\{conversation\} [POST]

This will enable us to dissassociate a website from a conversation.

### Example {#websitedisassociateconversation-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final website = website_example; // String | website id
final conversation = conversation_example; // String | This is the uuid of a conversation.

try {
    api_instance.websiteDisassociateConversation(website, conversation);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteDisassociateConversation: $e\n');
}
```

### Parameters {#websitedisassociateconversation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **conversation** | **String** | This is the uuid of a conversation. | 

### Return type {#websitedisassociateconversation-return-type}

void (empty response body)

### Authorization {#websitedisassociateconversation-authorization}

No authorization required

### HTTP request headers {#websitedisassociateconversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **websiteDisassociatePerson** {#websitedisassociateperson}
> websiteDisassociatePerson(website, person)

/website/\{website\}/persons/disassociate/\{person\} [POST]

This will enable us to dissassociate a website from a person.

### Example {#websitedisassociateperson-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final website = website_example; // String | website id
final person = person_example; // String | This is a uuid that represents a person.

try {
    api_instance.websiteDisassociatePerson(website, person);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteDisassociatePerson: $e\n');
}
```

### Parameters {#websitedisassociateperson-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **person** | **String** | This is a uuid that represents a person. | 

### Return type {#websitedisassociateperson-return-type}

void (empty response body)

### Authorization {#websitedisassociateperson-authorization}

No authorization required

### HTTP request headers {#websitedisassociateperson-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **websiteDisassociateWorkstreamSummary** {#websitedisassociateworkstreamsummary}
> websiteDisassociateWorkstreamSummary(website, workstreamSummary)

/website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a website from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#websitedisassociateworkstreamsummary-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final website = website_example; // String | website id
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.websiteDisassociateWorkstreamSummary(website, workstreamSummary);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteDisassociateWorkstreamSummary: $e\n');
}
```

### Parameters {#websitedisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#websitedisassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#websitedisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#websitedisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **websiteScoresIncrement** {#websitescoresincrement}
> websiteScoresIncrement(website, seededScoreIncrement)

'/website/\{website\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#websitescoresincrement-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final website = website_example; // String | website id
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.websiteScoresIncrement(website, seededScoreIncrement);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteScoresIncrement: $e\n');
}
```

### Parameters {#websitescoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement) |  | [optional] 

### Return type {#websitescoresincrement-return-type}

void (empty response body)

### Authorization {#websitescoresincrement-authorization}

No authorization required

### HTTP request headers {#websitescoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **websiteUpdate** {#websiteupdate}
> Website websiteUpdate(transferables, website)

/website/update [POST]

This will update a specific website.

### Example {#websiteupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final website = Website(); // Website | 

try {
    final result = api_instance.websiteUpdate(transferables, website);
    print(result);
} catch (e) {
    print('Exception when calling WebsiteApi->websiteUpdate: $e\n');
}
```

### Parameters {#websiteupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **website** | [**Website**](../models/Website) |  | [optional] 

### Return type {#websiteupdate-return-type}

[**Website**](../models/Website)

### Authorization {#websiteupdate-authorization}

No authorization required

### HTTP request headers {#websiteupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **websitesSpecificWebsiteSnapshot** {#websitesspecificwebsitesnapshot}
> Website websitesSpecificWebsiteSnapshot(website, transferables)

/website/\{website\} [GET]

This will get a snapshot of a single website.

### Example {#websitesspecificwebsitesnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsiteApi();
final website = website_example; // String | website id
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.websitesSpecificWebsiteSnapshot(website, transferables);
    print(result);
} catch (e) {
    print('Exception when calling WebsiteApi->websitesSpecificWebsiteSnapshot: $e\n');
}
```

### Parameters {#websitesspecificwebsitesnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#websitesspecificwebsitesnapshot-return-type}

[**Website**](../models/Website)

### Authorization {#websitesspecificwebsitesnapshot-authorization}

No authorization required

### HTTP request headers {#websitesspecificwebsitesnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

