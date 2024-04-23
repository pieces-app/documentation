---
title: Accessor | Python SDK
---

# Accessor

This is used to determine who has accessed a share. and how many times.  The user here is the user that accessed this Piece.(optional) if undefined then this user was not logged in yet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**os** | **str** | this is an os id. | 
**share** | **str** |  | 
**count** | **int** | how many times this user accessed this piece. | 
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] 


