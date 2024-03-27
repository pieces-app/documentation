
# TLPCodeSnippetTagifyCode

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution** | **kotlin.String** | stringified array of numbers | 
**inferredDistribution** | **kotlin.String** | stringified array of numbers | 
**tags** | **kotlin.String** | stringified array of strings | 
**inferredTags** | **kotlin.String** | stringified array of strings | 
**model** | **kotlin.String** | this is the model version  | 
**labelVersion** | **kotlin.String** | This is the version of the file that we are using that contains all the possible tags | 
**threshold** | **java.math.BigDecimal** | this is the minimum score from the model that a tag needs to have to be included in the tags array. | 
**inferredThreshold** | **java.math.BigDecimal** | this is the minimum score from the postprocessing that a tag needs to have to be included in the inferred_tags array. | 
**context** | **kotlin.String** | this is the origin in which this asset was created, application(string representation) | 
**asset** | **kotlin.String** | This is the asset id. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]



