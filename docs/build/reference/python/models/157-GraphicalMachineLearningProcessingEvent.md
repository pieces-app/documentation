# GraphicalMachineLearningProcessingEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**ocr** | [**GraphicalOCRProcessing**](GraphicalOCRProcessing) |  | [optional] 
**image** | [**GraphicalImageProcessing**](GraphicalImageProcessing) |  | [optional] 
**svg** | [**GraphicalSVGStatistics**](GraphicalSVGStatistics) |  | [optional] 

## Example

```python
from pieces_os_client.models.graphical_machine_learning_processing_event import GraphicalMachineLearningProcessingEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GraphicalMachineLearningProcessingEvent from a JSON string
graphical_machine_learning_processing_event_instance = GraphicalMachineLearningProcessingEvent.from_json(json)
# print the JSON string representation of the object
print(GraphicalMachineLearningProcessingEvent.to_json())

# convert the object into a dict
graphical_machine_learning_processing_event_dict = graphical_machine_learning_processing_event_instance.to_dict()
# create an instance of GraphicalMachineLearningProcessingEvent from a dict
graphical_machine_learning_processing_event_form_dict = graphical_machine_learning_processing_event.from_dict(graphical_machine_learning_processing_event_dict)
```



