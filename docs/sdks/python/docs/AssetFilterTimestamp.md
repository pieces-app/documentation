# AssetFilterTimestamp

if you want a range between you can use from && to.  if you want anything before, use to and NO from.  if you want anything after, use from and NO to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**var_from** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**to** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**between** | **bool** |  | [optional] 

## Example

```python
from pieces_os_client.models.asset_filter_timestamp import AssetFilterTimestamp

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFilterTimestamp from a JSON string
asset_filter_timestamp_instance = AssetFilterTimestamp.from_json(json)
# print the JSON string representation of the object
print AssetFilterTimestamp.to_json()

# convert the object into a dict
asset_filter_timestamp_dict = asset_filter_timestamp_instance.to_dict()
# create an instance of AssetFilterTimestamp from a dict
asset_filter_timestamp_form_dict = asset_filter_timestamp.from_dict(asset_filter_timestamp_dict)
```



