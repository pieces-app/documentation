import os
import glob
import json
import re
from datetime import datetime

def parse_front_matter(file_content):
    lines = file_content.split('\n')
    front_matter = {}
    for line in lines:
        if not line:
            continue
        key, value = line.split(':', 1)
        front_matter[key.strip()] = value.strip()
    return front_matter


def adjust_headers(body):
    # Increment Markdown header levels for h2 and lower
    def replace_header(match):
        header_level = len(match.group(1)) + 1  # Increment the header level
        if header_level > 1:  # Only adjust h2 and lower
            return '#' * header_level + ' '  # Return the adjusted header
        return match.group(0)  # Return the original header for h1

    # Regex to find Markdown headers
    return re.sub(r'^(#+)\s', replace_header, body, flags=re.MULTILINE)


def parse_markdown_files(directory):
    products = set()
    terms = []

    # Update the glob pattern to include '**' for recursive search and '*.md' for Markdown files
    pattern = os.path.join(directory, '**', '*.md')
    for filepath in glob.glob(pattern, recursive=True):
        with open(filepath, 'r', encoding='utf-8') as file:
            file_content = file.read()
            parts = file_content.split('---', 2)
            if len(parts) < 3:
                continue  # Skip files that do not have the expected format

            post = parse_front_matter(parts[1])

            # If post is a draft, skip it
            if 'draft' in post and post['draft'].lower() == 'true':
                continue

            body = parts[2].strip()
            body = adjust_headers(body)
            product_directory = os.path.basename(os.path.dirname(filepath))

            if 'products' in post and 'title' in post and 'description' in post:
                # Split products string by comma
                post['products'] = [product.strip() for product in post['products'].split(',')]
                products.update(post['products'])
                terms.append({
                    'title': post['title'],
                    'description': post['description'],
                    'products': post['products'],
                    'date': post['date'],
                    'body': body,
                    'referencePath': f"releases/{product_directory}/{os.path.basename(filepath).replace('.md', '')}"
                })

    return {
        'products': sorted(list(products)),
        'releases': sorted(terms, key=lambda x: datetime.strptime(x['date'], '%Y-%m-%d'), reverse=True)
    }


def generate_json_file(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=2)


directory = 'docs/changelog/releases'
output_file = 'docs/changelog/changelog.json'

data = parse_markdown_files(directory)
print(f"Found {len(data['releases'])} releases in {len(data['products'])} products.")

generate_json_file(data, output_file)
print(f"JSON file '{output_file}' has been generated.")