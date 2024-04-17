# WorkstreamSummaries

This is a collection of many WorkstreamSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[WorkstreamSummary]**](WorkstreamSummary) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an summary id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.workstream_summaries import WorkstreamSummaries

# TODO update the JSON string below
json = "{}"
# create an instance of WorkstreamSummaries from a JSON string
workstream_summaries_instance = WorkstreamSummaries.from_json(json)
# print the JSON string representation of the object
print(WorkstreamSummaries.to_json())

# convert the object into a dict
workstream_summaries_dict = workstream_summaries_instance.to_dict()
# create an instance of WorkstreamSummaries from a dict
workstream_summaries_form_dict = workstream_summaries.from_dict(workstream_summaries_dict)
```


