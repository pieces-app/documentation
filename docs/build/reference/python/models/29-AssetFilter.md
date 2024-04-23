---
title: AssetFilter | Python SDK
---

# AssetFilter

** in the future, consider adding an optional bool's called nextAnd, nextOr which will say that the next filter will be  AND behavor or OR behavior.  \"operations\": here is is an optional property to allow or behavior,(we will only allow 1 level deep of or's), if or is not passed in then it is just simply ignored. If or is passed in then we will be or'd together with the top level filter and considered extras. default behavior for operations is and, however yoour can specifiy OR operations as well.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**classification** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**websites** | **List[str]** |  | [optional] 
**persons** | **List[str]** |  | [optional] 
**phrase** | [**AssetFilterPhrase**](AssetFilterPhrase) |  | [optional] 
**created** | [**AssetFilterTimestamp**](AssetFilterTimestamp) |  | [optional] 
**updated** | [**AssetFilterTimestamp**](AssetFilterTimestamp) |  | [optional] 
**operations** | [**AssetFilters**](AssetFilters) |  | [optional] 


