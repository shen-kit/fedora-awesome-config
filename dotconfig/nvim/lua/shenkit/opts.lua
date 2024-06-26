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

-- [[ folding ]]
opt.foldmethod = "indent"
opt.foldlevelstart = 99 -- all folds open by default. change to 0 for default closed

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
opt.linebreak = true    -- only wrap after a space
opt.textwidth = 999     -- don't hard-wrap at 80 chars, override in ftplugin/<filetype>.lua for specific files
opt.wrap = false        -- whether to wrap at edges of screen
opt.showtabline = 2
opt.conceallevel = 0
vim.diagnostic.config({ virtual_text = false, signs = false })     -- disable inline diagnostic text by default (change with :DiagnosticToggle)

-- [[ sequences ]]
opt.timeoutlen = 400

-- [[ splits ]]
opt.splitright = true 	-- split right instead of left by default
opt.splitbelow = true	-- split down instead of up by default

-- [[ misc ]]
--opt.clipboard = "unnamedplus"
opt.updatetime = 50
