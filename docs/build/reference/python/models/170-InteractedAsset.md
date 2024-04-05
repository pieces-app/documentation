# InteractedAsset

A model that represents an asset that has been interacted with. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters)  | [optional] 
**interactions** | [**InteractedAssetInteractions**](InteractedAssetInteractions) |  | [optional] 

## Example

```python
from pieces_os_client.models.interacted_asset import InteractedAsset

# TODO update the JSON string below
json = "{}"
# create an instance of InteractedAsset from a JSON string
interacted_asset_instance = InteractedAsset.from_json(json)
# print the JSON string representation of the object
print(InteractedAsset.to_json())

# convert the object into a dict
interacted_asset_dict = interacted_asset_instance.to_dict()
# create an instance of InteractedAsset from a dict
interacted_asset_form_dict = interacted_asset.from_dict(interacted_asset_dict)
```



