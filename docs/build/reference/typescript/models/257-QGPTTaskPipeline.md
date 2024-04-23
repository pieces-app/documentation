---
title: QGPTTaskPipeline | TypeScript SDK
---


# QGPTTaskPipeline

This model is specifically for QGPT Task pipelines, the model is used to group one off tasks for instance fix/explaining/commenting that dont necessarily require a conversation form factor.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**codeExplanation** | [**QGPTTaskPipelineForCodeExplanation**](QGPTTaskPipelineForCodeExplanation)
**codeCommentation** | [**QGPTTaskPipelineForCodeCommentation**](QGPTTaskPipelineForCodeCommentation)
**codeFix** | [**QGPTTaskPipelineForCodeFix**](QGPTTaskPipelineForCodeFix)
**codeModification** | [**QGPTTaskPipelineForCodeModification**](QGPTTaskPipelineForCodeModification)
**codeCompletion** | [**QGPTTaskPipelineForCodeCompletion**](QGPTTaskPipelineForCodeCompletion)


