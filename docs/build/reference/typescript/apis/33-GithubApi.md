# Github API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**importGithubGists**](GithubApi#importgithubgists) | **POST** /github/gists/import | /github/gists/import [POST]


## **importGithubGists**
> Seeds importGithubGists()

This will attempt to get all the gist availble and return them to the user as a DiscoveredAssets.  if automatic is true we will automatically create the asset.  v1. will just get all the users\' gists. implemented. v2. can get specific a public gist.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.GithubApi(configuration);

let body:.GithubApiImportGithubGistsRequest = {
    // boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional)
    automatic: true,
    // SeededGithubGistsImport |  (optional)
    seededGithubGistsImport: ,
};

apiInstance.importGithubGists(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededGithubGistsImport** | **SeededGithubGistsImport**|  |
 **automatic** | [**boolean**] | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | (optional) defaults to true


### Return type

**Seeds**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**412** | Precondition Failed, This means the user was not authenticated with PiecesOS with github. |  -  |
**500** | Internal Server Error |  -  |
**511** | Network Authentication Required, Not logged into Pieces os required the user to authenticate. or if the user is not connected to their cloud. |  -  |




