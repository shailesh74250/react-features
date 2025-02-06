# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# React reusable components with help of Storybook.
## Reference - https://github.com/brillout/awesome-react-components
- Icon Bar
- Menu Icon
- Accordion
- Vertical Tabs
- Table
- Infinite Scroll
- Overlay
- Notification
- Tooltip
- Menu
- Sticky 
- Tabs
- Loader
- Captcha
- Carousel
- Buttons
- Collapse
- Chart
- Command palette
- Tree
- UI Navigation
- Custom Scrollbar
- Audio/Video
- Map
- Time/Date/Age
- Photo/Image
- Icons
- Paginator
- Markdown Viewer
- Canvas
- Pagination 
- Markdown Viewer
- Canvas
- Screenshot
- Miscellaneous
- Form Components
    - Date/Time picker
    - Emoji picker
    - Input Types
    - Autocomplete
    - Select
    - Color Picker
    - Toggle
    - Slider
    - Radio Button
    - Type Select
    - Tag Input
    - Autosize Input / Textarea
    - Star Rating
    - Drag and Drop
    - Sortable List
    - Rich Text Editor
    - Markdown Editor
    - Image Editing
    - Form Component Collections
    - Miscellaneous
    - Syntax Highlight
- UI Layout
- UI Animation
    - Parallax
- UI Frameworks
    - Responsive
    - Themes
- UI Utilities
    - Reporter
        - Reporter
            - Visibility Reporter
            - Measurement Reporter
    - Device Input
        - Keyboard Events
        - Scroll Events
        - Touch Swipe
        - Mouse Events
    - Meta Tags
    - Portal
    - Test User Behavior
- Code Design
    - Data store
    - Form logic
    - Router
    - Props from server
    - Communication with server
    - CSS/Style
    - HTML Template
    - Isomorphic Apps
    - Boilerplate
    - Miscellaneous
- Utilities
    - i18n
    - Framework bindings/integrations
    - Integrations with Third Party Services
- Performance
    - UI
        - Inspect
        - Lazy Load
    - App Size
    - Server-Side Rendering
- Dev Tools
    - Test 
    - Redux
    - Inspect
    - Miscellaneous
- Miscellaneous
    - Static Website Generator
- Cloud Solutions
    - Databases
