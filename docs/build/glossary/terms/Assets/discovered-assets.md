# Discovered Assets


A collection of discovered assets is used in the bulk upload flow for clustering and uploading snippets. DiscoveredAssets is a plural model used in the bulk upload flow of Pieces OS. It represents a collection of discovered assets, which are snippets of code that have been identified as potential candidates for upload. These assets can be either already snippetized and clustered, or they may need to undergo snippetization and clustering before they can be uploaded. The DiscoveredAssets model contains properties such as the application ID, an iterable of discovered assets, and a schema for the assets. It also provides methods for converting the model to and from JSON and a dictionary, allowing for easy serialization and deserialization.
