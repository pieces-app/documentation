---
title: LinkifyMultiple | Python SDK
---

# LinkifyMultiple

This is the incoming linkify model.  if access is PRIVATE then please provide and array of users to enable the link for.  Assumption, all assets are already backed up to the cloud. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**assets** | **List[str]** | This is an array or string that represents an already backed up asset. That will be added to a collection. | 
**users** | [**List[SeededUser]**](SeededUser) | this is an array of users. | [optional] 
**access** | [**AccessEnum**](AccessEnum) |  | 
**name** | **str** | optionally can give the collection a name if you want. | [optional] 


