#!/bin/bash

battery_level=$(cat /sys/class/power_supply/BAT0/capacity);
status=$(cat /sys/class/power_supply/BAT0/status);

[ $status == "Full" ] &&
    notify-send "Battery full, unplug from power" "$battery_level%";

[ $status == "Charging" ] && [ $battery_level -ge 85 ] &&
    notify-send "Battery nearly full, unplug from power" "$battery_level%";

[ $status == "Discharging" ] && [ $battery_level -le 20 ] &&
    notify-send "WARNING: Battery Very Low" "$battery_level%";

[ $status == "Discharging" ] && [ $battery_level -le 35 ] &&
    notify-send "Battery low" "$battery_level%";

#if [[ $status == "Full" ]]
#then
#    notify-send "Battery full, unplug from power" "$battery_level%";
#elif [[ $status == "Charging" && $battery_level -ge 85 ]]
#then
#    notify-send "Battery nearly full, unplug from power" "$battery_level%";
## if discharging abd battery low, notify to plug in device
#elif [[ $status == "Discharging" && $battery_level -le 35 ]]
#then
#    if [ $battery_level -le 20 ]
#    then
#        notify-send "WARNING: Battery Very Low" "$battery_level%";
#        exit;
#    fi
#    notify-send "Battery low" "$battery_level%";
#fi
