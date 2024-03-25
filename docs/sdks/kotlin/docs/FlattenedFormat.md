
# FlattenedFormat

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**creator** | **kotlin.String** |  | 
**classification** | [**Classification**](Classification.md) |  | 
**role** | [**Role**](Role.md) |  | 
**application** | [**Application**](Application.md) |  | 
**asset** | [**java.util.UUID**](java.util.UUID) | A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters)  | 
**bytes** | [**ByteDescriptor**](ByteDescriptor.md) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**icon** | **kotlin.String** |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**synced** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**cloud** | **kotlin.String** | This is a path used to determine what path this format lives at within the cloud. |  [optional]
**fragment** | [**FragmentFormat**](FragmentFormat.md) |  |  [optional]
**file** | [**FileFormat**](FileFormat.md) |  |  [optional]
**analysis** | [**FlattenedAnalysis**](FlattenedAnalysis.md) |  |  [optional]
**relationship** | [**Relationship**](Relationship.md) |  |  [optional]
**activities** | [**FlattenedActivities**](FlattenedActivities.md) |  |  [optional]



