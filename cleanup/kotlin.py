import os
import re

def fix_anchor_links(directory):
    print(f"Starting to process files in {directory}...")
    processed_files_count = 0

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                print(f"Processing {filepath}...")

                with open(filepath, 'r') as f:
                    content = f.read()

                # Regex to find Markdown links with camelCase anchors
                # Adjusts only the anchor part after the '#' symbol
                content, replacements = re.subn(r'(\[.*?\]\(.*?#)([a-z]+[A-Z][a-zA-Z]*)', lambda x: x.group(1) + x.group(2).lower(), content)

                if replacements > 0:  # Check if any replacements were made
                    print(f"Adjusted {replacements} links in {file}.")
                    with open(filepath, 'w') as f:
                        f.write(content)
                    processed_files_count += 1
                else:
                    print(f"No links needed adjustment in {file}.")

    print(f"Finished processing files. Total files adjusted: {processed_files_count}")

fix_anchor_links('./docs/build/sdks/kotlin/docs')
