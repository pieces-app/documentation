---
title: MachineLearning API | Dart SDK
---

# MachineLearning API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**personificationTechnicalLanguageGeneration**](MachineLearningApi#personificationtechnicallanguagegeneration) | **POST** /machine_learning/text/technical_language/generators/personification | /machine_learning/text/technical_language/generators/personification [GET]
[**segmentTechnicalLanguage**](MachineLearningApi#segmenttechnicallanguage) | **POST** /machine_learning/text/technical_language/parsers/segmentation | /machine_learning/text/technical_language/parsers/segmentation [POST]


## **personificationTechnicalLanguageGeneration** {#personificationtechnicallanguagegeneration}
> OnboardedPersonaDetails personificationTechnicalLanguageGeneration(preonboardedPersonaDetails)

/machine_learning/text/technical_language/generators/personification [GET]

This is going to take in some personification details ie languages & personas.  and will return generated Seeds that can be used as snippets post/pre onboarding.

### Example {#personificationtechnicallanguagegeneration-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = MachineLearningApi();
final preonboardedPersonaDetails = PreonboardedPersonaDetails(); // PreonboardedPersonaDetails | 

try {
    final result = api_instance.personificationTechnicalLanguageGeneration(preonboardedPersonaDetails);
    print(result);
} catch (e) {
    print('Exception when calling MachineLearningApi->personificationTechnicalLanguageGeneration: $e\n');
}
```

### Parameters {#personificationtechnicallanguagegeneration-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preonboardedPersonaDetails** | [**PreonboardedPersonaDetails**](../models/PreonboardedPersonaDetails) |  | [optional] 

### Return type {#personificationtechnicallanguagegeneration-return-type}

[**OnboardedPersonaDetails**](../models/OnboardedPersonaDetails)

### Authorization {#personificationtechnicallanguagegeneration-authorization}

No authorization required

### HTTP request headers {#personificationtechnicallanguagegeneration-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **segmentTechnicalLanguage** {#segmenttechnicallanguage}
> SegmentedTechnicalLanguage segmentTechnicalLanguage(classify, unsegmentedTechnicalLanguage)

/machine_learning/text/technical_language/parsers/segmentation [POST]

This is a functional endpoint that will parse a message or text in to text or code.  if the optional query param is passed along 'classify' then we will optionally classify the just the code that is segmented.

### Example {#segmenttechnicallanguage-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = MachineLearningApi();
final classify = true; // bool | This will let us know if you want us to classifiy your code, this is default to false.
final unsegmentedTechnicalLanguage = UnsegmentedTechnicalLanguage(); // UnsegmentedTechnicalLanguage | 

try {
    final result = api_instance.segmentTechnicalLanguage(classify, unsegmentedTechnicalLanguage);
    print(result);
} catch (e) {
    print('Exception when calling MachineLearningApi->segmentTechnicalLanguage: $e\n');
}
```

### Parameters {#segmenttechnicallanguage-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classify** | **bool** | This will let us know if you want us to classifiy your code, this is default to false. | [optional] 
 **unsegmentedTechnicalLanguage** | [**UnsegmentedTechnicalLanguage**](../models/UnsegmentedTechnicalLanguage) |  | [optional] 

### Return type {#segmenttechnicallanguage-return-type}

[**SegmentedTechnicalLanguage**](../models/SegmentedTechnicalLanguage)

### Authorization {#segmenttechnicallanguage-authorization}

No authorization required

### HTTP request headers {#segmenttechnicallanguage-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

