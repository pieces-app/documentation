---
title: TLPCodeFragmentClassification | Python SDK
---

# TLPCodeFragmentClassification

Model for ML big query classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | **str** |  | 
**model** | **str** |  | 
**created** | **str** |  | 
**classification** | **str** |  | 
**probability** | **float** |  | 
**context** | **str** |  | 
**distribution** | **str** |  | [optional] 
**metadata** | [**TLPCodeFragmentClassificationMetadata**](TLPCodeFragmentClassificationMetadata) |  | [optional] 
**user** | **str** | identifier for the user | 
**latency** | **float** | this is the time it takes to run this model. | [optional] 
**system** | [**SystemExecutionInformation**](SystemExecutionInformation) |  | [optional] 


