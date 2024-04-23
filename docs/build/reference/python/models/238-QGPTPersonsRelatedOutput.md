---
title: QGPTPersonsRelatedOutput | Python SDK
---

# QGPTPersonsRelatedOutput

This model is used for the output of the /qgpt/related/persons endpoint.  Explanations here is a custom object with key value pairs, when the key is the personUUId and the value is an explanation as to why this person was reccommended.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**persons** | [**Persons**](Persons) |  | 
**explanations** | **Dict[str, str]** | This is a Map&lt;String, String&gt; where the the key is a person id. and the value is the explanation. | [optional] 


