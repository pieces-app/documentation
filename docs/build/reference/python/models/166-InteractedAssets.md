# InteractedAssets

A model which contains a list of InteractedAssets with potentially additional properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[InteractedAsset]**](InteractedAsset) |  | 

## Example

```python
from pieces_os_client.models.interacted_assets import InteractedAssets

# TODO update the JSON string below
json = "{}"
# create an instance of InteractedAssets from a JSON string
interacted_assets_instance = InteractedAssets.from_json(json)
# print the JSON string representation of the object
print InteractedAssets.to_json()

# convert the object into a dict
interacted_assets_dict = interacted_assets_instance.to_dict()
# create an instance of InteractedAssets from a dict
interacted_assets_form_dict = interacted_assets.from_dict(interacted_assets_dict)
```



