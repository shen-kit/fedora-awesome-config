from kittens.tui.handler import result_handler

from kitty.boss import Boss


def main(_: list[str]) -> None:
    pass

@result_handler(no_ui=True)
def handle_result(args: list[str], res: str, win_id: int, boss: Boss) -> None:
    # unused
    del args, res, win_id

    tabs = [t for t in boss.all_tabs if t.name == "obsidian"]
    if len(tabs) > 0:
        # if on obsidian, toggle back to previous tab
        boss.toggle_tab("title:obsidian")
        return

    boss.launch("--type=tab", "--tab-title=obsidian", "--cwd=~/gDrive/1-obsidian/", "nvim", "Dashboard.md")
