# Format

A representation of Data for a particular Form Factor of an Asset.  Below asset HAS to be Flattened because it is a leaf node and must prevent cycles agressively.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**creator** | **str** |  | 
**classification** | [**Classification**](Classification) |  | 
**icon** | **str** |  | [optional] 
**role** | [**Role**](Role) |  | 
**application** | [**Application**](Application) |  | 
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | 
**bytes** | [**ByteDescriptor**](ByteDescriptor) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**cloud** | **str** | This is a path used to determine what path this format lives at within the cloud. | [optional] 
**fragment** | [**FragmentFormat**](FragmentFormat) |  | [optional] 
**file** | [**FileFormat**](FileFormat) |  | [optional] 
**analysis** | [**Analysis**](Analysis) |  | [optional] 
**relationship** | [**Relationship**](Relationship) |  | [optional] 
**activities** | [**Activities**](Activities) |  | [optional] 

## Example

```python
from pieces_os_client.models.format import Format

# TODO update the JSON string below
json = "{}"
# create an instance of Format from a JSON string
format_instance = Format.from_json(json)
# print the JSON string representation of the object
print Format.to_json()

# convert the object into a dict
format_dict = format_instance.to_dict()
# create an instance of Format from a dict
format_form_dict = format.from_dict(format_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


