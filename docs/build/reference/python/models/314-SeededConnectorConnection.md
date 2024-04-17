---
title: SeededConnectorConnection | Python SDK
---

# SeededConnectorConnection

A model that is passed to the context API at bootup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**application** | [**SeededTrackedApplication**](SeededTrackedApplication) |  | 

## Example

```python
from pieces_os_client.models.seeded_connector_connection import SeededConnectorConnection

# TODO update the JSON string below
json = "{}"
# create an instance of SeededConnectorConnection from a JSON string
seeded_connector_connection_instance = SeededConnectorConnection.from_json(json)
# print the JSON string representation of the object
print(SeededConnectorConnection.to_json())

# convert the object into a dict
seeded_connector_connection_dict = seeded_connector_connection_instance.to_dict()
# create an instance of SeededConnectorConnection from a dict
seeded_connector_connection_form_dict = seeded_connector_connection.from_dict(seeded_connector_connection_dict)
```


