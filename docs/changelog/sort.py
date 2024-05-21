import os
import glob
import json


def parse_front_matter(file_content):
    lines = file_content.split('\n')
    front_matter = {}
    for line in lines:
        if not line:
            continue
        key, value = line.split(':', 1)
        front_matter[key.strip()] = value.strip()
    return front_matter


def parse_markdown_files(directory):
    products = set()
    terms = []

    for filepath in glob.glob(os.path.join(directory, '*.md')):
        print(f"Processing file: {filepath}")

        with open(filepath, 'r', encoding='utf-8') as file:
            file_content = file.read()
            parts = file_content.split('---', 2)

            post = parse_front_matter(parts[1])
            body = parts[2].strip()

            if 'products' in post and 'title' in post and 'description' in post:
                # Split products string by comma
                post['products'] = [product.strip() for product in post['products'].split(',')]
                products.update(post['products'])
                terms.append({
                    'title': post['title'],
                    'description': post['description'],
                    'products': post['products'],
                    'body': body,
                    'referencePath': f"releases/{os.path.basename(filepath).replace('.md', '')}"
                })

    return {
        'products': sorted(list(products)),
        'releases': sorted(terms, key=lambda x: x['title'])
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
