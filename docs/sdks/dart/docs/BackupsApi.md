# core_openapi.api.BackupsApi

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backupsCreateNewBackup**](BackupsApi#backupscreatenewbackup) | **POST** /backups/create | /backups/create [POST]
[**backupsCreateNewBackupStreamed**](BackupsApi#backupscreatenewbackupstreamed) | **POST** /backups/create/streamed | /backups/create/streamed [POST]
[**backupsDeleteSpecificBackup**](BackupsApi#backupsdeletespecificbackup) | **POST** /backups/{backup}/delete | /backups/{backup}/delete [POST]
[**backupsSnapshot**](BackupsApi#backupssnapshot) | **GET** /backups | /backups [GET]


# **backupsCreateNewBackup**
> Backup backupsCreateNewBackup(seededBackup)

/backups/create [POST]

This take a local database and ensure that it is backed up to the cloud.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupsApi();
final seededBackup = SeededBackup(); // SeededBackup | 

try {
    final result = api_instance.backupsCreateNewBackup(seededBackup);
    print(result);
} catch (e) {
    print('Exception when calling BackupsApi->backupsCreateNewBackup: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | [**SeededBackup**](SeededBackup)|  | [optional] 

### Return type

[**Backup**](Backup)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **backupsCreateNewBackupStreamed**
> BackupStreamedProgress backupsCreateNewBackupStreamed(seededBackup)

/backups/create/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupsApi();
final seededBackup = SeededBackup(); // SeededBackup | 

try {
    final result = api_instance.backupsCreateNewBackupStreamed(seededBackup);
    print(result);
} catch (e) {
    print('Exception when calling BackupsApi->backupsCreateNewBackupStreamed: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | [**SeededBackup**](SeededBackup)|  | [optional] 

### Return type

[**BackupStreamedProgress**](BackupStreamedProgress)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **backupsDeleteSpecificBackup**
> backupsDeleteSpecificBackup(backup, backup2)

/backups/{backup}/delete [POST]

This will delete a specific backup from the cloud.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupsApi();
final backup = backup_example; // String | This is a identifier that is used to identify a specific backup.(version_timestamp)
final backup2 = Backup(); // Backup | 

try {
    api_instance.backupsDeleteSpecificBackup(backup, backup2);
} catch (e) {
    print('Exception when calling BackupsApi->backupsDeleteSpecificBackup: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](Backup)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **backupsSnapshot**
> Backups backupsSnapshot()

/backups [GET]

This will get a snapshot of Backsup within the cloud.  This endpoint requires our user to be authenticated and connected to the cloud.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupsApi();

try {
    final result = api_instance.backupsSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling BackupsApi->backupsSnapshot: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Backups**](Backups)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

