-- ============================================================
--                       Global Options
-- ============================================================

local g            = vim.g
g.markdown_folding = 1

-- ============================================================
--                       Local Options
-- ============================================================

local opt          = vim.opt

-- [[ history / backup ]]
opt.swapfile       = false
opt.backup         = false
opt.undodir        = os.getenv("HOME") .. "/.vim/undodir"
opt.undofile       = true

-- [[ context ]]
opt.number         = true
opt.relativenumber = true
opt.scrolloff      = 5
opt.sidescrolloff  = 5
opt.signcolumn     = 'yes'
opt.completeopt    = { 'menu', 'menuone', 'noselect' }
opt.pumheight      = 7

-- [[ theme / appearance ]]
opt.termguicolors  = true
opt.linebreak      = true     -- only wrap after a space
opt.textwidth      = 999      -- don't hard-wrap at 80 chars, override in ftplugin/<filetype>.lua for specific files
opt.wrap           = true     -- whether to wrap at edges of screen
opt.breakindent    = true     -- indent wrapped text to the same level as the first line
opt.breakindentopt = "list:2" -- show the set symbol to denote a wrapped line
opt.showtabline    = 2        -- always show
opt.conceallevel   = 0        -- show characters as they are
vim.diagnostic.config({ virtual_text = false, signs = true, underline = false })

-- [[ indents ]]
opt.tabstop        = 2
opt.softtabstop    = 2
opt.shiftwidth     = 2
opt.expandtab      = true
opt.smartindent    = true

-- [[ folding ]]
opt.foldmethod     = 'indent'
opt.foldlevelstart = 99

-- [[ search ]]
opt.ignorecase     = true
opt.smartcase      = true  -- case sensitive if search contains capitals
opt.hlsearch       = false -- don't highlight all occurrences
opt.incsearch      = true  -- incremental search (update while typing)

-- [[ splits ]]
opt.splitright     = true -- split right instead of left by default
opt.splitbelow     = true -- split down instead of up by default

-- [[ sequences ]]
opt.timeoutlen     = 500

-- [[ misc ]]
opt.updatetime     = 50
opt.path:append '**'
opt.mousescroll    = 'ver:1,hor:1' -- scroll one line at a time (smoother scrolling)
opt.scroll         = 15            -- <C-D> / <C-U> scroll amount (lines)

-- [[ sessions ]]
opt.sessionoptions = "blank,buffers,curdir,folds,help,tabpages,winsize,winpos,terminal,localoptions"
