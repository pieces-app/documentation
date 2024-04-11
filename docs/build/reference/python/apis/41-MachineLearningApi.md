# MachineLearning API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personification_technical_language_generation**](MachineLearningApi#personification_technical_language_generation) | **POST** /machine_learning/text/technical_language/generators/personification | /machine_learning/text/technical_language/generators/personification [GET]
[**segment_technical_language**](MachineLearningApi#segment_technical_language) | **POST** /machine_learning/text/technical_language/parsers/segmentation | /machine_learning/text/technical_language/parsers/segmentation [POST]


## **personification_technical_language_generation** {#personification_technical_language_generation}
> OnboardedPersonaDetails personification_technical_language_generation(preonboarded_persona_details=preonboarded_persona_details)

/machine_learning/text/technical_language/generators/personification [GET]

This is going to take in some personification details ie languages & personas.  and will return generated Seeds that can be used as snippets post/pre onboarding.

### Example


```python
import pieces_os_client
from pieces_os_client.models.onboarded_persona_details import OnboardedPersonaDetails
from pieces_os_client.models.preonboarded_persona_details import PreonboardedPersonaDetails
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
    api_instance = pieces_os_client.MachineLearningApi(api_client)
    preonboarded_persona_details = pieces_os_client.PreonboardedPersonaDetails() # PreonboardedPersonaDetails |  (optional)

    try:
        # /machine_learning/text/technical_language/generators/personification [GET]
        api_response = api_instance.personification_technical_language_generation(preonboarded_persona_details=preonboarded_persona_details)
        print("The response of MachineLearningApi->personification_technical_language_generation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineLearningApi->personification_technical_language_generation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preonboarded_persona_details** | [**PreonboardedPersonaDetails**](../models/PreonboardedPersonaDetails)|  | [optional] 

### Return type

[**OnboardedPersonaDetails**](../models/OnboardedPersonaDetails)

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



## **segment_technical_language** {#segment_technical_language}
> SegmentedTechnicalLanguage segment_technical_language(classify=classify, unsegmented_technical_language=unsegmented_technical_language)

/machine_learning/text/technical_language/parsers/segmentation [POST]

This is a functional endpoint that will parse a message or text in to text or code.  if the optional query param is passed along 'classify' then we will optionally classify the just the code that is segmented.

### Example


```python
import pieces_os_client
from pieces_os_client.models.segmented_technical_language import SegmentedTechnicalLanguage
from pieces_os_client.models.unsegmented_technical_language import UnsegmentedTechnicalLanguage
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
    api_instance = pieces_os_client.MachineLearningApi(api_client)
    classify = True # bool | This will let us know if you want us to classifiy your code, this is default to false. (optional)
    unsegmented_technical_language = pieces_os_client.UnsegmentedTechnicalLanguage() # UnsegmentedTechnicalLanguage |  (optional)

    try:
        # /machine_learning/text/technical_language/parsers/segmentation [POST]
        api_response = api_instance.segment_technical_language(classify=classify, unsegmented_technical_language=unsegmented_technical_language)
        print("The response of MachineLearningApi->segment_technical_language:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineLearningApi->segment_technical_language: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classify** | **bool**| This will let us know if you want us to classifiy your code, this is default to false. | [optional] 
 **unsegmented_technical_language** | [**UnsegmentedTechnicalLanguage**](../models/UnsegmentedTechnicalLanguage)|  | [optional] 

### Return type

[**SegmentedTechnicalLanguage**](../models/SegmentedTechnicalLanguage)

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



