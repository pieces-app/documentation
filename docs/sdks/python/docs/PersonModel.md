# PersonModel

This is a PersonSpecific Model. and will let us know for all the assets that get attached to the person if, this person was attached via a model or just attached automatically.  explanation here are the reason why a Person was attached to an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**explanation** | [**ReferencedAnnotation**](ReferencedAnnotation) |  | [optional] 

## Example

```python
from pieces_os_client.models.person_model import PersonModel

# TODO update the JSON string below
json = "{}"
# create an instance of PersonModel from a JSON string
person_model_instance = PersonModel.from_json(json)
# print the JSON string representation of the object
print PersonModel.to_json()

# convert the object into a dict
person_model_dict = person_model_instance.to_dict()
# create an instance of PersonModel from a dict
person_model_form_dict = person_model.from_dict(person_model_dict)
```



