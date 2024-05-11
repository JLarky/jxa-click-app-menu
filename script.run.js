#!/bin/sh

/*/.this-doesnt-exist 2>/dev/null
osascript -l JavaScript "$0" "$@"
exit 0
#*/
// @ts-check
/// <reference types="./types.ts" />

// console.log(Application("System Events").processes.name().join("\n"));

// show About Finder popup
menuItemTestClick("Finder", ["Finder", "About Finder"]);

/**
 * @param {string} strAppName
 * @param {string[]} lstMenuPath
 *
 * @returns {boolean}
 */
function menuItemTestClick(strAppName, lstMenuPath) {
  const lngChain = lstMenuPath.length;
  let blnResult = false;

  const btnDebug = true; // edit to 'true' if you want warnings of errors in the path
  // (NOTE this kind of checking slows the script, so edit to blnDebug=false for regular use)

  if (lngChain > 1) {
    const procApp = Application("System Events").processes.byName(strAppName);

    if (procApp) {
      let strMenu = lstMenuPath[0];
      let strPath = strMenu;
      let fnMenu = procApp.menuBars[0].menus.byName(strMenu);
      const lngLast = lngChain - 1;

      if (btnDebug) {
        try {
          fnMenu.class();
        } catch (e) {
          throw new Error(`Menu Name "${strMenu}" not found`);
        }
      }

      for (let i = 1; i < lngLast; i++) {
        strMenu = lstMenuPath[i];
        strPath = `${strPath} > ${strMenu}`;
        fnMenu = fnMenu.menuItems[strMenu].menus[strMenu];
        if (btnDebug) {
          try {
            fnMenu.class();
          } catch (e) {
            throw new Error(`Menu item "${strPath}" not found`);
          }
        }
      }

      strMenu = lstMenuPath[lngLast];
      strPath = `${strPath} > ${strMenu}`;
      const mnuItem = fnMenu.menuItems[strMenu];

      if (btnDebug) {
        try {
          mnuItem.class();
        } catch (e) {
          throw new Error(`Menu item "${strPath}" not found`);
        }
      }

      const oApp = Application(strAppName);
      oApp.activate();
      mnuItem.click();
      blnResult = true;
    }
  }
  return blnResult;
}
