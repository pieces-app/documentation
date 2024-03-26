# Relationships API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationships_snapshot**](RelationshipsApi#relationships_snapshot) | **GET** /relationships | /relationships [GET]


## **relationships_snapshot**
> Relationships relationships_snapshot()

/relationships [GET]

This will reurn all of the relationships that exists within your pieces db.

### Example


```python
import pieces_os_client
from pieces_os_client.models.relationships import Relationships
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
    api_instance = pieces_os_client.RelationshipsApi(api_client)

    try:
        # /relationships [GET]
        api_response = api_instance.relationships_snapshot()
        print("The response of RelationshipsApi->relationships_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelationshipsApi->relationships_snapshot: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Relationships**](Relationships)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



