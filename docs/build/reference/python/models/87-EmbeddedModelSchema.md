---
title: EmbeddedModelSchema | Python SDK
---

# EmbeddedModelSchema

This is a model that will keep track of all of our version related to our models. ie (1) the database migration and (2) the global semantic version of the api.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration** | **int** | this is the current database version that this model was used for. | 
**semantic** | [**EmbeddedModelSchemaSemanticVersionEnum**](EmbeddedModelSchemaSemanticVersionEnum) |  | 


