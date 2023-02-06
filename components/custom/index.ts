import { registerImageWithOverlay } from "./registerImageWithOverlay"
import { registerButtonPreview } from "./registerButtonPreview"
import { registerToggleColorMode } from "./registerToggleColorMode"
import { registerChakraDocs } from "./tokenSheets/registerChakraDocs"
import { registerGolfIcon } from "./icons/registerGolfIcon";
import { registerBowlingIcon } from "./icons/registerBowlingIcon";
import { registerArcadeIcon } from "./icons/registerArcadeIcon";
import { registerHijinxIcon } from "./icons/registerHijinxIcon";
import { registerWondervilleIcon } from "./icons/registerWondervilleIcon";
import { registerKaraokeIcon } from "./icons/registerKaraokeIcon";
import { registerLaserIcon } from "./icons/registerLaserIcon";
import { registerEscaperoomIcon } from "./icons/registerEscaperoomIcon";
import { registerFunPassIcon } from "./icons/registerFunPassIcon";
import { registerLocationPinIcon } from "./icons/registerLocationPinIcon";
import { registerDartsIcon } from "./icons/registerDartsIcon";
import { registerColorComponent } from "./tokenSheets/registerColorComponent";
import { registerSizeComponent } from "./tokenSheets/registerSize";

export function registerAllCustom() {
    registerImageWithOverlay();
    registerButtonPreview();
    registerToggleColorMode();
    registerChakraDocs();
  
    //Custom icons
    registerGolfIcon();
    registerBowlingIcon();
    registerArcadeIcon();
    registerHijinxIcon();
    registerWondervilleIcon();
    registerKaraokeIcon();
    registerLaserIcon();
    registerEscaperoomIcon();
    registerFunPassIcon();
    registerLocationPinIcon();
    registerDartsIcon();
    
    //TokenSheets
    registerColorComponent();
    registerSizeComponent();
}