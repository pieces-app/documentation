---
title: TLPCodeSnippetTagifyCode | Python SDK
---

# TLPCodeSnippetTagifyCode



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**distribution** | **str** | stringified array of numbers | 
**inferred_distribution** | **str** | stringified array of numbers | 
**tags** | **str** | stringified array of strings | 
**inferred_tags** | **str** | stringified array of strings | 
**model** | **str** | this is the model version  | 
**label_version** | **str** | This is the version of the file that we are using that contains all the possible tags | 
**threshold** | **float** | this is the minimum score from the model that a tag needs to have to be included in the tags array. | 
**inferred_threshold** | **float** | this is the minimum score from the postprocessing that a tag needs to have to be included in the inferred_tags array. | 
**context** | **str** | this is the origin in which this asset was created, application(string representation) | 
**asset** | **str** | This is the asset id. | 


