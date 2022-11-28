-- [[ opts.lua ]]
local opt = vim.opt

-- [[ context ]]
opt.number = true
opt.relativenumber = true
opt.scrolloff = 5 	 -- min lines of context

-- [[ filetypes ]]
opt.encoding = 'utf8'
opt.fileencoding = 'utf8'

-- [[ theme ]]
opt.syntax = 'ON'
opt.termguicolors = true

-- [[ search ]]
opt.ignorecase = true
opt.smartcase = true 	-- case sensitive if search contains capitals
opt.incsearch = true 	-- use incremental search
opt.hlsearch = false 	-- don't highlight search matches

-- [[ whitespace ]]
opt.shiftwidth = 4 	-- indent size
opt.tabstop = 4 	-- number of spaces tabs count for
opt.softtabstop = 4 	-- number of spaces tabs count for in insert mode

-- [[ splits ]]
opt.splitright = true 	-- split right instead of left by default
opt.splitbelow = true	-- split down instead of up by default

-- [[ sequences ]]
opt.timeoutlen = 500

-- [[ clipboard ]]
opt.clipboard = 'unnamedplus'

-- [[ find in subfolders ]]
opt.path:append("**")
