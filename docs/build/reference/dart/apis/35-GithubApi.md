# Github API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**importGithubGists**](GithubApi#importgithubgists) | **POST** /github/gists/import


## **importGithubGists** {#importgithubgists}
> Seeds importGithubGists(automatic, seededGithubGistsImport)

/github/gists/import [POST]

This will attempt to get all the gist availble and return them to the user as a DiscoveredAssets.  if automatic is true we will automatically create the asset.  v1. will just get all the users' gists. implemented. v2. can get specific a public gist.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = GithubApi();
final automatic = true; // bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
final seededGithubGistsImport = SeededGithubGistsImport(); // SeededGithubGistsImport | 

try {
    final result = api_instance.importGithubGists(automatic, seededGithubGistsImport);
    print(result);
} catch (e) {
    print('Exception when calling GithubApi->importGithubGists: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededGithubGistsImport** | [**SeededGithubGistsImport**](../models/SeededGithubGistsImport)|  | [optional] 

### Return type

[**Seeds**](../models/Seeds)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



