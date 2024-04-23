---
title: Relationship | TypeScript SDK
---


# Relationship

A relationship expresses a graph of like types, to build a relationship graph.   To get the type of relationship, this is for ie Asset, tag, website, format ...etc, you will need to iterate through the edges and get the root or you can just get the first edge\'s type as a relationship can only be expressed through same type

## Properties

Name | Type
------------ | -------------
**id** | **string**
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**embeddings** | [**Embeddings**](Embeddings)
**edges** | [**Edges**](Edges)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)


