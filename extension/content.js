// Function to create the theme settings button
function createThemeButton() {
    // Wait for the sidebar to be loaded
    const sidebarInterval = setInterval(() => {
        const sidebar = document.querySelector('nav[role="navigation"]');
        if (!sidebar) return;

        clearInterval(sidebarInterval);

        // Check if our button already exists
        if (document.getElementById('theme-settings-button')) return;

        // Create the button container
        const buttonContainer = document.createElement('div');
        buttonContainer.id = 'theme-settings-container';
        buttonContainer.style.position = 'relative';
        buttonContainer.style.width = '100%';
        buttonContainer.style.marginTop = '10px';

        // Create the button
        const button = document.createElement('a');
        button.id = 'theme-settings-button';
        button.className = 'css-175oi2r r-6koalj r-eqz5dr r-16y2uox r-1habvwh r-rehuqn r-13qz1uu r-1ny4l3l r-1loqt21';
        button.setAttribute('role', 'link');
        button.setAttribute('aria-label', 'Theme');
        button.href = 'https://x.com/settings/display';
        button.style.display = 'flex';
        button.style.alignItems = 'left';
        button.style.padding = '12px';
        button.style.borderRadius = '9999px';
        button.style.transition = 'background-color 0.2s';

        // Detect current theme to apply appropriate hover style
        const isDim = document.body.classList.contains('Dim');
        const isLightsOut = document.body.classList.contains('LightsOut');

        button.innerHTML = `
      <div class="css-175oi2r r-sdzlij r-dnmrzs r-1awozwy r-18u37iz r-1777fci r-1slz7xr r-o7ynqc r-6416eg">
        <div class="css-175oi2r">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-lwhw9o r-cnnz9e" width="26" height="26">
            <g>
              <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
            </g>
          </svg>
        </div>
        <div style="margin-left: 4px; font-weight: 400; font-size: 20px;">Theme</div>
      </div>
    `;

        // Add hover effect to the button
        button.addEventListener('mouseenter', () => {
            if (isLightsOut || isDim) {
                button.style.backgroundColor = 'rgba(239, 243, 244, 0.1)';
            } else {
                button.style.backgroundColor = 'rgba(15, 20, 25, 0.1)';
            }
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '';
        });

        // Add button to the container
        buttonContainer.appendChild(button);

        // Add the container to the sidebar at the bottom
        // First try to find the profile link to position our button after it
        const profileLink = sidebar.querySelector('a[data-testid="AppTabBar_Profile_Link"]');
        if (profileLink) {
            const parentElement = profileLink.closest('nav');
            if (parentElement) {
                parentElement.appendChild(buttonContainer);
            } else {
                sidebar.appendChild(buttonContainer);
            }
        } else {
            sidebar.appendChild(buttonContainer);
        }
    }, 1000);
}

// Start the extension
createThemeButton();

// Re-run when navigation occurs (Twitter is a SPA)
const observer = new MutationObserver((mutations) => {
    // Check if our button is missing
    if (!document.getElementById('theme-settings-button')) {
        createThemeButton();
    }
});

observer.observe(document.body, { childList: true, subtree: true });

