# Distribution API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**distributionUpdate**](DistributionApi#distributionupdate) | **POST** /distribution/update
[**distributionsSpecificDistributionSnapshot**](DistributionApi#distributionsspecificdistributionsnapshot) | **GET** /distribution/\{distribution\}


## **distributionUpdate** {#distributionupdate}
> Distribution distributionUpdate(distribution)

/distribution/update [POST]

This will update a specific Distribution.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | [**Distribution**](../models/Distribution)|  | [optional] 

### Return type

[**Distribution**](../models/Distribution)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **distributionsSpecificDistributionSnapshot** {#distributionsspecificdistributionsnapshot}
> Distribution distributionsSpecificDistributionSnapshot(distribution)

/distribution/\{distribution\} [GET]

This will get a specific snapshot of a distribution.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **String**| This is the uuid of a specific distribution. | 

### Return type

[**Distribution**](../models/Distribution)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



