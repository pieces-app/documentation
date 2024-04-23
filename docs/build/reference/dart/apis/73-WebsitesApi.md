---
title: Websites API | Dart SDK
---

# Websites API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**websitesCreateNewWebsite**](WebsitesApi#websitescreatenewwebsite) | **POST** /websites/create | /websites/create [POST]
[**websitesDeleteSpecificWebsite**](WebsitesApi#websitesdeletespecificwebsite) | **POST** /websites/\{website\}/delete | /websites/\{website\}/delete [POST]
[**websitesExists**](WebsitesApi#websitesexists) | **POST** /websites/exists | /websites/exists [POST]
[**websitesSnapshot**](WebsitesApi#websitessnapshot) | **GET** /websites | /websites [GET]


## **websitesCreateNewWebsite** {#websitescreatenewwebsite}
> Website websitesCreateNewWebsite(transferables, seededWebsite)

/websites/create [POST]

This will create a website and attach it to a specific asset.

### Example {#websitescreatenewwebsite-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsitesApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededWebsite = SeededWebsite(); // SeededWebsite | 

try {
    final result = api_instance.websitesCreateNewWebsite(transferables, seededWebsite);
    print(result);
} catch (e) {
    print('Exception when calling WebsitesApi->websitesCreateNewWebsite: $e\n');
}
```

### Parameters {#websitescreatenewwebsite-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededWebsite** | [**SeededWebsite**](../models/SeededWebsite) |  | [optional] 

### Return type {#websitescreatenewwebsite-return-type}

[**Website**](../models/Website)

### Authorization {#websitescreatenewwebsite-authorization}

No authorization required

### HTTP request headers {#websitescreatenewwebsite-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **websitesDeleteSpecificWebsite** {#websitesdeletespecificwebsite}
> websitesDeleteSpecificWebsite(website)

/websites/\{website\}/delete [POST]

This will delete a specific website!

### Example {#websitesdeletespecificwebsite-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsitesApi();
final website = website_example; // String | website id

try {
    api_instance.websitesDeleteSpecificWebsite(website);
} catch (e) {
    print('Exception when calling WebsitesApi->websitesDeleteSpecificWebsite: $e\n');
}
```

### Parameters {#websitesdeletespecificwebsite-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 

### Return type {#websitesdeletespecificwebsite-return-type}

void (empty response body)

### Authorization {#websitesdeletespecificwebsite-authorization}

No authorization required

### HTTP request headers {#websitesdeletespecificwebsite-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **websitesExists** {#websitesexists}
> ExistingMetadata websitesExists(existentMetadata)

/websites/exists [POST]

This will check all of the websites in our database to see if this specific provided website actually exists, if not we will just return a null website in the output.

### Example {#websitesexists-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsitesApi();
final existentMetadata = ExistentMetadata(); // ExistentMetadata | 

try {
    final result = api_instance.websitesExists(existentMetadata);
    print(result);
} catch (e) {
    print('Exception when calling WebsitesApi->websitesExists: $e\n');
}
```

### Parameters {#websitesexists-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existentMetadata** | [**ExistentMetadata**](../models/ExistentMetadata) |  | [optional] 

### Return type {#websitesexists-return-type}

[**ExistingMetadata**](../models/ExistingMetadata)

### Authorization {#websitesexists-authorization}

No authorization required

### HTTP request headers {#websitesexists-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **websitesSnapshot** {#websitessnapshot}
> Websites websitesSnapshot(transferables)

/websites [GET]

This will get a snapshot of all your websites.

### Example {#websitessnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WebsitesApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.websitesSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling WebsitesApi->websitesSnapshot: $e\n');
}
```

### Parameters {#websitessnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#websitessnapshot-return-type}

[**Websites**](../models/Websites)

### Authorization {#websitessnapshot-authorization}

No authorization required

### HTTP request headers {#websitessnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

