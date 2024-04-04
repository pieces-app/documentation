# TLPMachineLearningProcessingEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**code** | [**TLPCodeProcessing**](TLPCodeProcessing) |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_machine_learning_processing_event import TLPMachineLearningProcessingEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TLPMachineLearningProcessingEvent from a JSON string
tlp_machine_learning_processing_event_instance = TLPMachineLearningProcessingEvent.from_json(json)
# print the JSON string representation of the object
print(TLPMachineLearningProcessingEvent.to_json())

# convert the object into a dict
tlp_machine_learning_processing_event_dict = tlp_machine_learning_processing_event_instance.to_dict()
# create an instance of TLPMachineLearningProcessingEvent from a dict
tlp_machine_learning_processing_event_form_dict = tlp_machine_learning_processing_event.from_dict(tlp_machine_learning_processing_event_dict)
```



