
# ExternalProvider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ExternalProviderTypeEnum**](ExternalProviderTypeEnum.md) |  | 
**userId** | **kotlin.String** | This is the user_id within the provider. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**accessToken** | **kotlin.String** | This is optional here, but will be present for BB, Github, and google. |  [optional]
**expiresIn** | **kotlin.Int** | Some providers have an expiration on their access token. IE BB, Google, NOT Github. |  [optional]
**profileData** | [**ExternalProviderProfileData**](ExternalProviderProfileData.md) |  |  [optional]
**connection** | **kotlin.String** | This is an optional field that will be provided onentreprise connections. ie is type &#x3D;&#x3D; waad then connection might be PiecesApp. However is other cases,you my find your provider and connection is the exact same string. To decifer between the two, you can use the isSocial bool. |  [optional]
**isSocial** | **kotlin.Boolean** |  |  [optional]



