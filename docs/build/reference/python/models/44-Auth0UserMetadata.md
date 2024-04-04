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
**beta** | [**TimestampRange**](TimestampRange) |  | [optional] 

## Example

```python
from pieces_os_client.models.auth0_user_metadata import Auth0UserMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0UserMetadata from a JSON string
auth0_user_metadata_instance = Auth0UserMetadata.from_json(json)
# print the JSON string representation of the object
print(Auth0UserMetadata.to_json())

# convert the object into a dict
auth0_user_metadata_dict = auth0_user_metadata_instance.to_dict()
# create an instance of Auth0UserMetadata from a dict
auth0_user_metadata_form_dict = auth0_user_metadata.from_dict(auth0_user_metadata_dict)
```



