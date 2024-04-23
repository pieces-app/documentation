---
title: SeededPerson | Python SDK
---

# SeededPerson

This is a per-cursor to a full person.  Will throw an error, if asset is passed in but acces.scope is undefined.  can optionally pass in our mechanism here, as the default will be manual unless specified.  TODO consider updating these asset, format to referenced Models  Note: model, access, mechanism will only be added if the asset is passed in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | **str** |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**access** | [**PersonAccess**](PersonAccess) |  | [optional] 
**type** | [**PersonType**](PersonType) |  | 
**model** | [**PersonModel**](PersonModel) |  | [optional] 
**annotations** | [**List[SeededAnnotation]**](SeededAnnotation) |  | [optional] 


