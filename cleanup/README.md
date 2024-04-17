# Cleanup Documentation Project

Welcome to the Cleanup Documentation Project! This project is dedicated to organizing, cleaning, and transforming markdown documentation files for various programming languages, including TypeScript, Python, Dart, and Kotlin. Our goal is to ensure that the documentation is more readable, accessible, and user-friendly.

## Overview

The Cleanup Documentation Project consists of Python scripts designed to automate the process of cleaning up and reorganizing markdown files. These scripts perform a variety of tasks, such as transforming links, fixing header levels, removing unnecessary markdown links, and more, to enhance the overall quality and structure of the documentation.

## Features

- **Transform Links**: Converts links within the documentation to ensure they point to the correct directory, enhancing navigation between different sections of the documentation.
- **Fix Headers**: Adjusts the levels of headers to maintain a hierarchical structure within the documentation, making it easier to follow and understand.
- **Remove Markdown Links**: Eliminates unnecessary markdown file links, streamlining the documentation for better readability.
- **Fix Variables and Types**: Corrects the formatting of variables and types within the documentation to adhere to standard conventions.
- **Remove README Links**: Cleans up links that point back to the README file, reducing redundancy and focusing the reader on the content that matters.
- **Organize Files**: Moves and renames markdown files into appropriate directories, ensuring a logical structure that facilitates easy access to information.

## Directory Structure

The project is organized into separate directories for each programming language (TypeScript, Python, Dart, and Kotlin), each containing a Python script (`typescript.py`, `python.py`, `dart.py`, `kotlin.py`) responsible for cleaning up the markdown documentation specific to that language.

```
cleanup/
├── kotlin.py
├── dart.py
├── python.py
├── README.md
└── typescript.py
```

## Usage

To use the scripts effectively, follow these steps:

1. Generate new documentation.
2. Paste the generated documentation into the `/docs/build/reference` directory within the Cleanup Documentation Project structure.
3. Ensure that the name of the new docs folder corresponds to the language and is suffixed with `_raw` (e.g., `typescript_raw`, `python_raw`, etc.).
4. Navigate to the `cleanup` directory.
5. Run the respective Python script to update the documentation. For example, to clean up Kotlin documentation:

```bash
cd /path/to/cleanup
python typescript.py
```

Ensure you have Python installed on your system and that you have read and write permissions for the directories involved.
