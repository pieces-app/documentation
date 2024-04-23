---
title: Database API | Dart SDK
---

# Database API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**databaseExport**](DatabaseApi#databaseexport) | **GET** /database/export | Your GET endpoint
[**databaseImport**](DatabaseApi#databaseimport) | **POST** /database/import | /database/import [POST]


## **databaseExport** {#databaseexport}
> ExportedDatabase databaseExport()

Your GET endpoint

This is going to export your current database.

### Example {#databaseexport-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = DatabaseApi();

try {
    final result = api_instance.databaseExport();
    print(result);
} catch (e) {
    print('Exception when calling DatabaseApi->databaseExport: $e\n');
}
```

### Parameters {#databaseexport-parameters}
This endpoint does not need any parameter.

### Return type {#databaseexport-return-type}

[**ExportedDatabase**](../models/ExportedDatabase)

### Authorization {#databaseexport-authorization}

No authorization required

### HTTP request headers {#databaseexport-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **databaseImport** {#databaseimport}
> databaseImport(exportedDatabase)

/database/import [POST]

This is going to take in a database, and merge it with the current database. This will revert your database back to it original form if this request fails.

### Example {#databaseimport-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = DatabaseApi();
final exportedDatabase = ExportedDatabase(); // ExportedDatabase | 

try {
    api_instance.databaseImport(exportedDatabase);
} catch (e) {
    print('Exception when calling DatabaseApi->databaseImport: $e\n');
}
```

### Parameters {#databaseimport-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportedDatabase** | [**ExportedDatabase**](../models/ExportedDatabase) |  | [optional] 

### Return type {#databaseimport-return-type}

void (empty response body)

### Authorization {#databaseimport-authorization}

No authorization required

### HTTP request headers {#databaseimport-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

