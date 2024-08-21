require("obsidian").setup({
    workspaces = {
        {
            name = "personal-notes",
            path = "~/gDrive/1-personal-notes",
        },
        {
            name = "zettelkasten",
            path = "~/gDrive/2-zettelkasten",
        },
    },
    new_notes_location = "current_dir",
    preferred_link_style = "wiki",
    wiki_link_func = "use_alias_only",
    open_app_foreground = true,
    disable_frontmatter = true, -- don't let obsidian.nvim manage frontmatter
    mappings = {
        -- override to work on markdown/wiki links in the vault
        ["gf"] = {
            action = function()
                return require("obsidian").util.gf_passthrough()
            end,
            opts = { noremap = false, expr = true, buffer = true },
        },
        -- Smart action depending on context, either follow link or toggle checkbox.
        ["\u{00A1}"] = {
          action = function()
            return require("obsidian").util.smart_action()
          end,
          opts = { buffer = true, expr = true },
        }
    },
    note_path_func = function(spec)
        return (spec.dir / spec.title):with_suffix(".md")
    end,
    completion = {
        nvim_cmp = true,
        min_chars = 2, -- trigger completion after typing 2 characters
    },
    daily_notes = {
        folder = "areas/journal/daily",
    },
    picker = {
        name = "telescope.nvim",
    },
    -- what to do if :ObsidianOpenLink called on a non-file link (e.g. URL)
    follow_url_func = function(url)
        vim.fn.jobstart({"xdg-open", url})
    end,
    ui = {
        checkboxes = {
            [" "] = { char = "󰄱", hl_group = "ObsidianTodo" },
            ["x"] = { char = "", hl_group = "ObsidianDone" },
            -- ["/"] = { char = "󱋭", hl_group = "ObsidianPartialDone" },
        },
        hl_groups = {
            -- defaults + partial done
            ObsidianTodo = { bold = true, fg = "#f78c6c" },
            ObsidianDone = { bold = true, fg = "#28b536" },
            ObsidianBullet = { bold = true, fg = "#89ddff" },
            ObsidianRefText = { underline = true, fg = "#C68B24" },
            ObsidianExtLinkIcon = { fg = "#c792ea" },
            ObsidianTag = { italic = true, fg = "#89ddff" },
            ObsidianBlockID = { italic = true, fg = "#89ddff" },
            ObsidianHighlightText = { bg = "#75662e" },
            -- ObsidianPartialDone = { bold = true, fg = "#89ddff" },
        },
    },
})

-- headings highlighting
vim.cmd [[highlight Headline1 gui=bold]] -- guifg=#1ad687 guibg=#525252
vim.cmd [[highlight Headline2 gui=bold]] -- guifg=#4FABE1 guibg=#404040
vim.cmd [[highlight Headline3 gui=bold]] -- guifg=#E19C4F guibg=#303030
vim.cmd [[highlight Headline4 gui=bold]] -- guifg=#A1C246 guibg=#303030
vim.cmd [[highlight Dash guifg=#D19A66]]

require('headlines').setup({
    markdown = {
        bullets = {},
        -- headline_highlights = { "Headline1", "Headline2", "Headline3", "Headline4" }
    },
    rmd = {},
    org = {},
    neorg = {},
})

