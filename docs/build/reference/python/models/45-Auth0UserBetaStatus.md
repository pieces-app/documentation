# Auth0UserBetaStatus

Note: continuous: this means that from this moment in time, the user is continuously opted into beta  otherwise we will use the from/to values provided.  Note: in order to opt out of vision, you will just end their beta w/ the updated with a to property that is effectively right now in time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**vision** | [**AnonymousTemporalRange**](AnonymousTemporalRange) |  | [optional] 

## Example

```python
from pieces_os_client.models.auth0_user_beta_status import Auth0UserBetaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0UserBetaStatus from a JSON string
auth0_user_beta_status_instance = Auth0UserBetaStatus.from_json(json)
# print the JSON string representation of the object
print(Auth0UserBetaStatus.to_json())

# convert the object into a dict
auth0_user_beta_status_dict = auth0_user_beta_status_instance.to_dict()
# create an instance of Auth0UserBetaStatus from a dict
auth0_user_beta_status_form_dict = auth0_user_beta_status.from_dict(auth0_user_beta_status_dict)
```


