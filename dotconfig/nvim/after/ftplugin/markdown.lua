-- ==========  OPTIONS ==========

local opt        = vim.opt

opt.conceallevel = 2 -- for obsidian.nvim
-- opt.textwidth = 80

-- [[ indents ]]
opt.tabstop      = 2
opt.softtabstop  = 2
opt.shiftwidth   = 2
opt.expandtab    = false

-- ==========  KEYBINDS ==========

local map        = vim.keymap.set
local opts       = { noremap = true, silent = true }

-- surround selected text with a character and reselect the text
map("x", "<leader>*", "c**<ESC>Pgvlolo", opts)
map("x", "<leader>$", "c$$<ESC>Pgvlolo", opts)
map("x", "<C-b>", "c****<ESC>hPgvllollo", opts)
map("n", "<leader>*", "viwc**<ESC>P", opts)
map("n", "<C-b>", "viwc****<ESC>hP", opts)
map("i", "<C-b>", "**", opts)
map("i", "<C-i>", "*", opts)

-- auto numbered list and checkboxes
map({ "n", "i" }, "<C-3>", "<CMD>ObsidianToggleCheckbox<CR>", opts)
map("x", "<C-3>", ":norm @c<CR>gv", opts) -- requires @c to be bound to :ObsidianToggleCheckbox

-- obsidian
map("n", "<C-S-O>", vim.cmd.ObsidianQuickSwitch, opts) -- quick switcher (Ctrl+Shift+O)
map("n", "<leader>ot", vim.cmd.ObsidianToday, opts)    -- today's note
map("n", "<leader>od", vim.cmd.ObsidianDailies, opts)  -- daily notes
map("n", "<leader>og", vim.cmd.ObsidianSearch, opts)   -- find in files
map("n", "<leader>on", vim.cmd.ObsidianNew, opts)      -- new note
map("n", "<leader>op", vim.cmd.ObsidianOpen, opts)     -- open in app

-- tables
map("n", "<leader>ta", "vip:EasyAlign *|<CR>", opts) -- align table cells

-- ==========  COMPLETION ==========
-- remove completion engines except snippets
require('cmp').setup.buffer({
  sources = {
    { name = 'luasnip' },
  },
})
