# ReferencedAsset

A reference to a asset, which at minimum must have the asset's id. But in the case of a hydrated client API it may have a populated reference of type Asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedAsset**](FlattenedAsset) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_asset import ReferencedAsset

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedAsset from a JSON string
referenced_asset_instance = ReferencedAsset.from_json(json)
# print the JSON string representation of the object
print ReferencedAsset.to_json()

# convert the object into a dict
referenced_asset_dict = referenced_asset_instance.to_dict()
# create an instance of ReferencedAsset from a dict
referenced_asset_form_dict = referenced_asset.from_dict(referenced_asset_dict)
```



