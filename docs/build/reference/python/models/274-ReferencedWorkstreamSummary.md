# ReferencedWorkstreamSummary

this is a referenced minimal version of a WorkstreamSummary typically just our uuid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedWorkstreamSummary**](FlattenedWorkstreamSummary) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_workstream_summary import ReferencedWorkstreamSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedWorkstreamSummary from a JSON string
referenced_workstream_summary_instance = ReferencedWorkstreamSummary.from_json(json)
# print the JSON string representation of the object
print(ReferencedWorkstreamSummary.to_json())

# convert the object into a dict
referenced_workstream_summary_dict = referenced_workstream_summary_instance.to_dict()
# create an instance of ReferencedWorkstreamSummary from a dict
referenced_workstream_summary_form_dict = referenced_workstream_summary.from_dict(referenced_workstream_summary_dict)
```



