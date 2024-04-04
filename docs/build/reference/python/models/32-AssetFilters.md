# AssetFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[AssetFilter]**](AssetFilter) |  | 
**type** | [**FilterOperationTypeEnum**](FilterOperationTypeEnum) |  | [optional] 

## Example

```python
from pieces_os_client.models.asset_filters import AssetFilters

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFilters from a JSON string
asset_filters_instance = AssetFilters.from_json(json)
# print the JSON string representation of the object
print(AssetFilters.to_json())

# convert the object into a dict
asset_filters_dict = asset_filters_instance.to_dict()
# create an instance of AssetFilters from a dict
asset_filters_form_dict = asset_filters.from_dict(asset_filters_dict)
```



