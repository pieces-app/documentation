
# TrackedUserProfile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**java.util.UUID**](java.util.UUID) | The ID of the user that you are tracking. | 
**username** | **kotlin.String** | This is a username that is attempted to be assigned but is \&quot;Anonymous User\&quot; by default | 
**granularity** | [**inline**](#Granularity) | At what level is this user being tracked. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**email** | **kotlin.String** | The user&#39;s email if we have it. |  [optional]


<a id="Granularity"></a>
## Enum: granularity
Name | Value
---- | -----
granularity | DEVICE, ACCOUNT, ANONYMOUS



