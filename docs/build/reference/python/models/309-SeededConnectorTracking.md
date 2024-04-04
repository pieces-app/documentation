# SeededConnectorTracking

This model is designed to be light weight and low friction while most of the heavy lifting will be happening inside of the context servers.  This Model is important because this has references to our materials, instead of fully referenced materials.(very similar to our SeededTrackedEvent, consider consolidating and converting these to Referenced models instead of ID's)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**format** | [**SeededTrackedFormatEvent**](SeededTrackedFormatEvent) |  | [optional] 
**asset** | [**SeededTrackedAssetEvent**](SeededTrackedAssetEvent) |  | [optional] 
**interaction** | [**SeededTrackedInteractionEvent**](SeededTrackedInteractionEvent) |  | [optional] 
**keyboard** | [**SeededTrackedKeyboardEvent**](SeededTrackedKeyboardEvent) |  | [optional] 
**session** | [**SeededTrackedSessionEvent**](SeededTrackedSessionEvent) |  | [optional] 
**assets** | [**SeededTrackedAssetsEvent**](SeededTrackedAssetsEvent) |  | [optional] 
**ml** | [**SeededTrackedMachineLearningEvent**](SeededTrackedMachineLearningEvent) |  | [optional] 
**adoption** | [**SeededTrackedAdoptionEvent**](SeededTrackedAdoptionEvent) |  | [optional] 
**conversation** | [**SeededTrackedConversationEvent**](SeededTrackedConversationEvent) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_connector_tracking import SeededConnectorTracking

# TODO update the JSON string below
json = "{}"
# create an instance of SeededConnectorTracking from a JSON string
seeded_connector_tracking_instance = SeededConnectorTracking.from_json(json)
# print the JSON string representation of the object
print(SeededConnectorTracking.to_json())

# convert the object into a dict
seeded_connector_tracking_dict = seeded_connector_tracking_instance.to_dict()
# create an instance of SeededConnectorTracking from a dict
seeded_connector_tracking_form_dict = seeded_connector_tracking.from_dict(seeded_connector_tracking_dict)
```



