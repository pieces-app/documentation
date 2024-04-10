
# Auth0UserMetadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**globalId** | **java.util.UUID** |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**cloudKey** | **kotlin.String** |  |  [optional]
**stripeCustomerId** | **kotlin.String** | A customer ID that is added to the user in the case of payments |  [optional]
**vanityname** | **kotlin.String** | this is the vanityname of the user.(set from their custom CNAME dns record.) ie mark.pieces.cloud where \&quot;mark\&quot; is the vanityname. |  [optional]
**allocation** | [**Auth0UserAllocationMetadata**](Auth0UserAllocationMetadata) |  |  [optional]
**openAI** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata) |  |  [optional]
**beta** | [**TimestampRange**](TimestampRange) |  |  [optional]



