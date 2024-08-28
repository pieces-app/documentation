# Pieces for Developers Documentation Center

Learn how to best use and optimize your workflow with Pieces for Developers! Read the sections in sequential order or click the links in the navigation on the right to get directly to the topic you need.

## [Start Here to Install Pieces for Developers](https://docs.pieces.app/installation-getting-started/what-am-i-installing)

Choose a topic from the list below to get started with Pieces:
* [Save a Snippet](https://docs.pieces.app/product-highlights-and-benefits/saving-useful-developer-materials)
* [Share a Snippet](https://docs.pieces.app/personalized-link-sharing/one-click-snippet-sharing)
* [Use the Pieces Copilot](https://docs.pieces.app/features/pieces-copilot)
* [Import Snippets from GitHub](https://docs.pieces.app/product-highlights-and-benefits/saving-to-and-from-github-gists)
* [Back up and Restore Your Snippets](https://docs.pieces.app/features/back-up-and-restore)
* [Local Snippet Discovery](https://docs.pieces.app/product-highlights-and-benefits/in-project-snippet-discovery)
* [FAQs](https://docs.pieces.app/faq)

## Try all of our products:
* [Pieces Desktop App & Pieces OS](https://docs.pieces.app/installation-getting-started/what-am-i-installing)
* [Pieces Chrome Extension](https://chrome.google.com/webstore/detail/pieces-save-code-snippets/igbgibhbfonhmjlechmeefimncpekepm)
* [Pieces JetBrains Plugin](https://plugins.jetbrains.com/plugin/17328-pieces--save-search-share--reuse-code-snippets)
* [Pieces Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=MeshIntelligentTechnologiesInc.pieces-vscode)
* [Pieces Obsidian Plugin](https://obsidian.md/plugins?id=pieces-for-developers)
* [Pieces JupyterLab Extension](https://docs.pieces.app/extensions-plugins/jupyterlab)
* [Pieces Microsoft Teams Addon](https://docs.pieces.app/extensions-plugins/teams)

### Some Quick Background Context

In 2022, our team set out on a journey to build **_the most advanced code snippet management and workflow context platform_** yet.

The debut release of our **Flagship Desktop App** aimed to take developer _productivity to the next level_ by incorporating key capabilities and our users' _favorite features directly into their IDE_.

**Effortlessly save, enrich, search, share, reference, and reuse code snippets, workflow context, and other useful developer resources.**

![Save Code Snippets To Pieces](https://storage.googleapis.com/pieces_static_resources/vs_code_marketplace/GIFs/HERO_GIF_SAVE_ENRICHED_SNIPPET_DESKTOP_APP_AND_VISUAL_STUDIO_CODE_EXTENSION)

### Trusted by the World's Best Developers
![Logos of the companies where some of our users work.](https://storage.googleapis.com/pieces_static_resources/vs_code_marketplace/GIFs/TRUSTED_BY_SOME_OF_THE_WORLDS_BEST_DEVELOPERS_LEFT_ALIGNED)
From students and indie developers, to startups and open source teams, to enterprise organizations and beyond, <a target="_blank" href="https://docs.pieces.app/overview">Pieces for Developers</a> is purpose-built as a cohesive layer and a **_"tool between tools"_** that **_boosts productivity_** in three major workflow processes: researching and problem-solving **_in the browser_**, working with colleagues **_in collaborative environments_**, and lastly, writing, reviewing, referencing, and reusing code **_in the IDE_**.
> We are a venture-backed company supported by some of the world's best investors. Our products & company are secure and continuing to grow.

Our <a target="_blank" href="https://pieces.app">Flagship Desktop App</a> provides users a first-in-kind feature set that ambitiously **_augments your development workflows_**.

## Other Resources:
* [Youtube Channel](https://www.youtube.com/@getpieces)
* [Website](https://code.pieces.app)
* [Release Notes](https://code.pieces.app/updates)

## How to Contribute

> At the moment, we are not accepting unsolicited contributions.
>
> Ensure that the issue you'd like to help with is open to [Community Contribution](https://github.com/pieces-app/documentation/labels/community%20contribution). These issues are labels with the `community contribution` label.

You can find guidance on how to contribute to the Pieces for Developers documentation in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

# Getting Started

This documentation was formulated according to the [Diataxis model](https://diataxis.fr/) to help you quickly clone the repository, start up your local server, and implement new documentation. 

You will find links to relevant information on dependencies as well as an internal MDX style guide and MDX template where necessary. 

## Cloning the Repository

You will need to clone the repository in order to make changes to the documentation. 

First, open your local terminal and ensure you are in the directory you wish to clone this repository into.

Next, paste the following command into your terminal to clone the repository into the active directory:

```
git clone https://github.com/pieces-app/documentation.git
```
:::info 

Cloning may take upwards of 15 seconds due to the presence of media files. 
:::

Alternatively, if using VS Code or another IDE, use the built-in repository cloning feature to clone the repository using the following URL:

```
https://github.com/pieces-app/documentation.git
```
## Run the Documentation Locally
### Install Global Dependencies

You will need `pnpm` installed on your machine. If you don’t currently have Node/NPM installed on your machine, click [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to follow the docs to get started.

Once you have `npm`, you can install it using the following command:

```
npm install -g pnpm
```

:::info

If you run into any permissions issues trying to install PNPM, you need to `sudo` the command to elevate the command status and bypass the EACCESS issue. 
:::

```
sudo npm install -g pnpm
```

### Install Project Dependencies

Once you’ve installed `pnpm` via `npm`, run the following command from the root of the `documentation` repository to install the necessary project dependencies:

```
pnpm install
```

:::info

If you do not already have the latest version of Node installed, or a version higher than 18.12, you can update Node with elevated permissions using the following commands:
:::

``` 
sudo npm install -g n 
sudo n stable 
```
# Run the Project
## Start the Server

After the project dependencies have been installed, from the root of the `documentation` repository, run the following command to start the development server:

```
pnpm run start
```
This command starts a local development server and opens a browser window to your [localhost](http://localhost:3000/). Changes are reflected live without having to restart the server.

![Image that demos the live view and an example IDE](https://drive.google.com/uc?export=view&id=1nfg6ISD_P5qO6IqC3HmSxyjzS-3D5YEF)

:::info

It may take a few seconds for the server to launch.
:::

### Testing Compilation for Production

This command generates static content into the build directory. You should run this command to ensure that your changes will compile correctly before opening a pull request.

```
pnpm run build
```

# Creating & Updating Documentation
## Open the Project

Using your preferred IDE, such as JetBrains, IntelliJ, VS Code, Sublime or others, open up the `docs project.`

## Navigating to the Docs Directory

Start by navigating to the docs directory.

The `docs` directory contains all relevant documentation on features, individual plugins, how-to guides, product highlights and benefits, and more.

## Adding New Documentation Pages

First, navigate to the correct directory within the repository. 

For example, new plugin pages should be created under `extensions-plugins.` 

Features should likewise be created under `features`, with other documentation organized appropriately.

### Creating New Plugin Pages

Start creating a plugin or extension page by creating a folder with the name of the product, such as `cli` or `raycast`.

Do not create a `.mdx` file with the name of the plugin, like `jetbrains.mdx`. 

Inside the folder, create an `index.mdx` document that will serve as the point of entry for the documentation.

Depending on the plugin or extension, you can also create `quickstart.mdx, commands.mdx`, or other mdx-format pages as necessary.

![An example of creating a new documentation page.](https://drive.google.com/uc?export=view&id=1YvLPAWHFDXt4ccADwf0YtA2QZkDhS3OM)

The organization of plugin and extension page folders in this manner allows for clear, organized, and product-oriented documentation. 

![A screenshot of the Pieces CLI documentation.](https://drive.google.com/uc?export=view&id=1syRX_QQU3AnhvYF4EB8nWv83xj_czdSu)

# Formatting & Styling Documentation

Use an existing plugin or extension page as a reference for formatting and styling your new page.

All pages are written in MDX format.

You can follow [this MDX-format style guide.](https://kabartolo.github.io/chicago-docs-demo/docs/quick-start/)

## Table of Contents

The table of contents for each piece of documentation is automatically generated, thanks to Docusaurus. 

These TOCs are generated based on the headers (e.g., h1, h2, h3, etc.) within the MDX files. 

Docusaurus interprets these headers and generates a hierarchical structure that is then displayed as the sidebar on the right-hand side of the page.

![Image showing the table of contents on the Pieces for Developers documentation site.](https://drive.google.com/file/d/1M5W1fJQG_UqpmQslLSWJAoPFX3qc_oUw)

## Creating & Updating Sidebars

To create a sidebar inside your documentation’s webpage, navigate to the `sidebars.ts file` in the root of the documentation repository. 

You can create and edit `.json objects` according to the existing structure and format of the objects within the `sidebars.ts` file. 

Categories appear as expandable sections, and items within those categories are displayed as links. 

## .JSON Object Structure

### Type

The type specifies what kind of item it is. Types used throughout Pieces documentation are `category` and `doc`. 

The type in this object is a `category`. 

```
{
	“type”: “category,”
	“label”: “Getting Started”,
	“Items”: [...]
}
```

### Label

This is the readable name of the item—the heading. 

For categories, it should be the name of the category and for documents, it should be the title of the document. 

In this case, the `label` is titled `Getting Started`.

```
{
	“type”: “category,”
	“label”: “Getting Started”,
	“Items”: [...]
}
```

### Items

The items field inside the object is an array that contains other items, like sub-categories or documents. 

To link an item within the items list to an `index.mdx` or relevant documentation page, the `ID` must match the path.

For example, if your index.mdx is located at `docs/installation-getting-started/index.mdx`, the ID would be `installation-getting-started/index.`

```
{
  "type": "category",
  "label": "Getting Started",
  "items": [
    {
      "type": "doc",
      "id": "installation-getting-started/what-am-i-installing",
      "label": "Overview"
    },
    {
      "type": "doc",
      "id": "installation-getting-started/macos",
      "label": "macOS"
    }
  ]
}
```

## Creating Nested Sidebars

Nested sidebars are implemented by adding sub-categories within a category inside the `sidebars.ts` file. 

### Defining the Structure

Once inside the `sidebars.ts` file, define the structure of the object using the aforementioned `type`, `id`, and `label`. 

### Add Categories and Items

Each category can contain several items, which are interpreted by Docusaurus and rendered as individual documentation pages. 

### Configuring Nested Sidebars

You can nest a sidebar by adding sub-categories within a category. 

This allows for a hierarchical structure where clicking a category header will either reveal or hide the sub-items it contains. 

![An image of the Pieces OS documentation depicting a sidebar.](https://drive.google.com/file/d/1ctD7iZll9nhVDlIUNPWt1RDgtrpoqSv8)

# Branching & Committing Changes

## GitHub Desktop Application

The easiest way to create a branch, make changes to the documentation, and commit them before the final pull request is to use the GitHub desktop app.

If you don’t have it already, you can download it [here.](https://desktop.github.com/download/)

### Create a Branch

Click on the `Current Branch` dropdown and select `New Branch`. 

Name your branch accordingly and click `Create Branch`. 

Once the branch is created, you can open the documentation repository in your preferred IDE and make your changes.

### Commit your Changes

Returning to the GitHub Desktop application, you should see the changes you made listed under `Changes`.

Make sure to write a meaningful commit message that aptly describes the changes you made, like ‘Updated documentation process instructions.’

Click `Commit to [your branch name here]`.

### Push your Changes

Click `Push Origin` in the top right corner to push your changes to the repository. 

### Create a Pull Request

Click `Branch` > `Create Pull Request`.

This will open a window in your browser to the documentation repository on GitHub. 

Fill in the pull request title and description, then click `Create Pull Request`.