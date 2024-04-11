# Classification

This is the specific classification of an Asset's Format.(This is on a per format basis b/c an asset could have different formats that are different format representations of the Asset.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**generic** | [**ClassificationGenericEnum**](ClassificationGenericEnum) |  | 
**specific** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | 
**rendering** | [**ClassificationRenderingEnum**](ClassificationRenderingEnum) |  | [optional] 

## Example

```python
from pieces_os_client.models.classification import Classification

# TODO update the JSON string below
json = "{}"
# create an instance of Classification from a JSON string
classification_instance = Classification.from_json(json)
# print the JSON string representation of the object
print(Classification.to_json())

# convert the object into a dict
classification_dict = classification_instance.to_dict()
# create an instance of Classification from a dict
classification_form_dict = classification.from_dict(classification_dict)
```


