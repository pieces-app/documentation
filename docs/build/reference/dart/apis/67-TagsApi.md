---
title: Tags API | Dart SDK
---

# Tags API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsCreateNewTag**](TagsApi#tagscreatenewtag) | **POST** /tags/create | /tags/create [POST]
[**tagsDeleteSpecificTag**](TagsApi#tagsdeletespecifictag) | **POST** /tags/\{tag\}/delete | /tags/\{tag\}/delete [POST]
[**tagsExists**](TagsApi#tagsexists) | **POST** /tags/exists | /tags/exists [POST]
[**tagsSnapshot**](TagsApi#tagssnapshot) | **GET** /tags | /tags [GET]


## **tagsCreateNewTag** {#tagscreatenewtag}
> Tag tagsCreateNewTag(transferables, seededTag)

/tags/create [POST]

This will create a new tag.

### Example {#tagscreatenewtag-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededTag = SeededTag(); // SeededTag | 

try {
    final result = api_instance.tagsCreateNewTag(transferables, seededTag);
    print(result);
} catch (e) {
    print('Exception when calling TagsApi->tagsCreateNewTag: $e\n');
}
```

### Parameters {#tagscreatenewtag-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededTag** | [**SeededTag**](../models/SeededTag) |  | [optional] 

### Return type {#tagscreatenewtag-return-type}

[**Tag**](../models/Tag)

### Authorization {#tagscreatenewtag-authorization}

No authorization required

### HTTP request headers {#tagscreatenewtag-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **tagsDeleteSpecificTag** {#tagsdeletespecifictag}
> tagsDeleteSpecificTag(tag)

/tags/\{tag\}/delete [POST]

This will delete a specific tag.

### Example {#tagsdeletespecifictag-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagsApi();
final tag = tag_example; // String | tag id

try {
    api_instance.tagsDeleteSpecificTag(tag);
} catch (e) {
    print('Exception when calling TagsApi->tagsDeleteSpecificTag: $e\n');
}
```

### Parameters {#tagsdeletespecifictag-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String** | tag id | 

### Return type {#tagsdeletespecifictag-return-type}

void (empty response body)

### Authorization {#tagsdeletespecifictag-authorization}

No authorization required

### HTTP request headers {#tagsdeletespecifictag-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **tagsExists** {#tagsexists}
> ExistingMetadata tagsExists(existentMetadata)

/tags/exists [POST]

This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.

### Example {#tagsexists-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagsApi();
final existentMetadata = ExistentMetadata(); // ExistentMetadata | 

try {
    final result = api_instance.tagsExists(existentMetadata);
    print(result);
} catch (e) {
    print('Exception when calling TagsApi->tagsExists: $e\n');
}
```

### Parameters {#tagsexists-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existentMetadata** | [**ExistentMetadata**](../models/ExistentMetadata) |  | [optional] 

### Return type {#tagsexists-return-type}

[**ExistingMetadata**](../models/ExistingMetadata)

### Authorization {#tagsexists-authorization}

No authorization required

### HTTP request headers {#tagsexists-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **tagsSnapshot** {#tagssnapshot}
> Tags tagsSnapshot(transferables)

/tags [GET]

This will get a snapshot of all of your tags.

### Example {#tagssnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.tagsSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling TagsApi->tagsSnapshot: $e\n');
}
```

### Parameters {#tagssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#tagssnapshot-return-type}

[**Tags**](../models/Tags)

### Authorization {#tagssnapshot-authorization}

No authorization required

### HTTP request headers {#tagssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

