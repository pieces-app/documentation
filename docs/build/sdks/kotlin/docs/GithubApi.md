# Github API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**importGithubGists**](GithubApi.md#importGithubGists) | **POST** /github/gists/import | /github/gists/import [POST]


<a id="importGithubGists"></a>
## **importGithubGists**
> Seeds importGithubGists(automatic, seededGithubGistsImport)

/github/gists/import [POST]

This will attempt to get all the gist availble and return them to the user as a DiscoveredAssets.  if automatic is true we will automatically create the asset.  v1. will just get all the users&#39; gists. &lt;- implemented. v2. can get specific a public gist.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GithubApi()
val automatic : kotlin.Boolean = true // kotlin.Boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
val seededGithubGistsImport : SeededGithubGistsImport =  // SeededGithubGistsImport | 
try {
    val result : Seeds = apiInstance.importGithubGists(automatic, seededGithubGistsImport)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GithubApi#importGithubGists")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GithubApi#importGithubGists")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **kotlin.Boolean**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededGithubGistsImport** | [**SeededGithubGistsImport**](SeededGithubGistsImport.md)|  | [optional]

### Return type

[**Seeds**](Seeds.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

