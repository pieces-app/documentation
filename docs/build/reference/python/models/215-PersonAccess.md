---
title: PersonAccess | Python SDK
---

# PersonAccess

if scoped is provided will let us know what level of permission(access) this specific person has in relation to what scope.(collection, asset,...etc)  in the future will expand to global (with its own enumeration for a global entire project/cloud scope)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**scoped** | [**PersonAccessScopedEnum**](PersonAccessScopedEnum) |  | [optional] 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 


