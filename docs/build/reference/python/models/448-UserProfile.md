---
title: UserProfile | Python SDK
---

# UserProfile

This is the model for a user logged into Pieces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**picture** | **str** | mapped from picture.URL pointing to the user&#39;s profile picture.  | [optional] [default to 'https://picsum.photos/200']
**email** | **str** |  | [optional] [default to 'user@pieces.app']
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**username** | **str** |  (unique) User&#39;s username.   | [optional] 
**id** | **str** |  | 
**name** | **str** | This is the name of the User. | [optional] 
**aesthetics** | [**Aesthetics**](Aesthetics) |  | 
**vanityname** | **str** |  | [optional] 
**allocation** | [**AllocationCloud**](AllocationCloud) |  | [optional] 
**providers** | [**ExternalProviders**](ExternalProviders) |  | [optional] 
**auth0** | [**Auth0UserMetadata**](Auth0UserMetadata) |  | [optional] 


