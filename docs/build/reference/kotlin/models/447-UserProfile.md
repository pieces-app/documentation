---
title: UserProfile | Kotlin SDK
---


# UserProfile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**aesthetics** | [**Aesthetics**](Aesthetics) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**picture** | **java.net.URI** | mapped from picture.URL pointing to the user&#39;s profile picture.  |  [optional]
**email** | **kotlin.String** |  |  [optional]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**username** | **kotlin.String** |  (unique) User&#39;s username.   |  [optional]
**name** | **kotlin.String** | This is the name of the User. |  [optional]
**vanityname** | **kotlin.String** |  |  [optional]
**allocation** | [**AllocationCloud**](AllocationCloud) |  |  [optional]
**providers** | [**ExternalProviders**](ExternalProviders) |  |  [optional]
**auth0** | [**Auth0UserMetadata**](Auth0UserMetadata) |  |  [optional]



