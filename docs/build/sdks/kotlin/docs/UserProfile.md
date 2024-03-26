
# UserProfile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**aesthetics** | [**Aesthetics**](Aesthetics.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**picture** | [**java.net.URI**](java.net.URI) | mapped from picture.URL pointing to the user&#39;s profile picture.  |  [optional]
**email** | **kotlin.String** |  |  [optional]
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**username** | **kotlin.String** |  (unique) User&#39;s username.   |  [optional]
**name** | **kotlin.String** | This is the name of the User. |  [optional]
**vanityname** | **kotlin.String** |  |  [optional]
**allocation** | [**AllocationCloud**](AllocationCloud.md) |  |  [optional]
**providers** | [**ExternalProviders**](ExternalProviders.md) |  |  [optional]
**auth0** | [**Auth0UserMetadata**](Auth0UserMetadata.md) |  |  [optional]



