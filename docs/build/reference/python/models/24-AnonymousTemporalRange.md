# AnonymousTemporalRange

if you want a range between you can use from && to.  if you want anything before, use to and NO from.  if you want anything after, use from and NO to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**var_from** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**to** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**between** | **bool** |  | [optional] 
**continuous** | **bool** |  | [optional] 

## Example

```python
from pieces_os_client.models.anonymous_temporal_range import AnonymousTemporalRange

# TODO update the JSON string below
json = "{}"
# create an instance of AnonymousTemporalRange from a JSON string
anonymous_temporal_range_instance = AnonymousTemporalRange.from_json(json)
# print the JSON string representation of the object
print(AnonymousTemporalRange.to_json())

# convert the object into a dict
anonymous_temporal_range_dict = anonymous_temporal_range_instance.to_dict()
# create an instance of AnonymousTemporalRange from a dict
anonymous_temporal_range_form_dict = anonymous_temporal_range.from_dict(anonymous_temporal_range_dict)
```


