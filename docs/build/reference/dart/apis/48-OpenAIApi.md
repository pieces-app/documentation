# OpenAI API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**openAiModelsList**](OpenAIApi#openaimodelslist) | **POST** /open_ai/models/list


## **openAiModelsList** {#openaimodelslist}
> OpenAIModelsListOutput openAiModelsList(openAIModelsListInput)

/open_ai/models/list [POST]

This will get a list of all of your Models from OpenAI w/ you user.auth0.openAI.apiKey.  if the user is unauthenticated or if the openAI key doesnt exist or if it is invalid we will return a 401.  Requires internet as this will ping out to OpenAI's server to get the models.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OpenAIApi();
final openAIModelsListInput = OpenAIModelsListInput(); // OpenAIModelsListInput | 

try {
    final result = api_instance.openAiModelsList(openAIModelsListInput);
    print(result);
} catch (e) {
    print('Exception when calling OpenAIApi->openAiModelsList: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openAIModelsListInput** | [**OpenAIModelsListInput**](../models/OpenAIModelsListInput)|  | [optional] 

### Return type

[**OpenAIModelsListOutput**](../models/OpenAIModelsListOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



