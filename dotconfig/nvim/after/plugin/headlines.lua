vim.cmd [[highlight Headline1 guibg=#525252 guifg=#1ad687]]
vim.cmd [[highlight Headline2 guibg=#404040 guifg=#4FABE1]]
vim.cmd [[highlight Headline3 guibg=#303030 guifg=#BAE14F]]
vim.cmd [[highlight Dash guifg=#D19A66]]

require('headlines').setup({
    markdown = {
        bullets = {},
        headline_highlights = { "Headline1", "Headline2", "Headline3" }
    },
    rmd = {},
    org = {},
    neorg = {},
})
