# Database API

## Load the API package
```dart
import 'package:pieces_os_client/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**databaseExport**](DatabaseApi#databaseexport) | **GET** /database/export | Your GET endpoint
[**databaseImport**](DatabaseApi#databaseimport) | **POST** /database/import | /database/import [POST]


## **databaseExport**
> ExportedDatabase databaseExport()

Your GET endpoint

This is going to export your current database.

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = DatabaseApi();

try {
    final result = api_instance.databaseExport();
    print(result);
} catch (e) {
    print('Exception when calling DatabaseApi->databaseExport: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ExportedDatabase**](../models/ExportedDatabase)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **databaseImport**
> databaseImport(exportedDatabase)

/database/import [POST]

This is going to take in a database, and merge it with the current database. This will revert your database back to it original form if this request fails.

### Example
```dart
import 'package:pieces_os_client/api.dart';

final api_instance = DatabaseApi();
final exportedDatabase = ExportedDatabase(); // ExportedDatabase | 

try {
    api_instance.databaseImport(exportedDatabase);
} catch (e) {
    print('Exception when calling DatabaseApi->databaseImport: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportedDatabase** | [**ExportedDatabase**](../models/ExportedDatabase)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



