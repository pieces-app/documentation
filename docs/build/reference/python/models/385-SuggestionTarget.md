---
title: SuggestionTarget | Python SDK
---

# SuggestionTarget

This is the target that was sent to pieces. This will return the string that represents this coppied || pasted asset. This will also send along the SeededConnectorCreation and will send along the vector that we created based on the seed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**seed** | [**SeededConnectorCreation**](SeededConnectorCreation) |  | 
**vector** | **int** | This is the vector representation of this target that we generated. | 


