---
title: Distribution API | Dart SDK
---

# Distribution API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionUpdate**](DistributionApi#distributionupdate) | **POST** /distribution/update | /distribution/update [POST]
[**distributionsSpecificDistributionSnapshot**](DistributionApi#distributionsspecificdistributionsnapshot) | **GET** /distribution/\{distribution\} | /distribution/\{distribution\} [GET]


## **distributionUpdate** {#distributionupdate}
> Distribution distributionUpdate(distribution)

/distribution/update [POST]

This will update a specific Distribution.

### Example {#distributionupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionApi();
final distribution = Distribution(); // Distribution | 

try {
    final result = api_instance.distributionUpdate(distribution);
    print(result);
} catch (e) {
    print('Exception when calling DistributionApi->distributionUpdate: $e\n');
}
```

### Parameters {#distributionupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | [**Distribution**](../models/Distribution) |  | [optional] 

### Return type {#distributionupdate-return-type}

[**Distribution**](../models/Distribution)

### Authorization {#distributionupdate-authorization}

No authorization required

### HTTP request headers {#distributionupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **distributionsSpecificDistributionSnapshot** {#distributionsspecificdistributionsnapshot}
> Distribution distributionsSpecificDistributionSnapshot(distribution)

/distribution/\{distribution\} [GET]

This will get a specific snapshot of a distribution.

### Example {#distributionsspecificdistributionsnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionApi();
final distribution = distribution_example; // String | This is the uuid of a specific distribution.

try {
    final result = api_instance.distributionsSpecificDistributionSnapshot(distribution);
    print(result);
} catch (e) {
    print('Exception when calling DistributionApi->distributionsSpecificDistributionSnapshot: $e\n');
}
```

### Parameters {#distributionsspecificdistributionsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **String** | This is the uuid of a specific distribution. | 

### Return type {#distributionsspecificdistributionsnapshot-return-type}

[**Distribution**](../models/Distribution)

### Authorization {#distributionsspecificdistributionsnapshot-authorization}

No authorization required

### HTTP request headers {#distributionsspecificdistributionsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

