---
title: CodeAnalysis | Python SDK
---

# CodeAnalysis

This is the ML Analysis object Specific to code.  prediction and similarity are custom types. ** please dont not modify **

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**tokenized** | **List[str]** |  | [optional] 
**language** | **str** |  | [optional] 
**type** | [**ClassificationGenericEnum**](ClassificationGenericEnum) |  | 
**prediction** | **Dict[str, float]** |  | [optional] 
**similarity** | **Dict[str, float]** |  | [optional] 
**top5_colors** | **List[int]** |  | [optional] 
**top5_sorted** | **List[str]** |  | [optional] 
**id** | **str** |  | 
**analysis** | **str** | this is just a reference to the analysis parent object. | 
**model** | [**Model**](Model) |  | 


