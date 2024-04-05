# FlattenedWorkstreamSummaries

This is a DAG-Safe plural model of workstreamsummaries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedWorkstreamSummary]**](ReferencedWorkstreamSummary) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an summary id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_workstream_summaries import FlattenedWorkstreamSummaries

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedWorkstreamSummaries from a JSON string
flattened_workstream_summaries_instance = FlattenedWorkstreamSummaries.from_json(json)
# print the JSON string representation of the object
print(FlattenedWorkstreamSummaries.to_json())

# convert the object into a dict
flattened_workstream_summaries_dict = flattened_workstream_summaries_instance.to_dict()
# create an instance of FlattenedWorkstreamSummaries from a dict
flattened_workstream_summaries_form_dict = flattened_workstream_summaries.from_dict(flattened_workstream_summaries_dict)
```



