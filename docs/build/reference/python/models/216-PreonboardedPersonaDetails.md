# PreonboardedPersonaDetails

This is an input body for the /machine_learning/text/technical_processing/generators/personification endpoint.  This will accept some of the personal details ie languages/personas && will transform this in to onbaording snippets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**languages** | **List[str]** |  | [optional] 
**personas** | **List[str]** |  | [optional] 

## Example

```python
from pieces_os_client.models.preonboarded_persona_details import PreonboardedPersonaDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PreonboardedPersonaDetails from a JSON string
preonboarded_persona_details_instance = PreonboardedPersonaDetails.from_json(json)
# print the JSON string representation of the object
print(PreonboardedPersonaDetails.to_json())

# convert the object into a dict
preonboarded_persona_details_dict = preonboarded_persona_details_instance.to_dict()
# create an instance of PreonboardedPersonaDetails from a dict
preonboarded_persona_details_form_dict = preonboarded_persona_details.from_dict(preonboarded_persona_details_dict)
```



