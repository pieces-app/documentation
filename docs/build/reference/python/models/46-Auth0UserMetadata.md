---
title: Auth0UserMetadata | Python SDK
---

# Auth0UserMetadata

User Metadata from Auth0

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**global_id** | **str** |  | 
**cloud_key** | **str** |  | [optional] 
**stripe_customer_id** | **str** | A customer ID that is added to the user in the case of payments | [optional] 
**vanityname** | **str** | this is the vanityname of the user.(set from their custom CNAME dns record.) ie mark.pieces.cloud where \&quot;mark\&quot; is the vanityname. | [optional] 
**allocation** | [**Auth0UserAllocationMetadata**](Auth0UserAllocationMetadata) |  | [optional] 
**open_ai** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata) |  | [optional] 
**beta** | [**AnonymousTemporalRange**](AnonymousTemporalRange) |  | [optional] 


