# TemporalRangeGrounding

This is used in the QGPT flow as well as within the conversation.  This will let us know grounding's that you want us to use within a given time range(s).  workstreams: is used to describe workstreams context. (specific to the \"workstream mapper\" - name subject to change)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workstreams** | [**FlattenedRanges**](FlattenedRanges) |  | [optional] 

## Example

```python
from pieces_os_client.models.temporal_range_grounding import TemporalRangeGrounding

# TODO update the JSON string below
json = "{}"
# create an instance of TemporalRangeGrounding from a JSON string
temporal_range_grounding_instance = TemporalRangeGrounding.from_json(json)
# print the JSON string representation of the object
print(TemporalRangeGrounding.to_json())

# convert the object into a dict
temporal_range_grounding_dict = temporal_range_grounding_instance.to_dict()
# create an instance of TemporalRangeGrounding from a dict
temporal_range_grounding_form_dict = temporal_range_grounding.from_dict(temporal_range_grounding_dict)
```


