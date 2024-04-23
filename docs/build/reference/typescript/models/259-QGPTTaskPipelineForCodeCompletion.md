---
title: QGPTTaskPipelineForCodeCompletion | TypeScript SDK
---


# QGPTTaskPipelineForCodeCompletion

This task is for code_completion ie auto-complete.  This is a class so that we can add optional properties in the future.  context: This is additional snippet context within the file that will be useful for the autocompletion.(PLEASE ONLY pass in Seed.asset.format.fragment.string.raw for the context snippet values, and for the classificaiton pass in Seed.asset.format.classification)  Note: the snippet && language that needs to be Actually AutoCompleted should be within the QGPTQuestionInput.relevant.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**context** | **Array&lt;string&gt;**


