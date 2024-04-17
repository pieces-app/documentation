---
title: Backups API | Python SDK
---

# Backups API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backups_create_new_backup**](BackupsApi#backups_create_new_backup) | **POST** /backups/create | /backups/create [POST]
[**backups_create_new_backup_streamed**](BackupsApi#backups_create_new_backup_streamed) | **POST** /backups/create/streamed | /backups/create/streamed [POST]
[**backups_delete_specific_backup**](BackupsApi#backups_delete_specific_backup) | **POST** /backups/\{backup\}/delete | /backups/\{backup\}/delete [POST]
[**backups_snapshot**](BackupsApi#backups_snapshot) | **GET** /backups | /backups [GET]


## **backups_create_new_backup** {#backups_create_new_backup}
> Backup backups_create_new_backup(seeded_backup=seeded_backup)

/backups/create [POST]

This take a local database and ensure that it is backed up to the cloud.

### Example


```python
import pieces_os_client
from pieces_os_client.models.backup import Backup
from pieces_os_client.models.seeded_backup import SeededBackup
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
    api_instance = Backups API(api_client)
    seeded_backup = pieces_os_client.SeededBackup() # SeededBackup |  (optional)

    try:
        # /backups/create [POST]
        api_response = api_instance.backups_create_new_backup(seeded_backup=seeded_backup)
        print("The response of BackupsApi->backups_create_new_backup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupsApi->backups_create_new_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seeded_backup** | [**SeededBackup**](../models/SeededBackup)|  | [optional] 

### Return type

[**Backup**](../models/Backup)

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
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operations with the cloud |  -  |



## **backups_create_new_backup_streamed** {#backups_create_new_backup_streamed}
> BackupStreamedProgress backups_create_new_backup_streamed(seeded_backup=seeded_backup)

/backups/create/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example


```python
import pieces_os_client
from pieces_os_client.models.backup_streamed_progress import BackupStreamedProgress
from pieces_os_client.models.seeded_backup import SeededBackup
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
    api_instance = Backups API(api_client)
    seeded_backup = pieces_os_client.SeededBackup() # SeededBackup |  (optional)

    try:
        # /backups/create/streamed [POST]
        api_response = api_instance.backups_create_new_backup_streamed(seeded_backup=seeded_backup)
        print("The response of BackupsApi->backups_create_new_backup_streamed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupsApi->backups_create_new_backup_streamed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seeded_backup** | [**SeededBackup**](../models/SeededBackup)|  | [optional] 

### Return type

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

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
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |



## **backups_delete_specific_backup** {#backups_delete_specific_backup}
> backups_delete_specific_backup(backup, backup2=backup2)

/backups/\{backup\}/delete [POST]

This will delete a specific backup from the cloud.

### Example


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
    api_instance = Backups API(api_client)
    backup = 'backup_example' # str | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup2 = pieces_os_client.Backup() # Backup |  (optional)

    try:
        # /backups/\{backup\}/delete [POST]
        api_instance.backups_delete_specific_backup(backup, backup2=backup2)
    except Exception as e:
        print("Exception when calling BackupsApi->backups_delete_specific_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **str**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](../models/Backup)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |



## **backups_snapshot** {#backups_snapshot}
> Backups backups_snapshot()

/backups [GET]

This will get a snapshot of Backsup within the cloud.  This endpoint requires our user to be authenticated and connected to the cloud.

### Example


```python
import pieces_os_client
from pieces_os_client.models.backups import Backups
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
    api_instance = Backups API(api_client)

    try:
        # /backups [GET]
        api_response = api_instance.backups_snapshot()
        print("The response of BackupsApi->backups_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupsApi->backups_snapshot: %s\n" % e)
```



### Parameters

This endpoint does not need any parameters.

### Return type

[**Backups**](../models/Backups)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operations with the cloud |  -  |



