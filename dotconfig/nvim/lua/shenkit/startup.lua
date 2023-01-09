require 'startup'.setup({
  -- theme = "startify",
  section_1 =  {
    type = 'text',
    align = 'left',
    content = {
      '███╗░░██╗██╗░░░██╗██╗███╗░░░███╗',
      '████╗░██║██║░░░██║██║████╗░████║',
      '██╔██╗██║╚██╗░██╔╝██║██╔████╔██║',
      '██║╚████║░╚████╔╝░██║██║╚██╔╝██║',
      '██║░╚███║░░╚██╔╝░░██║██║░╚═╝░██║',
      '╚═╝░░╚══╝░░░╚═╝░░░╚═╝╚═╝░░░░░╚═╝',
    },
    highlight = '',
  },
  section_2 = {
    type = 'mapping',
    align = 'left',
    content = {
      {' new file', ':enew', 'e'},
    },
    highlight = '',
  },
  section_3_heading = {
    type = 'text',
    align = 'left',
    content = {
      'Bookmarks',
    },
    highlight = 'string',
  },
  section_3 = {
    type = 'mapping',
    align = 'left',
    oldfiles_directory = false,
    fold_section = false,
    title = ' bookmarks',
    content = {
      {' ~/coding/projects/', ':e ~/coding/projects/<CR>', 'p'},
      {' ~/coding/courses/', ':e ~/coding/courses/<CR>', 'c'},
      {' ~/.config/nvim/', ':e ~/.config/nvim/<CR>', 'n'},
    },
    highlight = '',
    default_color = '',
    oldfiles_amount = 0,
  },
  section_4_heading = {
    type = 'text',
    align = 'left',
    content = {
      'Find Files',
    },
    highlight = 'string',
  },
  section_4 = {
    type = 'mapping',
    align = 'left',
    content = {
      { "פּ Nvim Tree", "NvimTreeToggle", "<C-p>" },
      { " Telescope", "Telescope find_files", "<leader>p" },
      { " Live Grep", "Telescope live_grep", "<leader>fg" },
      { " Recently Opened", "Telescope oldfiles", "<leader>ro" },
    },
    highlight = '',
  },
  section_5 = {
    type = 'mapping',
    align = 'left',
    content = {
      {' quit', ':q', 'q'},
    },
    highlight = '',
  },
  options = {
    mapping_keys = true,
    empty_lines_between_mappings = false,
    paddings = {3, 3, 2, 0, 2, 0, 2},
  },
  mappings = {
    execute_command = '<CR>',
    open_file = "<CR>",
    open_section = "<TAB>",
    open_help = "?",
  },
  parts = { 'section_1', 'section_2', 'section_3_heading', 'section_3', 'section_4_heading', 'section_4', 'section_5' },
}) 
