# MachineLearning API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personificationTechnicalLanguageGeneration**](MachineLearningApi#personificationTechnicalLanguageGeneration) | **POST** /machine_learning/text/technical_language/generators/personification | /machine_learning/text/technical_language/generators/personification [GET]
[**segmentTechnicalLanguage**](MachineLearningApi#segmentTechnicalLanguage) | **POST** /machine_learning/text/technical_language/parsers/segmentation | /machine_learning/text/technical_language/parsers/segmentation [POST]


<a id="personificationTechnicalLanguageGeneration"></a>
## **personificationTechnicalLanguageGeneration**
> OnboardedPersonaDetails personificationTechnicalLanguageGeneration(preonboardedPersonaDetails)

/machine_learning/text/technical_language/generators/personification [GET]

This is going to take in some personification details ie languages &amp; personas.  and will return generated Seeds that can be used as snippets post/pre onboarding.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = MachineLearningApi()
val preonboardedPersonaDetails : PreonboardedPersonaDetails =  // PreonboardedPersonaDetails | 
try {
    val result : OnboardedPersonaDetails = apiInstance.personificationTechnicalLanguageGeneration(preonboardedPersonaDetails)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MachineLearningApi#personificationTechnicalLanguageGeneration")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MachineLearningApi#personificationTechnicalLanguageGeneration")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preonboardedPersonaDetails** | [**PreonboardedPersonaDetails**](PreonboardedPersonaDetails)|  | [optional]

### Return type

[**OnboardedPersonaDetails**](OnboardedPersonaDetails)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="segmentTechnicalLanguage"></a>
## **segmentTechnicalLanguage**
> SegmentedTechnicalLanguage segmentTechnicalLanguage(classify, unsegmentedTechnicalLanguage)

/machine_learning/text/technical_language/parsers/segmentation [POST]

This is a functional endpoint that will parse a message or text in to text or code.  if the optional query param is passed along &#39;classify&#39; then we will optionally classify the just the code that is segmented.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = MachineLearningApi()
val classify : kotlin.Boolean = true // kotlin.Boolean | This will let us know if you want us to classifiy your code, this is default to false.
val unsegmentedTechnicalLanguage : UnsegmentedTechnicalLanguage =  // UnsegmentedTechnicalLanguage | 
try {
    val result : SegmentedTechnicalLanguage = apiInstance.segmentTechnicalLanguage(classify, unsegmentedTechnicalLanguage)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MachineLearningApi#segmentTechnicalLanguage")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MachineLearningApi#segmentTechnicalLanguage")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classify** | **kotlin.Boolean**| This will let us know if you want us to classifiy your code, this is default to false. | [optional]
 **unsegmentedTechnicalLanguage** | [**UnsegmentedTechnicalLanguage**](UnsegmentedTechnicalLanguage)|  | [optional]

### Return type

[**SegmentedTechnicalLanguage**](SegmentedTechnicalLanguage)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

