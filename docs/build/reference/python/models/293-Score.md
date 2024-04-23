---
title: Score | Python SDK
---

# Score

This is use as the score for an asset.  Manual: will be the raw sum of the asset activity events ranks with mechanismEnum == manual Automatic: will be the raw sum of the asset activity events ranks with mechanismEnum == automatic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**manual** | **int** | These are points assigned via manual user driven events. | 
**automatic** | **int** | These are point assigned via automatic activity events. | 
**priority** | **int** |  | [optional] 
**reuse** | **int** |  | [optional] 
**update** | **int** |  | [optional] 
**reference** | **int** |  | [optional] 


