import requests

# - This script fetches the latest non-prerelease release from a GitHub repository
#   and writes a changelog to a file in the releases directory.
# - Will use Pieces SDK to generate a better changelog in the future.
# - Also needs to link out to doc pages related to features/fixes/etc. (Could be tricky)

# Replace with your personal access token
token = "YOUR_PERSONAL_ACCESS_TOKEN"

# Replace with the repository owner and name
owner = "pieces-app"
repo = "os_server"

# Product for filtering
product = "pieces_os"

# GitHub API endpoint for releases
url = f"https://api.github.com/repos/{owner}/{repo}/releases"

# Set up headers for authentication and accept the JSON format
headers = {
    "Authorization": f"Bearer {token}",
    "Accept": "application/vnd.github+json"
}

# Send the GET request to the GitHub API
response = requests.get(url, headers=headers)

# Check if the request was successful
if response.status_code == 200:
    releases = response.json()

    # Find the latest non-prerelease
    latest_release = None
    for release in releases:
        if not release['prerelease']:
            latest_release = release
            break

    if latest_release:
        # Extract necessary details
        release_name = latest_release['name']
        release_tag = latest_release['tag_name']
        published_at = latest_release['published_at']
        body = latest_release['body']

        # Create a changelog
        changelog = f"# Changelog for {release_name} ({release_tag})\n\n"
        changelog += f"**Published on:** {published_at}\n\n"
        changelog += f"**Details:**\n\n{body}\n"

        # Write the changelog to a file
        with open(f"releases/{product}/{release_tag}.md", 'w') as file:
            file.write(changelog)

        print("Changelog has been written to CHANGELOG.md")
    else:
        print("No non-prerelease found.")
else:
    print(f"Failed to retrieve releases: {response.status_code}")
