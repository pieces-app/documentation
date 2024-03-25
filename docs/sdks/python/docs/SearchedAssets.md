# SearchedAssets

This is a modle that will return fro mthe search endpoint that will just contain an array of assets!

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[SearchedAsset]**](SearchedAsset) |  | 
**suggested** | **float** | the number of fuzzy/suggested search results. | 
**exact** | **float** | the number of exact results | 

## Example

```python
from pieces_os_client.models.searched_assets import SearchedAssets

# TODO update the JSON string below
json = "{}"
# create an instance of SearchedAssets from a JSON string
searched_assets_instance = SearchedAssets.from_json(json)
# print the JSON string representation of the object
print SearchedAssets.to_json()

# convert the object into a dict
searched_assets_dict = searched_assets_instance.to_dict()
# create an instance of SearchedAssets from a dict
searched_assets_form_dict = searched_assets.from_dict(searched_assets_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


