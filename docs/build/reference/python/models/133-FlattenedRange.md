# FlattenedRange

This is a DAG-Safe minimal representation of a Range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**score** | [**Score**](Score) |  | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**to** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**var_from** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**between** | **bool** |  | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_range import FlattenedRange

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedRange from a JSON string
flattened_range_instance = FlattenedRange.from_json(json)
# print the JSON string representation of the object
print(FlattenedRange.to_json())

# convert the object into a dict
flattened_range_dict = flattened_range_instance.to_dict()
# create an instance of FlattenedRange from a dict
flattened_range_form_dict = flattened_range.from_dict(flattened_range_dict)
```


