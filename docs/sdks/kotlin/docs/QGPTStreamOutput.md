
# QGPTStreamOutput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | **kotlin.String** | This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question) | 
**request** | **kotlin.String** | This is the id used to represent the stream of response. this will always be present. We will use the value passed inby the client, or we will generate one. |  [optional]
**relevance** | [**QGPTRelevanceOutput**](QGPTRelevanceOutput.md) |  |  [optional]
**question** | [**QGPTQuestionOutput**](QGPTQuestionOutput.md) |  |  [optional]
**status** | [**QGPTStreamEnum**](QGPTStreamEnum.md) |  |  [optional]
**statusCode** | [**java.math.BigDecimal**](java.math.BigDecimal) | This will be provided |  [optional]
**errorMessage** | **kotlin.String** | optional error message is the status code is NOT 200 |  [optional]
**agentRoutes** | [**QGPTAgentRoutes**](QGPTAgentRoutes.md) |  |  [optional]



