---
title: QGPTTaskPipelineForCodeFix | Python SDK
---

# QGPTTaskPipelineForCodeFix

This task is for fixing a bit of code.  This is a class so that we can add optional properties in the future.  Note: the snippet && language that needs to be fixed should be within the QGPTQuestionInput.relevant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**error** | **str** | This is the error message provided from the IDE, that we can use to provide the solution. | [optional] 


