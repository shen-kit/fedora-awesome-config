-- ==========  OPTIONS ========== 

local opt = vim.opt

opt.conceallevel = 2 -- for obsidian.nvim
opt.textwidth = 80

-- ==========  KEYBINDS ========== 

local map = vim.keymap.set
local opts = { noremap = true, silent = true }

-- surround selected text with a character and reselect the text
map("x", "*"        , "c**<ESC>Pgvlolo", opts)
map("x", "<C-b>"    , "c****<ESC>hPEa", opts)
map("x", "<leader>$", "c$$<ESC>Pgvlolo", opts)
map("n", "*"        , "viwc**<ESC>P", opts)
map("n", "<C-b>"    , "viwc****<ESC>hP", opts)
map("i", "<C-b>"    , "**"             , opts)

-- auto numbered list and checkboxes
-- map({"n" , "v", "i"}, "<C-2>", "<CMD>RenumberList<CR>", opts)
map({"n" , "i"},      "<C-3>", "<CMD>ObsidianToggleCheckbox<CR>"  , opts)
map("x",              "<C-3>", ":norm @c<CR>gv", opts) -- requires @c to be bound to :ObsidianToggleCheckbox

-- obsidian
map("n" , "<C-S-O>"    , vim.cmd.ObsidianQuickSwitch , opts)    -- quick switcher, Ctrl+Shift+O
map("n" , "<leader>og" , vim.cmd.ObsidianSearch      , opts)    -- find in files (grep)
-- map("n" , "<M-1>"      , vim.cmd.ObsidianToday       , opts)    -- today's note (ctrl+alt+1)
map("n" , "<leader>od" , vim.cmd.ObsidianDailies     , opts)    -- yesterday's note (ctrl+alt+shift+1)
map("n" , "<leader>on" , vim.cmd.ObsidianNew         , opts)    -- new note
map("n" , "<leader>op" , vim.cmd.ObsidianOpen        , opts)    -- open in app
-- map("n" , "<M-!>"      , "<CMD>vim.cmd.ObsidianToday -1<CR>  , opts)    -- yesterday's note (ctrl+alt+shift+1)

-- tables
map("n", "<leader>tt", "vip:EasyAlign *|<CR>", opts) -- align table cells

-- ==========  COMPLETION ========== 
-- remove completion engines except snippets
require('cmp').setup.buffer({
  sources = {
    { name = 'luasnip' },
  },
})
