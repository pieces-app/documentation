# AssetsSearchWithFiltersOutput

output for the /assets/search [POST] 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**results** | [**SearchedAssets**](SearchedAssets) |  | 

## Example

```python
from pieces_os_client.models.assets_search_with_filters_output import AssetsSearchWithFiltersOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsSearchWithFiltersOutput from a JSON string
assets_search_with_filters_output_instance = AssetsSearchWithFiltersOutput.from_json(json)
# print the JSON string representation of the object
print(AssetsSearchWithFiltersOutput.to_json())

# convert the object into a dict
assets_search_with_filters_output_dict = assets_search_with_filters_output_instance.to_dict()
# create an instance of AssetsSearchWithFiltersOutput from a dict
assets_search_with_filters_output_form_dict = assets_search_with_filters_output.from_dict(assets_search_with_filters_output_dict)
```


