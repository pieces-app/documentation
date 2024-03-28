# SeededAssetEnrichment

This is a specific Model for the SeededAsset that will enable the developer to modify the enrichment levels of persons, tags, websites.  These enrichment levels will guarentee that the # of people/tags/websites do not eceeed the provided value, but will not guarentee a minimum.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**tags** | **int** |  | [optional] 
**websites** | **int** |  | [optional] 
**persons** | **int** |  | [optional] 
**hints** | **int** |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_asset_enrichment import SeededAssetEnrichment

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAssetEnrichment from a JSON string
seeded_asset_enrichment_instance = SeededAssetEnrichment.from_json(json)
# print the JSON string representation of the object
print SeededAssetEnrichment.to_json()

# convert the object into a dict
seeded_asset_enrichment_dict = seeded_asset_enrichment_instance.to_dict()
# create an instance of SeededAssetEnrichment from a dict
seeded_asset_enrichment_form_dict = seeded_asset_enrichment.from_dict(seeded_asset_enrichment_dict)
```



