-- auto-install lazy
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
    vim.fn.system({
        "git",
        "clone",
        "--filter=blob:none",
        "https://github.com/folke/lazy.nvim.git",
        "--branch=stable", -- latest stable release
        lazypath,
    })
end
vim.opt.rtp:prepend(lazypath)


require("shenkit.options")
require("shenkit.plugins")
require("shenkit.keys")
require("shenkit.autocmds")


-- use the same colour as obsidian bold
vim.api.nvim_set_hl(0, "@markup.strong", {bold=true, fg="#C68B24"})
