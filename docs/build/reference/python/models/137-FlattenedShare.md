# FlattenedShare

This is a dag safe version of the Share.  if user is undefined && access is public then we have an asset that is publicly available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | This references the share it self. | 
**asset** | **str** | this is the asset id on the flattened share. | [optional] 
**user** | **str** | this is the uuid of the user that the share is created for. | [optional] 
**link** | **str** | this is the prebuilt link. | 
**access** | [**AccessEnum**](AccessEnum) |  | 
**accessors** | [**Accessors**](Accessors) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**short** | **str** | This is a shortened version of our uuid. | 
**name** | **str** |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**distributions** | [**FlattenedDistributions**](FlattenedDistributions) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_share import FlattenedShare

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedShare from a JSON string
flattened_share_instance = FlattenedShare.from_json(json)
# print the JSON string representation of the object
print(FlattenedShare.to_json())

# convert the object into a dict
flattened_share_dict = flattened_share_instance.to_dict()
# create an instance of FlattenedShare from a dict
flattened_share_form_dict = flattened_share.from_dict(flattened_share_dict)
```


