# AssetReclassification

This is a model that will represent the miminum properties required to update the classification of this asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | 
**asset** | [**Asset**](Asset) |  | 

## Example

```python
from pieces_os_client.models.asset_reclassification import AssetReclassification

# TODO update the JSON string below
json = "{}"
# create an instance of AssetReclassification from a JSON string
asset_reclassification_instance = AssetReclassification.from_json(json)
# print the JSON string representation of the object
print(AssetReclassification.to_json())

# convert the object into a dict
asset_reclassification_dict = asset_reclassification_instance.to_dict()
# create an instance of AssetReclassification from a dict
asset_reclassification_form_dict = asset_reclassification.from_dict(asset_reclassification_dict)
```


