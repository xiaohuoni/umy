/// <reference types="react" />
import { InjectedProps } from '@material/react-ripple';
export interface MdFilledButton<T = any> extends InjectedProps<T>, Omit<React.AnchorHTMLAttributes<T>, 'type'>, React.ButtonHTMLAttributes<T> {
    raised?: boolean;
    unelevated?: boolean;
    outlined?: boolean;
    dense?: boolean;
    disabled?: boolean;
    className?: string;
    icon?: React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>;
    href?: string;
    trailingIcon?: React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>;
}
export type { MdAssistChip, MdBrandedFab, MdCheckbox, MdChipSet, MdCircularProgress, MdDialog, MdDivider, MdElevatedButton, MdElevation, MdFab, MdFilledField, MdFilledIconButton, MdFilledSelect, MdFilledTextField, MdFilledTonalButton, MdFilledTonalIconButton, MdFilterChip, MdFocusRing, MdIcon, MdIconButton, MdInputChip, MdLinearProgress, MdList, MdListItem, MdMenu, MdMenuItem, MdOutlinedButton, MdOutlinedField, MdOutlinedIconButton, MdOutlinedSelect, MdOutlinedTextField, MdPrimaryTab, MdRadio, MdRipple, MdSecondaryTab, MdSelectOption, MdSlider, MdSubMenu, MdSuggestionChip, MdSwitch, MdTabs, MdTextButton, } from '@material/web/all';
//# sourceMappingURL=types.d.ts.map