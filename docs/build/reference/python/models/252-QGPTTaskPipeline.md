---
title: QGPTTaskPipeline | Python SDK
---

# QGPTTaskPipeline

This model is specifically for QGPT Task pipelines, the model is used to group one off tasks for instance fix/explaining/commenting that dont necessarily require a conversation form factor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**code_explanation** | [**QGPTTaskPipelineForCodeExplanation**](QGPTTaskPipelineForCodeExplanation) |  | [optional] 
**code_commentation** | [**QGPTTaskPipelineForCodeCommentation**](QGPTTaskPipelineForCodeCommentation) |  | [optional] 
**code_fix** | [**QGPTTaskPipelineForCodeFix**](QGPTTaskPipelineForCodeFix) |  | [optional] 
**code_modification** | [**QGPTTaskPipelineForCodeModification**](QGPTTaskPipelineForCodeModification) |  | [optional] 
**code_completion** | [**QGPTTaskPipelineForCodeCompletion**](QGPTTaskPipelineForCodeCompletion) |  | [optional] 


