local create_au = vim.api.nvim_create_autocmd

local myaucmds = vim.api.nvim_create_augroup("setfiletype", { clear= true })

create_au({"BufNewFile", "BufRead"}, {
    desc = "Set syntax highlighting for bashrc files",
    group = myaucmds,
    pattern = "*bashrc",
    command = "set filetype=sh"
})

create_au({"BufNewFile", "BufRead"}, {
    desc = "Set syntax highlighting for tmux config",
    group = myaucmds,
    pattern = ".tmux.conf",
    command = "set syntax=tmux"
})
