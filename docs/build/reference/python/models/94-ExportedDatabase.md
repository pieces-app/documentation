---
title: ExportedDatabase | Python SDK
---

# ExportedDatabase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyses** | **List[int]** |  | 
**applications** | **List[int]** |  | 
**assets** | **List[int]** |  | 
**code_analyses** | **List[int]** |  | 
**files** | **List[int]** |  | 
**format_metrics** | **List[int]** |  | 
**formats** | **List[int]** |  | 
**fragments** | **List[int]** |  | 
**image_analyses** | **List[int]** |  | 
**models** | **List[int]** |  | 
**ocr_analyses** | **List[int]** |  | 
**persons** | **List[int]** |  | 
**sensitives** | **List[int]** |  | 
**tags** | **List[int]** |  | 
**websites** | **List[int]** |  | 
**values** | [**ExportedDatabaseFormats**](ExportedDatabaseFormats) |  | 
**version** | **str** | This is the version of your os_server or cloud_server that we we exporting from. | 
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**relationships** | **List[int]** |  | [optional] 
**activities** | **List[int]** |  | [optional] 
**annotations** | **List[int]** |  | [optional] 
**hints** | **List[int]** |  | [optional] 
**anchors** | **List[int]** |  | [optional] 
**anchor_points** | **List[int]** |  | [optional] 
**conversations** | **List[int]** |  | [optional] 
**conversation_messages** | **List[int]** |  | [optional] 
**workstream_events** | **List[int]** |  | [optional] 
**ranges** | **List[int]** |  | [optional] 
**workstream_summaries** | **List[int]** |  | [optional] 
**message_values** | [**ExportedDatabaseFormats**](ExportedDatabaseFormats) |  | [optional] 
**workstream_event_values** | [**ExportedDatabaseFormats**](ExportedDatabaseFormats) |  | [optional] 

## Example

```python
from pieces_os_client.models.exported_database import ExportedDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of ExportedDatabase from a JSON string
exported_database_instance = ExportedDatabase.from_json(json)
# print the JSON string representation of the object
print(ExportedDatabase.to_json())

# convert the object into a dict
exported_database_dict = exported_database_instance.to_dict()
# create an instance of ExportedDatabase from a dict
exported_database_form_dict = exported_database.from_dict(exported_database_dict)
```


