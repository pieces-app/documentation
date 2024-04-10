
# TLPCodeSnippetCluster

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **kotlin.String** | The text here is the representative (seed) of the cluster. | 
**size** | **kotlin.Int** | This was the size of the original cluster. | 
**index** | **kotlin.Int** | This is the original index of the snippet, or where it was within the input array. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**related** | [**kotlin.collections.List&lt;TLPCodeSnippetClusterMember&gt;**](TLPCodeSnippetClusterMember) | This is all of the other snippets within the cluster that were NOT chosen to represent(seed), but are included in the cluster itself. |  [optional]



