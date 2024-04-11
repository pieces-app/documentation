# WorkstreamPatternEngineStatus

This will return the status for the Workstream pettern engine, specifically the activation/deactivation status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**vision** | [**WorkstreamPatternEngineVisionStatus**](WorkstreamPatternEngineVisionStatus) |  | [optional] 

## Example

```python
from pieces_os_client.models.workstream_pattern_engine_status import WorkstreamPatternEngineStatus

# TODO update the JSON string below
json = "{}"
# create an instance of WorkstreamPatternEngineStatus from a JSON string
workstream_pattern_engine_status_instance = WorkstreamPatternEngineStatus.from_json(json)
# print the JSON string representation of the object
print(WorkstreamPatternEngineStatus.to_json())

# convert the object into a dict
workstream_pattern_engine_status_dict = workstream_pattern_engine_status_instance.to_dict()
# create an instance of WorkstreamPatternEngineStatus from a dict
workstream_pattern_engine_status_form_dict = workstream_pattern_engine_status.from_dict(workstream_pattern_engine_status_dict)
```


