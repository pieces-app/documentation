---
title: Distribution API | Python SDK
---

# Distribution API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distribution_update**](DistributionApi#distribution_update) | **POST** /distribution/update | /distribution/update [POST]
[**distributions_specific_distribution_snapshot**](DistributionApi#distributions_specific_distribution_snapshot) | **GET** /distribution/\{distribution\} | /distribution/\{distribution\} [GET]


## **distribution_update** {#distribution_update}
> Distribution distribution_update(distribution=distribution)

/distribution/update [POST]

This will update a specific Distribution.

### Example


```python
import pieces_os_client
from pieces_os_client.models.distribution import Distribution
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Distribution API(api_client)
    distribution = pieces_os_client.Distribution() # Distribution |  (optional)

    try:
        # /distribution/update [POST]
        api_response = api_instance.distribution_update(distribution=distribution)
        print("The response of DistributionApi->distribution_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributionApi->distribution_update: %s\n" % e)
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
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **distributions_specific_distribution_snapshot** {#distributions_specific_distribution_snapshot}
> Distribution distributions_specific_distribution_snapshot(distribution)

/distribution/\{distribution\} [GET]

This will get a specific snapshot of a distribution.

### Example


```python
import pieces_os_client
from pieces_os_client.models.distribution import Distribution
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Distribution API(api_client)
    distribution = 'distribution_example' # str | This is the uuid of a specific distribution.

    try:
        # /distribution/\{distribution\} [GET]
        api_response = api_instance.distributions_specific_distribution_snapshot(distribution)
        print("The response of DistributionApi->distributions_specific_distribution_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributionApi->distributions_specific_distribution_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **str**| This is the uuid of a specific distribution. | 

### Return type

[**Distribution**](../models/Distribution)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Distribution not found. |  -  |
**500** | Internal Server Error |  -  |



