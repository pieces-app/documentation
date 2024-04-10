# OpenAI Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**openAiModelsList**](OpenAIApi#openaimodelslist) | **POST** /open_ai/models/list


## **openAiModelsList** {#openaimodelslist}
> OpenAIModelsListOutput openAiModelsList()

This will get a list of all of your Models from OpenAI w/ you user.auth0.openAI.apiKey.  if the user is unauthenticated or if the openAI key doesnt exist or if it is invalid we will return a 401.  Requires internet as this will ping out to OpenAI\'s server to get the models.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OpenAIApi(configuration)

const body: Pieces.OpenAiModelsListRequest = {
    // OpenAIModelsListInput (optional)
    openAIModelsListInput: ,
};

apiInstance.openAiModelsList(body).then((data: OpenAIModelsListOutput) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openAIModelsListInput** | **OpenAIModelsListInput**|  |


### Return Model type

[**OpenAIModelsListOutput**](../models/OpenAIModelsListOutput)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |


