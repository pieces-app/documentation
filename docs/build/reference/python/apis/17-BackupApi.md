---
title: Backup API | Python SDK
---

# Backup API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup**](BackupApi#backup) | **POST** /backup | /backup [POST]
[**backup_asset**](BackupApi#backup_asset) | **POST** /backup/asset | /backup/asset [POST]
[**backup_restore_specific_backup**](BackupApi#backup_restore_specific_backup) | **POST** /backup/\{backup\}/restore | /backup/\{backup\}/restore [POST]
[**backup_restore_specific_backup_streamed**](BackupApi#backup_restore_specific_backup_streamed) | **POST** /backup/\{backup\}/restore/streamed | /backup/\{backup\}/restore/streamed [POST]
[**backup_specific_backup_snapshot**](BackupApi#backup_specific_backup_snapshot) | **GET** /backup/\{backup\} | /backup/\{backup\} [GET]
[**backup_specific_creation_cancel**](BackupApi#backup_specific_creation_cancel) | **POST** /backup/\{backup\}/creation/cancel | /backup/\{backup\}/creation/cancel [POST]
[**backup_specific_creation_status**](BackupApi#backup_specific_creation_status) | **GET** /backup/\{backup\}/creation/status | /backup/\{backup\}/creation/status [GET]
[**backup_specific_restoration_cancel**](BackupApi#backup_specific_restoration_cancel) | **POST** /backup/\{backup\}/restoration/cancel | /backup/\{backup\}/restoration/cancel [POST]
[**backup_specific_restoration_status**](BackupApi#backup_specific_restoration_status) | **GET** /backup/\{backup\}/restoration/status | /backup/\{backup\}/restoration/status [GET]


## **backup** {#backup}
> backup(assets=assets)

/backup [POST]



### Example {#backup-example}


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
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
    api_instance = Backup API(api_client)
    assets = pieces_os_client.Assets() # Assets |  (optional)

    try:
        # /backup [POST]
        api_instance.backup(assets=assets)
    except Exception as e:
        print("Exception when calling BackupApi->backup: %s\n" % e)
```



### Parameters {#backup-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](../models/Assets)|  | [optional] 

### Return type {#backup-return-type}

void (empty response body)

### Authorization {#backup-authorization}

No authorization required

### HTTP request headers {#backup-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#backup-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, or they cannot Backup to the Cloud. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to backup. The User also need to be connected to their cloud to backup.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **backup_asset** {#backup_asset}
> backup_asset(asset=asset)

/backup/asset [POST]

### Example {#backup_asset-example}


```python
import pieces_os_client
from pieces_os_client.models.asset import Asset
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
    api_instance = Backup API(api_client)
    asset = pieces_os_client.Asset() # Asset |  (optional)

    try:
        # /backup/asset [POST]
        api_instance.backup_asset(asset=asset)
    except Exception as e:
        print("Exception when calling BackupApi->backup_asset: %s\n" % e)
```



### Parameters {#backup_asset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**Asset**](../models/Asset)|  | [optional] 

### Return type {#backup_asset-return-type}

void (empty response body)

### Authorization {#backup_asset-authorization}

No authorization required

### HTTP request headers {#backup_asset-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#backup_asset-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, or they cannot Backup to the Cloud. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to backup. The User also need to be connected to their cloud to backup.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **backup_restore_specific_backup** {#backup_restore_specific_backup}
> Backup backup_restore_specific_backup(backup, backup2=backup2)

/backup/\{backup\}/restore [POST]

Given a backup identifier version_timestamp.  we will restore a given backup from the cloud and override your local database!!!  NOTE!!!! This will NOT sync, ie all local snippets will get replaced with the restored database.

### Example {#backup_restore_specific_backup-example}


```python
import pieces_os_client
from pieces_os_client.models.backup import Backup
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
    api_instance = Backup API(api_client)
    backup = 'backup_example' # str | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup2 = pieces_os_client.Backup() # Backup |  (optional)

    try:
        # /backup/\{backup\}/restore [POST]
        api_response = api_instance.backup_restore_specific_backup(backup, backup2=backup2)
        print("The response of BackupApi->backup_restore_specific_backup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupApi->backup_restore_specific_backup: %s\n" % e)
```



### Parameters {#backup_restore_specific_backup-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **str**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](../models/Backup)|  | [optional] 

### Return type {#backup_restore_specific_backup-return-type}

[**Backup**](../models/Backup)

### Authorization {#backup_restore_specific_backup-authorization}

No authorization required

### HTTP request headers {#backup_restore_specific_backup-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#backup_restore_specific_backup-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operations with the cloud |  -  |

## **backup_restore_specific_backup_streamed** {#backup_restore_specific_backup_streamed}
> BackupStreamedProgress backup_restore_specific_backup_streamed(backup, backup2=backup2)

/backup/\{backup\}/restore/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example {#backup_restore_specific_backup_streamed-example}


```python
import pieces_os_client
from pieces_os_client.models.backup import Backup
from pieces_os_client.models.backup_streamed_progress import BackupStreamedProgress
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
    api_instance = Backup API(api_client)
    backup = 'backup_example' # str | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup2 = pieces_os_client.Backup() # Backup |  (optional)

    try:
        # /backup/\{backup\}/restore/streamed [POST]
        api_response = api_instance.backup_restore_specific_backup_streamed(backup, backup2=backup2)
        print("The response of BackupApi->backup_restore_specific_backup_streamed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupApi->backup_restore_specific_backup_streamed: %s\n" % e)
```



### Parameters {#backup_restore_specific_backup_streamed-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **str**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](../models/Backup)|  | [optional] 

### Return type {#backup_restore_specific_backup_streamed-return-type}

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### Authorization {#backup_restore_specific_backup_streamed-authorization}

No authorization required

### HTTP request headers {#backup_restore_specific_backup_streamed-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#backup_restore_specific_backup_streamed-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to change the beta status |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |

## **backup_specific_backup_snapshot** {#backup_specific_backup_snapshot}
> Backup backup_specific_backup_snapshot(backup)

/backup/\{backup\} [GET]

This will just get the metadata associated with a specific backup.

### Example {#backup_specific_backup_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.backup import Backup
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
    api_instance = Backup API(api_client)
    backup = 'backup_example' # str | This is a identifier that is used to identify a specific backup.(version_timestamp)

    try:
        # /backup/\{backup\} [GET]
        api_response = api_instance.backup_specific_backup_snapshot(backup)
        print("The response of BackupApi->backup_specific_backup_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupApi->backup_specific_backup_snapshot: %s\n" % e)
```



### Parameters {#backup_specific_backup_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **str**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type {#backup_specific_backup_snapshot-return-type}

[**Backup**](../models/Backup)

### Authorization {#backup_specific_backup_snapshot-authorization}

No authorization required

### HTTP request headers {#backup_specific_backup_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#backup_specific_backup_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to change the beta status |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |

## **backup_specific_creation_cancel** {#backup_specific_creation_cancel}
> backup_specific_creation_cancel(backup)

/backup/\{backup\}/creation/cancel [POST]

This is Going to cancel a create backup (streamed) or not streamed that is currently in progress.  This will throw a 500 if there is not a backup in progress.  TODO: ADD mofe DESCRIPITON To this.

### Example {#backup_specific_creation_cancel-example}


```python
import pieces_os_client
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
    api_instance = Backup API(api_client)
    backup = 'backup_example' # str | This is a identifier that is used to identify a specific backup.(version_timestamp)

    try:
        # /backup/\{backup\}/creation/cancel [POST]
        api_instance.backup_specific_creation_cancel(backup)
    except Exception as e:
        print("Exception when calling BackupApi->backup_specific_creation_cancel: %s\n" % e)
```



### Parameters {#backup_specific_creation_cancel-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **str**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type {#backup_specific_creation_cancel-return-type}

void (empty response body)

### Authorization {#backup_specific_creation_cancel-authorization}

No authorization required

### HTTP request headers {#backup_specific_creation_cancel-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#backup_specific_creation_cancel-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **backup_specific_creation_status** {#backup_specific_creation_status}
> BackupStatus backup_specific_creation_status(backup)

/backup/\{backup\}/creation/status [GET]

TODO add a description:

### Example {#backup_specific_creation_status-example}


```python
import pieces_os_client
from pieces_os_client.models.backup_status import BackupStatus
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
    api_instance = Backup API(api_client)
    backup = 'backup_example' # str | This is a identifier that is used to identify a specific backup.(version_timestamp)

    try:
        # /backup/\{backup\}/creation/status [GET]
        api_response = api_instance.backup_specific_creation_status(backup)
        print("The response of BackupApi->backup_specific_creation_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupApi->backup_specific_creation_status: %s\n" % e)
```



### Parameters {#backup_specific_creation_status-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **str**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type {#backup_specific_creation_status-return-type}

[**BackupStatus**](../models/BackupStatus)

### Authorization {#backup_specific_creation_status-authorization}

No authorization required

### HTTP request headers {#backup_specific_creation_status-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#backup_specific_creation_status-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Internal Server Error |  -  |
**500** | Internal Server Error |  -  |

## **backup_specific_restoration_cancel** {#backup_specific_restoration_cancel}
> backup_specific_restoration_cancel(backup, backup2=backup2)

/backup/\{backup\}/restoration/cancel [POST]

This will cancel a Restoration that is in progress and restore to the original database.  Note: if there is not a restore in progress we will return a 500.  TODO add

### Example {#backup_specific_restoration_cancel-example}


```python
import pieces_os_client
from pieces_os_client.models.backup import Backup
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
    api_instance = Backup API(api_client)
    backup = 'backup_example' # str | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup2 = pieces_os_client.Backup() # Backup |  (optional)

    try:
        # /backup/\{backup\}/restoration/cancel [POST]
        api_instance.backup_specific_restoration_cancel(backup, backup2=backup2)
    except Exception as e:
        print("Exception when calling BackupApi->backup_specific_restoration_cancel: %s\n" % e)
```



### Parameters {#backup_specific_restoration_cancel-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **str**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](../models/Backup)|  | [optional] 

### Return type {#backup_specific_restoration_cancel-return-type}

void (empty response body)

### Authorization {#backup_specific_restoration_cancel-authorization}

No authorization required

### HTTP request headers {#backup_specific_restoration_cancel-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#backup_specific_restoration_cancel-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **backup_specific_restoration_status** {#backup_specific_restoration_status}
> BackupStatus backup_specific_restoration_status(backup)

/backup/\{backup\}/restoration/status [GET]

TODO add a description:

### Example {#backup_specific_restoration_status-example}


```python
import pieces_os_client
from pieces_os_client.models.backup_status import BackupStatus
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
    api_instance = Backup API(api_client)
    backup = 'backup_example' # str | This is a identifier that is used to identify a specific backup.(version_timestamp)

    try:
        # /backup/\{backup\}/restoration/status [GET]
        api_response = api_instance.backup_specific_restoration_status(backup)
        print("The response of BackupApi->backup_specific_restoration_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupApi->backup_specific_restoration_status: %s\n" % e)
```



### Parameters {#backup_specific_restoration_status-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **str**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type {#backup_specific_restoration_status-return-type}

[**BackupStatus**](../models/BackupStatus)

### Authorization {#backup_specific_restoration_status-authorization}

No authorization required

### HTTP request headers {#backup_specific_restoration_status-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#backup_specific_restoration_status-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Internal Server Error |  -  |
**500** | Internal Server Error |  -  |

