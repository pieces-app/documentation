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
    categories = set()
    terms = []

    for filepath in glob.glob(os.path.join(directory, '*.md')):
        with open(filepath, 'r', encoding='utf-8') as file:
            file_content = file.read()
            parts = file_content.split('---', 2)

            post = parse_front_matter(parts[1])
            body = parts[2].strip()

            if 'category' in post and 'title' in post and 'description' in post:
                categories.add(post['category'])
                terms.append({
                    'term': post['title'],
                    'definition': post['description'],
                    'category': post['category'],
                    'referencePath': f"terms/{os.path.basename(filepath).replace('.md', '')}"
                })

    return {
        'categories': sorted(list(categories)),
        'terms': terms
    }


def generate_json_file(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=2)


directory = 'docs/build/glossary/terms'
output_file = 'docs/build/glossary/definitions.json'

data = parse_markdown_files(directory)
print(f"Found {len(data['terms'])} terms in {len(data['categories'])} categories.")

generate_json_file(data, output_file)

print(f"JSON file '{output_file}' has been generated.")
