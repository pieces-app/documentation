# Annotation

An Annotation is the replacement for descriptions, this will enable comments, description, summaries and many more.  person on here is a reference to the description/comment/annotation about a person  NOTE: person here is NOT the creator of the annotaion. but rather the descriptions of the person. NOTE****: if we want to add \"who\" wrote the annotation, we will want to add a new field on here called author && will need to also layer in behavior the enable an author(person) and an asset both being referenced(ensure you check the side effect in the AssetsFacade.delete)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**person** | [**ReferencedPerson**](ReferencedPerson) |  | [optional] 
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum) |  | 
**text** | **str** | This is the text of the annotation. | 
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] 
**pseudo** | **bool** |  | [optional] 
**favorited** | **bool** |  | [optional] 
**anchor** | [**ReferencedAnchor**](ReferencedAnchor) |  | [optional] 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 

## Example

```python
from pieces_os_client.models.annotation import Annotation

# TODO update the JSON string below
json = "{}"
# create an instance of Annotation from a JSON string
annotation_instance = Annotation.from_json(json)
# print the JSON string representation of the object
print Annotation.to_json()

# convert the object into a dict
annotation_dict = annotation_instance.to_dict()
# create an instance of Annotation from a dict
annotation_form_dict = annotation.from_dict(annotation_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


