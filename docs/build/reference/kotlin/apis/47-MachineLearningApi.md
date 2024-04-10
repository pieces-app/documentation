# MachineLearning API

All URIs are relative to *http://localhost:3000*

Method | HTTP request
------------- | -------------
[**personificationTechnicalLanguageGeneration**](#personificationtechnicallanguagegeneration) | **POST** /machine_learning/text/technical_language/generators/personification
[**segmentTechnicalLanguage**](#segmenttechnicallanguage) | **POST** /machine_learning/text/technical_language/parsers/segmentation


<a id="personificationTechnicalLanguageGeneration"></a>
## **personificationTechnicalLanguageGeneration** {#personificationtechnicallanguagegeneration}
> OnboardedPersonaDetails personificationTechnicalLanguageGeneration(preonboardedPersonaDetails)

/machine_learning/text/technical_language/generators/personification [GET]

This is going to take in some personification details ie languages &amp; personas.  and will return generated Seeds that can be used as snippets post/pre onboarding.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
 **preonboardedPersonaDetails** | [**PreonboardedPersonaDetails**](../models/PreonboardedPersonaDetails)|  | [optional] 

### Return type

[**OnboardedPersonaDetails**](../models/OnboardedPersonaDetails)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="segmentTechnicalLanguage"></a>
## **segmentTechnicalLanguage** {#segmenttechnicallanguage}
> SegmentedTechnicalLanguage segmentTechnicalLanguage(classify, unsegmentedTechnicalLanguage)

/machine_learning/text/technical_language/parsers/segmentation [POST]

This is a functional endpoint that will parse a message or text in to text or code.  if the optional query param is passed along &#39;classify&#39; then we will optionally classify the just the code that is segmented.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
 **unsegmentedTechnicalLanguage** | [**UnsegmentedTechnicalLanguage**](../models/UnsegmentedTechnicalLanguage)|  | [optional] 

### Return type

[**SegmentedTechnicalLanguage**](../models/SegmentedTechnicalLanguage)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

