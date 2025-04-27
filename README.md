# X Theme Settings Button

A simple browser extension that adds a dedicated button on X.com (formerly Twitter) to quickly access theme settings.

## Features

- Adds a "Theme" button to the X.com sidebar
- Quick access to X's display settings
- Adapts to X's current theme (light/dim/dark)
- Responsive design (shows icon-only on smaller screens)
- Works on both twitter.com and x.com domains

## Installation

### From Source Code

1. **Clone or download this repository**

2. **Load the extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top-right corner
   - Click "Load unpacked" and select the extension directory

3. **Load the extension in Firefox:**
   - Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on" and select the manifest.json file

4. **Load the extension in Edge:**
   - Open Edge and navigate to `edge://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the extension directory

5. **Load the extension in Safari:**
   - First convert it to a Safari extension using Xcode
   - Open Xcode and create a new Safari Extension project
   - Copy the extension files to the project
   - Build and run the extension

### Usage

1. After installation, refresh x.com
2. You'll see a new "Theme" button in the sidebar
3. Click the button to quickly access X's display settings

## How It Works

The extension works by:
1. Injecting a button into X's sidebar navigation
2. Detecting the current theme to apply appropriate styling
3. Linking directly to X's display settings page
4. Using a MutationObserver to ensure the button persists during navigation

## Technical Details

- **Manifest Version**: 3
- **Languages**: JavaScript, CSS
- **Permissions**: Only accesses twitter.com and x.com domains
- **File Structure**:
  - `manifest.json`: Extension configuration
  - `content.js`: Main functionality
  - `styles.css`: Additional styling
  - `icons/`: Extension icons

## Contributing

Feel free to fork this repository and submit pull requests with improvements or bug fixes.

## License

This project is available under the MIT License.
