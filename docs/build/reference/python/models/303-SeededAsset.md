---
title: SeededAsset | Python SDK
---

# SeededAsset

This is seed data that will be come an asset.  discovered: if set to true this seededAsset was discovered using one of our discovery endpoints.  pseudo: if this is an asset that a user did NOT explicitly save.  available: This is a model that is used within our '/assets/draft' endpoint that will emitt a seed with all the available format that one can generate based on the original seed that was passed in. ie if a png was passed in, we may  say that there is a text/code format available. If available formats is passed into the '/assets/create' we will short curcuit certain operations to speed up the process, for instance, if we determine that there is no text within this image then there is no sense in running ocr. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**metadata** | [**SeededAssetMetadata**](SeededAssetMetadata) |  | [optional] 
**application** | [**Application**](Application) |  | 
**format** | [**SeededFormat**](SeededFormat) |  | 
**discovered** | **bool** |  | [optional] 
**available** | [**AvailableFormats**](AvailableFormats) |  | [optional] 
**pseudo** | **bool** |  | [optional] 
**enrichment** | [**SeededAssetEnrichment**](SeededAssetEnrichment) |  | [optional] 
**demo** | **bool** | This will let us know if this asset was generated as a &#39;demo&#39; snippet | [optional] 


