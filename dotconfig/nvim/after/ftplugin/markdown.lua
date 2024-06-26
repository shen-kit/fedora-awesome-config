-- ==========  OPTIONS ========== 

local opt = vim.opt

opt.conceallevel = 2 -- required by obsidian plugin

-- ==========  KEYBINDS ========== 

local map = vim.keymap.set
local opts = { noremap = true, silent = true }

-- surround selected text with a character and reselect the text
map("v", "*"        , "c**<ESC>Pgvlolo", opts)
map("v", "`"        , "c``<ESC>Pgvlolo", opts)
map("v", "<leader>$", "c$$<ESC>Pgvlolo", opts)
map("i", "<C-b>"    , "**"             , opts)

-- auto numbered list and checkboxes
map({"n", "i"}, "\u{00B2}", "<cmd>RenumberList<CR>"          , opts)
map({"n", "i"}, "\u{00B3}", "<cmd>ObsidianToggleCheckbox<CR>", opts)
map({"v", "x"}, "\u{00B3}", ":norm @c<CR>gv"                 , opts)

-- obsidian
map("n" , "\u{00B4}"   , ":ObsidianQuickSwitch<CR>" , opts)    -- quick switcher, Ctrl+Shift+O
map("n" , "<leader>og" , ":ObsidianSearch<CR>"      , opts)    -- find in files (grep)
map("n" , "<M-1>"      , ":ObsidianToday<CR>"       , opts)    -- today's note (ctrl+alt+1)
map("n" , "<M-!>"      , ":ObsidianToday -1<CR>"    , opts)    -- yesterday's note (ctrl+alt+shift+1)
map("n" , "<leader>od" , ":ObsidianDailies<CR>"     , opts)    -- yesterday's note (ctrl+alt+shift+1)
map("n" , "<leader>on" , ":ObsidianNew<CR>"         , opts)    -- new note
map("n" , "<leader>op" , ":ObsidianOpen<CR>"        , opts)    -- open in app

-- tables
map("n", "<leader>t", "vip:EasyAlign *|<CR>", opts) -- align table cells
