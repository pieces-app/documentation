---
title: Database API | Python SDK
---

# Database API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**database_export**](DatabaseApi#database_export) | **GET** /database/export | Your GET endpoint
[**database_import**](DatabaseApi#database_import) | **POST** /database/import | /database/import [POST]


## **database_export** {#database_export}
> ExportedDatabase database_export()

Your GET endpoint

This is going to export your current database.

### Example {#database_export-example}


```python
import pieces_os_client
from pieces_os_client.models.exported_database import ExportedDatabase
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.DatabaseApi(api_client)

    try:
        # Your GET endpoint
        api_response = api_instance.database_export()
        print("The response of DatabaseApi->database_export:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabaseApi->database_export: %s\n" % e)
```



### Parameters {#database_export-parameters}

This endpoint does not need any parameters.

### Return type {#database_export-return-type}

[**ExportedDatabase**](../models/ExportedDatabase)

### Authorization {#database_export-authorization}

No authorization required

### HTTP request headers {#database_export-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#database_export-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **database_import** {#database_import}
> database_import(exported_database=exported_database)

/database/import [POST]

This is going to take in a database, and merge it with the current database. This will revert your database back to it original form if this request fails.

### Example {#database_import-example}


```python
import pieces_os_client
from pieces_os_client.models.exported_database import ExportedDatabase
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.DatabaseApi(api_client)
    exported_database = pieces_os_client.ExportedDatabase() # ExportedDatabase |  (optional)

    try:
        # /database/import [POST]
        api_instance.database_import(exported_database=exported_database)
    except Exception as e:
        print("Exception when calling DatabaseApi->database_import: %s\n" % e)
```



### Parameters {#database_import-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exported_database** | [**ExportedDatabase**](../models/ExportedDatabase)|  | [optional] 

### Return type {#database_import-return-type}

void (empty response body)

### Authorization {#database_import-authorization}

No authorization required

### HTTP request headers {#database_import-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#database_import-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot create a shareable link. |  -  |

