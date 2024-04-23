---
title: QGPTTaskPipelineForCodeModification | Python SDK
---

# QGPTTaskPipelineForCodeModification

This task is for modifying a bit of code, IE modify this code to do xyz.  This is a class so that we can add optional properties in the future.  Note: the snippet && language that needs to be modified should be within the QGPTQuestionInput.relevant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**instruction** | **str** | This is the instruction that we will use to modify this snippet. | [optional] 


