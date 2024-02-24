local opt = vim.opt

-- [[ context ]]
opt.number = true
opt.relativenumber = true
opt.scrolloff = 10
opt.sidescrolloff = 8
opt.signcolumn = "yes"

-- [[ indents ]]
opt.tabstop = 4
opt.softtabstop = 4
opt.shiftwidth = 4
opt.expandtab = true
opt.smartindent = true

-- [[ backups handled by undotree ]]
opt.swapfile = false
opt.backup = false
opt.undodir = os.getenv("HOME") .. "/.vim/undodir"
opt.undofile = true

-- [[ search ]]
opt.ignorecase = true
opt.smartcase = true 	-- case sensitive if search contains capitals
opt.hlsearch = false
opt.incsearch = true

-- [[ theme / appearance ]]
opt.termguicolors = true
opt.wrap = false
opt.showtabline = 2

-- [[ sequences ]]
opt.timeoutlen = 500

-- [[ splits ]]
opt.splitright = true 	-- split right instead of left by default
opt.splitbelow = true	-- split down instead of up by default

-- [[ misc ]]
opt.clipboard = "unnamedplus"
opt.updatetime = 50
