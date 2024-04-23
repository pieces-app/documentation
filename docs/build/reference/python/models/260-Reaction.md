---
title: Reaction | Python SDK
---

# Reaction

This will the the Request body of the Request Endpoint.  Reuse will not be required here because we do NOT know if the user will choose to reuse what we have suggested.  save will however be required because this will let us know if we should save the coppied asset that was first sent over or not.  seed is required, because we will want to know 100% sure what the original suggestion was made against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**save** | **bool** | This will just be a simple boolean here that will say if the use should save the asset or not. | 
**reuse** | [**ReuseReaction**](ReuseReaction) |  | [optional] 
**seed** | [**SeededConnectorCreation**](SeededConnectorCreation) |  | 


