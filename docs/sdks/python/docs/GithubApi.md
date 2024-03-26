# Github API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**import_github_gists**](GithubApi#import_github_gists) | **POST** /github/gists/import | /github/gists/import [POST]


## **import_github_gists**
> Seeds import_github_gists(automatic=automatic, seeded_github_gists_import=seeded_github_gists_import)

/github/gists/import [POST]

This will attempt to get all the gist availble and return them to the user as a DiscoveredAssets.  if automatic is true we will automatically create the asset.  v1. will just get all the users' gists. v2. can get specific a public gist.

### Example


```python
import pieces_os_client
from pieces_os_client.models.seeded_github_gists_import import SeededGithubGistsImport
from pieces_os_client.models.seeds import Seeds
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
    api_instance = pieces_os_client.GithubApi(api_client)
    automatic = True # bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional) (default to True)
    seeded_github_gists_import = pieces_os_client.SeededGithubGistsImport() # SeededGithubGistsImport |  (optional)

    try:
        # /github/gists/import [POST]
        api_response = api_instance.import_github_gists(automatic=automatic, seeded_github_gists_import=seeded_github_gists_import)
        print("The response of GithubApi->import_github_gists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GithubApi->import_github_gists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to True]
 **seeded_github_gists_import** | [**SeededGithubGistsImport**](SeededGithubGistsImport)|  | [optional] 

### Return type

[**Seeds**](Seeds)

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



