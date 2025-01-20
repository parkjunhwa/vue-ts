export default [
  { heading: 'Components' },
  {
    title: 'Typography',
    icon: { icon: 'tabler-typography' },
    to: 'pages-typography',
  },
  {
    title: 'Icons',
    icon: { icon: 'tabler-brand-tabler' },
    to: 'pages-icons',
  },
  {
    title: 'Components',
    icon: { icon: 'tabler-toggle-left' },
    children: [
      { title: 'Alert', to: 'components-alert' },
      { title: 'Avatar', to: 'components-avatar' },
      { title: 'Badge', to: 'components-badge' },
      { title: 'Button', to: 'components-button' },
      { title: 'Chip', to: 'components-chip' },
      { title: 'Dialog', to: 'components-dialog' },
      { title: 'Expansion Panel', to: 'components-expansion-panel' },
      { title: 'List', to: 'components-list' },
      { title: 'Menu', to: 'components-menu' },
      { title: 'Pagination', to: 'components-pagination' },
      { title: 'Progress Circular', to: 'components-progress-circular' },
      { title: 'Progress Linear', to: 'components-progress-linear' },
      { title: 'Snackbar', to: 'components-snackbar' },
      { title: 'Tabs', to: 'components-tabs' },
      { title: 'Timeline', to: 'components-timeline' },
      { title: 'Tooltip', to: 'components-tooltip' },
    ],
  },
  {
    title: 'Form Elements',
    icon: { icon: 'tabler-copy' },
    children: [
      {
        title: 'Autocomplete',
        to: 'forms-autocomplete',
      },
      {
        title: 'Checkbox',
        to: 'forms-checkbox',
      },
      {
        title: 'Combobox',
        to: 'forms-combobox',
      },
      {
        title: 'Date Time Picker',
        to: 'forms-date-time-picker',
      },
      {
        title: 'Editors',
        to: 'forms-editors',
      },
      {
        title: 'File Input',
        to: 'forms-file-input',
      },
      {
        title: 'Radio',
        to: 'forms-radio',
      },
      {
        title: 'Custom Input',
        to: 'forms-custom-input',
      },
      {
        title: 'Range Slider',
        to: 'forms-range-slider',
      },
      {
        title: 'Rating',
        to: 'forms-rating',
      },
      {
        title: 'Select',
        to: 'forms-select',
      },
      { title: 'Slider', to: 'forms-slider' },
      {
        title: 'Switch',
        to: 'forms-switch',
      },
      {
        title: 'Textarea',
        to: 'forms-textarea',
      },
      {
        title: 'Textfield',
        to: 'forms-textfield',
      },
    ],
  },
  {
    title: 'Tables',
    icon: { icon: 'tabler-layout-grid' },
    children: [
      { title: 'Simple Table', icon: { icon: 'tabler-table' }, to: 'tables-simple-table' },
      { title: 'Data Table', icon: { icon: 'tabler-layout-grid' }, to: 'tables-data-table' },
    ],
  },
  {
    title: 'Dialog Examples',
    icon: { icon: 'tabler-square' },
    to: 'pages-dialog-examples',
  },
]
