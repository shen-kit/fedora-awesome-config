local cmp = require('cmp')

-- custom snippets
--require("luasnip.loaders.from_vscode").lazy_load({ paths=".after/plugin/snippets" })
require("luasnip.loaders.from_snipmate").lazy_load({ paths="./after/plugin/snippets" })

-- keymaps
--local map = vim.keymap.set
--map({"i", "s"}, "<M-n>", function() ls.jump(1) end)
--map({"i", "s"}, "<M-S-N>", function() ls.jump(-1) end)

local ls = require("luasnip")

cmp.setup({
    sources = {
        { name = 'nvim_lsp' },
        { name = 'luasnip' },
    },
    mapping = cmp.mapping.preset.insert({
        -- Ctrl + space triggers completion menu
        ['<C-Space>'] = cmp.mapping.complete(),
        -- tab or enter to confirms completion item
        --['<tab>'] = cmp.mapping.confirm({select = true}),
        ['<C-b>'] = cmp.mapping.scroll_docs(-4),
        ['<C-f>'] = cmp.mapping.scroll_docs(4),
        ['<C-e>'] = cmp.mapping.abort(),
        -- enter to select the current snippet or item
        ['<CR>'] = cmp.mapping(function(fallback)
            if cmp.visible() then
                if ls.expandable() then
                    ls.expand()
                else
                    cmp.confirm({ select = true })
                end
            else
                fallback()
            end
        end),
        -- tab to go to next item in the list, or jump to the next location in the snippet
        ["<Tab>"] = cmp.mapping(function(fallback)
            if cmp.visible() then
                cmp.select_next_item()
            elseif ls.locally_jumpable(1) then
                ls.jump(1)
            else
                fallback()
            end
        end, { "i", "s" }),
        -- shift+tab to go to prev item in the list, or jump to the prev location in the snippet
        ["<S-Tab>"] = cmp.mapping(function(fallback)
            if cmp.visible() then
                cmp.select_prev_item()
            elseif ls.locally_jumpable(-1) then
                ls.jump(-1)
            else
                fallback()
            end
        end, { "i", "s" }),

    }),
    snippet = {
        expand = function(args)
            require('luasnip').lsp_expand(args.body)
        end,
    },
})

