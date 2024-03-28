import os
import glob
import shutil
import re
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


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
    # Get all files in the target directory
    existing_files = os.listdir(target_dir_path)
    # Sort files by filename to ensure order
    existing_files.sort()
    # Find the position for the new file in the sorted list
    sorted_position = sorted(existing_files + [original_filename]).index(original_filename) + 1
    # Format the position as a double-digit string
    file_number_str = f"{sorted_position:02d}"
    # Combine the number with the original filename
    new_filename = f"{file_number_str}-{original_filename}"
    return new_filename


def organize_markdown_files_in_directory(source_directory):
    # Create a copy of the source directory
    # Remove "_raw" from the copied_directory name
    copied_directory = source_directory.replace("_raw", "")

    if os.path.exists(copied_directory):
        shutil.rmtree(copied_directory) # Remove the existing copy if it exists
    shutil.copytree(source_directory, copied_directory)
    logging.info(f"Copied {source_directory} to {copied_directory}")

    # Ensure target directories exist or create them in the copied directory
    target_dirs = ['apis', 'models']
    for dir_name in target_dirs:
        dir_path = os.path.join(copied_directory, dir_name)
        os.makedirs(dir_path, exist_ok=True)
        logging.info(f"Ensured directory exists: {dir_path}")

    # Find all Markdown files in the copied directory
    file_paths = glob.glob(os.path.join(copied_directory, "*.md"))
    logging.info(f"Found {len(file_paths)} markdown files to organize in the copied directory.")

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
        # Transform the links in the content based on the target directory
        transformed_content = transform_links(content, target_dir)
        # Write the transformed content back to the file
        with open(file_path, 'w') as f:
            f.write(transformed_content)

        target_path = os.path.join(copied_directory, target_dir)
        # Ensure the directory exists
        os.makedirs(target_path, exist_ok=True)
        # Prefix the filename with a number
        numbered_filename = prefix_filename_with_number(target_path, filename)
        # Construct the full target path with the new filename
        full_target_path = os.path.join(target_path, numbered_filename)
        # Move and rename the file to the target directory with the new name
        shutil.move(file_path, full_target_path)
        logging.info(f"Moved and renamed {file_path} to {full_target_path}")


root_directory = './docs/build/sdks/python/python_raw'
organize_markdown_files_in_directory(root_directory)
