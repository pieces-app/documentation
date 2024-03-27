# OpenAI API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**openAiModelsList**](OpenAIApi.md#openAiModelsList) | **POST** /open_ai/models/list | /open_ai/models/list [POST]


<a id="openAiModelsList"></a>
## **openAiModelsList**
> OpenAIModelsListOutput openAiModelsList(openAIModelsListInput)

/open_ai/models/list [POST]

This will get a list of all of your Models from OpenAI w/ you user.auth0.openAI.apiKey.  if the user is unauthenticated or if the openAI key doesnt exist or if it is invalid we will return a 401.  Requires internet as this will ping out to OpenAI&#39;s server to get the models.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = OpenAIApi()
val openAIModelsListInput : OpenAIModelsListInput =  // OpenAIModelsListInput | 
try {
    val result : OpenAIModelsListOutput = apiInstance.openAiModelsList(openAIModelsListInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OpenAIApi#openAiModelsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OpenAIApi#openAiModelsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openAIModelsListInput** | [**OpenAIModelsListInput**](OpenAIModelsListInput.md)|  | [optional]

### Return type

[**OpenAIModelsListOutput**](OpenAIModelsListOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
