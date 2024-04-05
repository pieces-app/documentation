# SeededAssetsRecommendation

This is the input data model for the /assets/recommend [GET] endpoint. It includes both a list of assets but also 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**assets** | [**Assets**](Assets) |  | 
**interactions** | [**InteractedAssets**](InteractedAssets) |  | 

## Example

```python
from pieces_os_client.models.seeded_assets_recommendation import SeededAssetsRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAssetsRecommendation from a JSON string
seeded_assets_recommendation_instance = SeededAssetsRecommendation.from_json(json)
# print the JSON string representation of the object
print(SeededAssetsRecommendation.to_json())

# convert the object into a dict
seeded_assets_recommendation_dict = seeded_assets_recommendation_instance.to_dict()
# create an instance of SeededAssetsRecommendation from a dict
seeded_assets_recommendation_form_dict = seeded_assets_recommendation.from_dict(seeded_assets_recommendation_dict)
```



