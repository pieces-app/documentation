
# QGPTRelevanceInputOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**database** | **kotlin.Boolean** | This is an optional boolen that will tell us to use our entire snippet database as the sample. |  [optional]
**question** | **kotlin.Boolean** | This is an optional boolean, that will let the serve know if you want to combine the 2 endpointsboth relevance &amp;&amp; the Question endpoint to return the final results. |  [optional]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline.md) |  |  [optional]



