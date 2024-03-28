# SeededAssetTag

This is similar to an SeededTag, where this is the minimum information of a tag, but this can get added to a seededAsset,  where you may not yet have an asset id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**text** | **str** | this is the text that represents the tag. | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_asset_tag import SeededAssetTag

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAssetTag from a JSON string
seeded_asset_tag_instance = SeededAssetTag.from_json(json)
# print the JSON string representation of the object
print SeededAssetTag.to_json()

# convert the object into a dict
seeded_asset_tag_dict = seeded_asset_tag_instance.to_dict()
# create an instance of SeededAssetTag from a dict
seeded_asset_tag_form_dict = seeded_asset_tag.from_dict(seeded_asset_tag_dict)
```



