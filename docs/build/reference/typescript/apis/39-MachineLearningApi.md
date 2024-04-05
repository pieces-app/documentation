# MachineLearning API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personificationTechnicalLanguageGeneration**](MachineLearningApi#personificationtechnicallanguagegeneration) | **POST** /machine_learning/text/technical_language/generators/personification | /machine_learning/text/technical_language/generators/personification [GET]
[**segmentTechnicalLanguage**](MachineLearningApi#segmenttechnicallanguage) | **POST** /machine_learning/text/technical_language/parsers/segmentation | /machine_learning/text/technical_language/parsers/segmentation [POST]


## **personificationTechnicalLanguageGeneration**
> OnboardedPersonaDetails personificationTechnicalLanguageGeneration()

This is going to take in some personification details ie languages & personas.  and will return generated Seeds that can be used as snippets post/pre onboarding.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.MachineLearningApi(configuration);

let body:.MachineLearningApiPersonificationTechnicalLanguageGenerationRequest = {
    // PreonboardedPersonaDetails (optional)
    preonboardedPersonaDetails: ,
};

apiInstance.personificationTechnicalLanguageGeneration(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preonboardedPersonaDetails** | **PreonboardedPersonaDetails**|  |


### Return type

**OnboardedPersonaDetails**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **segmentTechnicalLanguage**
> SegmentedTechnicalLanguage segmentTechnicalLanguage()

This is a functional endpoint that will parse a message or text in to text or code.  if the optional query param is passed along \'classify\' then we will optionally classify the just the code that is segmented.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.MachineLearningApi(configuration);

let body:.MachineLearningApiSegmentTechnicalLanguageRequest = {
    // boolean | This will let us know if you want us to classifiy your code, this is default to false. (optional)
    classify: true,
    // UnsegmentedTechnicalLanguage (optional)
    unsegmentedTechnicalLanguage: ,
};

apiInstance.segmentTechnicalLanguage(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unsegmentedTechnicalLanguage** | **UnsegmentedTechnicalLanguage**|  |
 **classify** | [**boolean**] | This will let us know if you want us to classifiy your code, this is default to false. | (optional) defaults to undefined


### Return type

**SegmentedTechnicalLanguage**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |




