# Testing Guide

## Running Tests
To run the unit tests, use:
```sh
npm test
```
For coverage:
```sh
npm run test -- --coverage
```

What is Tested?

UI Components: 

- `Accordion`: Tests ensure that the accordion renders correctly, expands when clicked, and collapses when clicked again.
- `Alert`: Tests verify that the alert component renders correctly, displays the title and description, and applies the correct styling based on the variant.
- `AlertDialog`: Tests verify that the alert dialog opens when triggered, displays the title and description, and closes when the cancel button is clicked.
- `Avatar`: Tests verify that the avatar component renders correctly, displays the image when provided, shows a fallback when no image is available, and applies custom styles.
- `Badge`: Tests verify that the badge component renders correctly, applies the correct variant styles, and accepts custom classes.
- `Breadcrumb`: Tests ensure that the breadcrumb component renders correctly, links navigate properly, separators are displayed, and the current page is marked correctly.
- `Button`: Tests verify that the button component renders correctly, triggers click events, applies the correct variants and sizes, supports asChild rendering, and handles the disabled state.
- `Calendar`: Tests verify that the calendar renders correctly, displays navigation buttons, allows month navigation, and correctly renders selectable days.
- `Card`: Tests verify that the card component renders correctly, including its header, title, description, content, and footer, and applies custom styles.
- `Carousel`: Tests verify that the carousel renders correctly, displays navigation buttons, and allows navigation between slides.
- `Chart`: Tests verify that the chart component renders correctly, applies custom styles, and supports custom chart IDs.
- `Checkbox`: Tests verify that the checkbox component renders correctly, toggles state when clicked, respects the disabled property, and applies custom styles.
- `Command`: Tests verify that the command component renders correctly, displays search input, filters items dynamically, and shows an empty state when no results are found.
- `ContextMenu`: Tests verify that the context menu renders correctly, opens on right click, and closes when clicking outside.
- `Dialog`: Tests verify that the dialog component renders correctly, opens when triggered, closes when clicking outside or on the close button, and displays the correct title and description.
- `Drawer`: Tests verify that the drawer component renders correctly, opens when triggered, closes when clicking outside or on the close button, and displays the correct title and description.
- `DropdownMenu`: Tests verify that the dropdown menu renders correctly, opens when triggered, and closes when clicking outside.
- `Form`: Tests verify that the form component renders correctly, validates required fields, and displays labels, descriptions, and error messages properly.
- `HoverCard`: Tests verify that the hover card renders correctly, displays content when hovered, and hides content when the mouse leaves.
- `Input`: Tests verify that the input field renders correctly, accepts and displays user input, applies custom styles, supports different types, and handles disabled state properly.
- `Label`: Tests verify that the label component renders correctly, associates with input fields properly, applies custom styles, and supports disabled state styling.
- `Menubar`: Tests verify that the menubar component renders correctly, opens when triggered, and closes when clicking outside.
- `NavigationMenu`: Tests verify that the navigation menu renders correctly, opens when triggered, closes when clicking outside, and navigates properly when a menu link is clicked.
- `Pagination`: Tests verify that the pagination component renders correctly, highlights the active page, allows navigation to the next page, and correctly displays ellipses for hidden pages.
- `Popover`: Tests verify that the popover component renders correctly, opens when triggered, closes when clicking outside, and applies custom styles properly.
- `Progress`: Tests verify that the progress component renders correctly, updates its indicator width based on value, defaults to 0% progress, and supports custom styles.
- `RadioGroup`: Tests verify that the radio group component renders correctly, allows selection, supports disabled state, and applies custom styles properly.
- `Resizable`: Tests verify that the resizable panel component renders correctly, displays resize handles when enabled, allows panel resizing, and applies custom styles properly.
- `ScrollArea`: Tests verify that the scroll area component renders correctly, supports both vertical and horizontal scrollbars, and applies custom styles properly.
- `Select`: Tests verify that the select component renders correctly, opens and closes the dropdown properly, updates selected values, and applies custom styles.
- `Separator`: Tests verify that the separator component renders correctly, supports both horizontal and vertical orientations, applies custom styles, and is decorative by default.
- `Sheet`: Tests verify that the sheet component renders correctly, opens when triggered, closes when the close button is clicked, and applies custom styles properly.
- `Sidebar`: Tests verify that the sidebar component renders correctly, supports toggling via the trigger button, includes a separator, and applies custom styles properly.
- `Skeleton`: Tests verify that the skeleton component renders correctly, applies default styles, supports custom class names, and allows additional props.
- `Slider`: Tests verify that the slider component renders correctly, updates value when interacted with, supports custom styles, and handles disabled state properly.
- `Toaster (Sonner)`: Tests verify that the toast notification system renders correctly, applies the correct theme, supports custom styles, and maintains expected default behaviors.
- `Spinner`: Tests verify that the spinner component renders correctly, supports different sizes, hides when `show` is false, and applies custom styles properly.
- `Switch`: Tests verify that the switch component renders correctly, toggles state when clicked, supports the disabled state, and applies custom styles properly.
- `Table`: Tests verify that the table component renders correctly, displays the correct number of rows and columns, and supports custom styles.
- `Tabs`: Tests verify that the tabs component renders correctly, switches content when a tab is clicked, applies active styles correctly, and supports custom styles.
- `Textarea`: Tests verify that the textarea component renders correctly, accepts user input, supports the disabled state, displays placeholders, and applies custom styles properly.
- `Toast`: Tests verify that the toast notification component renders correctly, supports a close button, allows custom actions, and applies custom styles properly.
- `Toaster`: Tests verify that the toaster component renders correctly, displays multiple toasts, supports a close button, and applies custom styles properly.
- `Toggle`: Tests verify that the toggle component renders correctly, switches state when clicked, supports disabled mode, applies variant and size styles, and supports custom styling.
- `ToggleGroup`: Tests verify that the toggle group component renders correctly, allows selecting options, supports single and multiple selection modes, and applies custom styles properly.
- `Tooltip`: Tests verify that the tooltip component renders correctly, appears on hover, disappears when the mouse leaves, and applies custom styles properly while handling Radix UI's portal behavior.



Navigation Components: 
    
    
API Components: 
    
Routing: 
    