---
title: Relationship API | Python SDK
---

# Relationship API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationships_specific_relationship_snapshot**](RelationshipApi#relationships_specific_relationship_snapshot) | **GET** /relationship/\{relationship\} | /relationship/\{relationship\} [GET]


## **relationships_specific_relationship_snapshot** {#relationships_specific_relationship_snapshot}
> Relationship relationships_specific_relationship_snapshot(relationship)

/relationship/\{relationship\} [GET]

This will return a single relationship object.

### Example


```python
import pieces_os_client
from pieces_os_client.models.relationship import Relationship
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
    api_instance = Relationship API(api_client)
    relationship = 'relationship_example' # str | this is a specific relationship uuid.

    try:
        # /relationship/\{relationship\} [GET]
        api_response = api_instance.relationships_specific_relationship_snapshot(relationship)
        print("The response of RelationshipApi->relationships_specific_relationship_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelationshipApi->relationships_specific_relationship_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship** | **str**| this is a specific relationship uuid. | 

### Return type

[**Relationship**](../models/Relationship)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



