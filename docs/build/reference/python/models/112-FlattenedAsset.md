# FlattenedAsset

An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats. [DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedAsset prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. FlattenedFormat.preview is Type String, and FlattenedFormat.original is Type String

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | The globally available UID representing the asset in the Database, both locally and in the cloud. | 
**name** | **str** |  | [optional] 
**creator** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**formats** | [**FlattenedFormats**](FlattenedFormats) |  | 
**preview** | [**FlattenedPreview**](FlattenedPreview) |  | 
**original** | **str** | An identifier of the format that is a reference to the original. | 
**shares** | [**FlattenedShares**](FlattenedShares) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] 
**interacted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**tags** | [**FlattenedTags**](FlattenedTags) |  | [optional] 
**sensitives** | [**FlattenedSensitives**](FlattenedSensitives) |  | [optional] 
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] 
**curated** | **bool** | This is an optional boolean that will flag that this asset came from a currated collection. | [optional] 
**discovered** | **bool** |  | [optional] 
**activities** | [**FlattenedActivities**](FlattenedActivities) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**favorited** | **bool** |  | [optional] 
**pseudo** | **bool** |  | [optional] 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 
**hints** | [**FlattenedHints**](FlattenedHints) |  | [optional] 
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 
**demo** | **bool** | This will let us know if this asset was generated as a &#39;demo&#39; snippet | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_asset import FlattenedAsset

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedAsset from a JSON string
flattened_asset_instance = FlattenedAsset.from_json(json)
# print the JSON string representation of the object
print(FlattenedAsset.to_json())

# convert the object into a dict
flattened_asset_dict = flattened_asset_instance.to_dict()
# create an instance of FlattenedAsset from a dict
flattened_asset_form_dict = flattened_asset.from_dict(flattened_asset_dict)
```



