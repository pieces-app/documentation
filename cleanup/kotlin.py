import os
import glob
import shutil
import re
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def remove_md_links(text):
    find = '.md'
    replacement = ''
    result = text.replace(find, replacement)
    return result


def fix_h1_headers(text):
    pattern = r'# (\w+?)Api'
    replacement = r'# \1 API'
    result = re.sub(pattern, replacement, text)

    pattern = r'title: (\w+?)Api'
    replacement = r'title: \1 API'
    result = re.sub(pattern, replacement, result)
    return result


def fix_java_classes(text):
    pattern = r'\[(.*?)\]\(java\.(net\.URI|time\.OffsetDateTime|util\.UUID|math\.BigDecimal)\)'
    replacement = r'\1'
    result = re.sub(pattern, replacement, text)
    return result


# ../models/kotlin.String
def fix_kotlin_classes(text):
    pattern = r'\[(.*?)\]\(../models/kotlin.String\)'
    replacement = r'\1'
    result = re.sub(pattern, replacement, text)
    return result


def fix_camel_case_anchors(text):
    # This regex matches the entire markdown link syntax, capturing the label and the anchor separately
    pattern = re.compile(r'(\[.*?\])\(.*?#([a-zA-Z][a-zA-Z0-9]*[a-z0-9])([A-Z][a-zA-Z0-9]*)*\)')

    def to_lowercase(match):
        label = match.group(1)  # Capture the label part of the link
        anchor_parts = [part for part in match.groups()[2:] if part is not None]
        anchor = match.group(2) + ''.join(anchor_parts)
        lower_anchor = anchor.lower()  # Convert the anchor to lowercase
        # Reconstruct the markdown link with the original label and the modified, lowercase anchor
        return f'{label}(#{lower_anchor})'

    # Replace all occurrences of the pattern with their modified equivalents
    return pattern.sub(to_lowercase, text)


def fix_variables(text):
    pattern = r'\{([a-zA-Z0-9\-_\.]+)\}'
    replacement = r'\\{\1\\}'
    result = re.sub(pattern, replacement, text)
    return result


def fix_str_links(text):
    pattern = r'\[(.*?)\]\(../models/str\)'
    replacement = r'\1'
    result = re.sub(pattern, replacement, text)
    return result


def delink_links(text):
    pattern = r'https://pieces.us.auth0.com/api/v2/'
    replacement = '`https://pieces.us.auth0.com/api/v2/`'
    result = re.sub(pattern, replacement, text)

    pattern = r'https://pieces.us.auth0.com'
    replacement = '`https://pieces.us.auth0.com`'
    result = re.sub(pattern, replacement, text)

    pattern = r'https://auth.pieces.services/authorize'
    replacement = '`https://auth.pieces.services/authorize`'
    result = re.sub(pattern, replacement, result)

    pattern = r'http://localhost:8080/authentication/response'
    replacement = '`http://localhost:8080/authentication/response`'
    result = re.sub(pattern, replacement, result)
    return result


def remove_readme_links(text):
    find = [
        '[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)',
        '[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)',
        '[auth0](../README#auth0), [auth0](../README#auth0), [auth0](../README#auth0)'
    ]
    replacement = ''
    for f in find:
        text = text.replace(f, replacement)

    return text


def transform_links(text, directory_type):
    if directory_type == "apis":
        pattern = r'\[\*\*(.*?)\*\*\]\((?!.*Api)(.*?)\)'
        replacement = r'[**\1**](../models/\2)'
    elif directory_type == "models":
        pattern = r'\[\*\*(.*?)\*\*\]\((?=.*Api)(.*?)\)'
        replacement = r'[**\1**](../apis/\2)'
    else:
        logging.warning(f"Unrecognized directory type: {directory_type}")
        return text  # Return the text unchanged if directory_type is not recognized
    result = re.sub(pattern, replacement, text)
    return result


def prefix_filename_with_number(target_dir_path, original_filename):
    # Construct the full path for the original filename
    full_path = os.path.join(target_dir_path, original_filename)
    # Check if the file already exists
    if os.path.exists(full_path):
        # If the file exists, return the original filename without modification
        return original_filename
    else:
        # If the file does not exist, proceed with adding a number prefix
        existing_files = os.listdir(target_dir_path)
        existing_files.sort()
        sorted_position = sorted(existing_files + [original_filename]).index(original_filename) + 1
        file_number_str = f"{sorted_position:02d}"
        new_filename = f"{file_number_str}-{original_filename}"
        return new_filename


def organize_markdown_files_in_directory(source_directory):
    # Temp directory is used to organize the files before moving them to the new directory
    temp_directory = source_directory.replace("_raw", "_temp")
    copied_directory = source_directory.replace("_raw", "")
    logging.info(f"Copying {source_directory} to {copied_directory}")

    if os.path.exists(temp_directory):
        shutil.rmtree(temp_directory)
        logging.info(f"Removed old directory: {temp_directory}")

    # Copy the source directory to the temp directory
    shutil.copytree(source_directory, temp_directory)
    logging.info(f"Copied {source_directory} to {temp_directory}")

    # Find all Markdown files in the copied directory
    file_paths = glob.glob(os.path.join(temp_directory, "**", "*.md"), recursive=True)
    logging.info(f"Found {len(file_paths)} markdown files to organize.")

    # Sort the list of file paths
    file_paths.sort()
    logging.info("Sorted the markdown files by filename.")

    for file_path in file_paths:
        filename = os.path.basename(file_path)
        # Determine the target directory based on the filename
        if "Api" in filename:
            target_dir = "apis"
        else:
            target_dir = "models"

        # Read the content of the file
        with open(file_path, 'r') as f:
            content = f.read()

        # Transform the content
        transformed_content = transform_links(content, target_dir)
        transformed_content = remove_md_links(transformed_content)
        transformed_content = fix_h1_headers(transformed_content)
        transformed_content = fix_java_classes(transformed_content)
        transformed_content = fix_kotlin_classes(transformed_content)
        transformed_content = fix_camel_case_anchors(transformed_content)
        # transformed_content = fix_h2_headers(transformed_content)
        transformed_content = fix_variables(transformed_content)
        # transformed_content = fix_str_links(transformed_content)
        transformed_content = delink_links(transformed_content)
        transformed_content = remove_readme_links(transformed_content)

        # Write the transformed content back to the file
        with open(file_path, 'w') as f:
            f.write(transformed_content)
        target_path = os.path.join(temp_directory, target_dir)

        # Ensure the directory exists
        os.makedirs(target_path, exist_ok=True)

        # Prefix the filename with a number
        numbered_filename = prefix_filename_with_number(target_path, filename)

        # Construct the full target path with the new filename
        full_target_path = os.path.join(target_path, numbered_filename)

        # Copy and rename the file to the target directory with the new name
        shutil.move(file_path, full_target_path)
        logging.info(f"Copied and renamed {file_path} to {full_target_path}")

    # Move the apis and models directories in the temp directory to the new directory
    for dir_name in ['apis', 'models']:
        # Remove the target directory if it already exists
        target_dir = os.path.join(copied_directory, dir_name)
        if os.path.exists(target_dir):
            shutil.rmtree(target_dir)
            logging.info(f"Removed directory: {target_dir}")

        # Move the directory from the temp directory to the new directory
        source_dir = os.path.join(temp_directory, dir_name)
        target_dir = os.path.join(copied_directory, dir_name)
        shutil.move(source_dir, target_dir)
        logging.info(f"Moved directory: {source_dir} to {target_dir}")

    # Remove the temp directory
    shutil.rmtree(temp_directory)
    logging.info(f"Removed directory: {temp_directory}")

    # Remove the source directory
    shutil.rmtree(source_directory)
    logging.info(f"Removed directory: {source_directory}")

    logging.info(f"Finished organizing markdown files in {source_directory}.")


def main():
    root_directory = './docs/build/reference/kotlin_raw'
    organize_markdown_files_in_directory(root_directory)


if __name__ == "__main__":
    main()

# test_content = """
# [**activitiesCreateNewActivity**](ActivitiesApi#activitiesCreateNewActivity) | **POST** /activities/create | /activities/create [POST]
# [**activitiesDeleteSpecificActivity**](ActivitiesApi#ActivitiesApi#activitiesdeletespecificactivity) | **POST** /activities/\{activity\}/delete | /activities/\{activity\}/delete [POST]
# [**activitiesSnapshot**](ActivitiesApi#activitiesSnapshot) | **GET** /activities | /activities [GET]
# """
#
# print(fix_camel_case_anchors(test_content))

