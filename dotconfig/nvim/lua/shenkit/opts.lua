-- [[ opts.lua ]]
local opt = vim.opt

-- [[ context ]]
opt.number = true
opt.relativenumber = true
opt.signcolumn = 'yes'
opt.scrolloff = 8 	 -- min lines of context
opt.sidescrolloff = 8
opt.pumheight = 10	 -- popup menu height

-- [[ filetypes ]]
opt.encoding = 'utf8'
opt.fileencoding = 'utf8'
opt.swapfile = false
opt.writebackup = false -- don't allow a file to be edited while being edited by opened by another program
opt.showtabline = 2		-- always show tabs (at the top)

-- [[ theme ]]
opt.syntax = 'ON'
opt.termguicolors = true

-- [[ search ]]
opt.ignorecase = true
opt.smartcase = true 	-- case sensitive if search contains capitals
opt.incsearch = true 	-- use incremental search
opt.hlsearch = true 	-- highlight search matches

-- [[ whitespace ]]
opt.expandtab = true  -- convert tabs to spaces
opt.shiftwidth = 2		-- spaces per indent
opt.tabstop = 2				-- number of spaces tabs count for
opt.smartindent = true

-- [[ splits ]]
opt.splitright = true 	-- split right instead of left by default
opt.splitbelow = true	-- split down instead of up by default

-- [[ sequences ]]
opt.timeoutlen = 500

-- [[ clipboard ]]
opt.clipboard = 'unnamedplus'

-- [[ find in subdirectories ]]
opt.path:append("**")

-- misc
opt.completeopt = { 'menuone', 'noselect' } -- for autocompletion
opt.conceallevel = 0 -- make `` visible in markdown files
opt.updatetime = 300

opt.iskeyword:append('-') -- strings joined by a hyphen count as one word
