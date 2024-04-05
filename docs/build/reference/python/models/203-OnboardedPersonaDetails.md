# OnboardedPersonaDetails

This is an out body for the /machine_learning/text/technical_processing/generators/personification endpoint.  This will have accepted some of the personal details (in the input body) ie languages/personas && will transform this in to onbaording snippets that we will return with this model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**seeds** | [**Seeds**](Seeds) |  | 

## Example

```python
from pieces_os_client.models.onboarded_persona_details import OnboardedPersonaDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardedPersonaDetails from a JSON string
onboarded_persona_details_instance = OnboardedPersonaDetails.from_json(json)
# print the JSON string representation of the object
print(OnboardedPersonaDetails.to_json())

# convert the object into a dict
onboarded_persona_details_dict = onboarded_persona_details_instance.to_dict()
# create an instance of OnboardedPersonaDetails from a dict
onboarded_persona_details_form_dict = onboarded_persona_details.from_dict(onboarded_persona_details_dict)
```



