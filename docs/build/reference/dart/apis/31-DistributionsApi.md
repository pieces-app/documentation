# Distributions API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionsCreateNewDistribution**](DistributionsApi#distributionscreatenewdistribution) | **POST** /distributions/create | /distributions/create [POST]
[**distributionsDeleteSpecificDistribution**](DistributionsApi#distributionsdeletespecificdistribution) | **POST** /distributions/\{distribution\}/delete | /distributions/\{distribution\}/delete [POST]
[**distributionsSnapshot**](DistributionsApi#distributionssnapshot) | **GET** /distributions | /distributions [GET]


## **distributionsCreateNewDistribution**
> Distribution distributionsCreateNewDistribution(seededDistribution)

/distributions/create [POST]

This will create a new distribution.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionsApi();
final seededDistribution = SeededDistribution(); // SeededDistribution | 

try {
    final result = api_instance.distributionsCreateNewDistribution(seededDistribution);
    print(result);
} catch (e) {
    print('Exception when calling DistributionsApi->distributionsCreateNewDistribution: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDistribution** | [**SeededDistribution**](../models/SeededDistribution)|  | [optional] 

### Return type

[**Distribution**](../models/Distribution)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **distributionsDeleteSpecificDistribution**
> distributionsDeleteSpecificDistribution(distribution)

/distributions/\{distribution\}/delete [POST]

This will delete a specific distribution.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionsApi();
final distribution = distribution_example; // String | This is the uuid of a specific distribution.

try {
    api_instance.distributionsDeleteSpecificDistribution(distribution);
} catch (e) {
    print('Exception when calling DistributionsApi->distributionsDeleteSpecificDistribution: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **String**| This is the uuid of a specific distribution. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **distributionsSnapshot**
> Distributions distributionsSnapshot()

/distributions [GET]

This will get a specific snapshot of all our distributions.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionsApi();

try {
    final result = api_instance.distributionsSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling DistributionsApi->distributionsSnapshot: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Distributions**](../models/Distributions)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



