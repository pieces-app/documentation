# SeededScore

This is the low level seeded score and will let us know what exactly we want to increment on our material.  Note: ONLY include one of these, as we will only increment one of the following.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**reuse** | **bool** |  | [optional] 
**update** | **bool** |  | [optional] 
**reference** | **bool** |  | [optional] 
**priority** | **bool** |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_score import SeededScore

# TODO update the JSON string below
json = "{}"
# create an instance of SeededScore from a JSON string
seeded_score_instance = SeededScore.from_json(json)
# print the JSON string representation of the object
print SeededScore.to_json()

# convert the object into a dict
seeded_score_dict = seeded_score_instance.to_dict()
# create an instance of SeededScore from a dict
seeded_score_form_dict = seeded_score.from_dict(seeded_score_dict)
```



