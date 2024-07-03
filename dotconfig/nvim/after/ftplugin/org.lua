local map = vim.keymap.set
local opts = { noremap = true, silent = true }

-- auto numbered list and checkboxes
map({"n" , "v", "i"}, "\u{00B2}", "<CMD>ToggleCheckbox<CR>", opts)
map({"n" , "v", "i"}, "\u{00B3}", "<CMD>ToggleCheckbox<CR>", opts)

