# PseudoAssets

This is a model of all optional properties, that will get returned from /assets/pseudo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**identifiers** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 

## Example

```python
from pieces_os_client.models.pseudo_assets import PseudoAssets

# TODO update the JSON string below
json = "{}"
# create an instance of PseudoAssets from a JSON string
pseudo_assets_instance = PseudoAssets.from_json(json)
# print the JSON string representation of the object
print PseudoAssets.to_json()

# convert the object into a dict
pseudo_assets_dict = pseudo_assets_instance.to_dict()
# create an instance of PseudoAssets from a dict
pseudo_assets_form_dict = pseudo_assets.from_dict(pseudo_assets_dict)
```



