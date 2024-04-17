---
title: WorkstreamPatternEngineDataCleanupRequest | Python SDK
---

# WorkstreamPatternEngineDataCleanupRequest

NOTE: if we want to remove all the data the from would be unset, the to will be right now.  from: is always in the past to: is always at least before from in our time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**ranges** | [**List[AnonymousTemporalRange]**](AnonymousTemporalRange) |  | [optional] 

## Example

```python
from pieces_os_client.models.workstream_pattern_engine_data_cleanup_request import WorkstreamPatternEngineDataCleanupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WorkstreamPatternEngineDataCleanupRequest from a JSON string
workstream_pattern_engine_data_cleanup_request_instance = WorkstreamPatternEngineDataCleanupRequest.from_json(json)
# print the JSON string representation of the object
print(WorkstreamPatternEngineDataCleanupRequest.to_json())

# convert the object into a dict
workstream_pattern_engine_data_cleanup_request_dict = workstream_pattern_engine_data_cleanup_request_instance.to_dict()
# create an instance of WorkstreamPatternEngineDataCleanupRequest from a dict
workstream_pattern_engine_data_cleanup_request_form_dict = workstream_pattern_engine_data_cleanup_request.from_dict(workstream_pattern_engine_data_cleanup_request_dict)
```


