//separators

export const MODIFIER_SEPARATOR = '_';
export const ELEMENT_SEPARATOR = '__';

//modifiers

export const TO_PAGE_MODIFIER = 'to-page';
export const HEAD_MODIFIER = 'head';

//classNames

export const CLASSNAME_SEPARATOR = ' ';
export const NAVIGATION_LINK_CLASSNAME = 'gatsby-dnmcl-nav-link';
export const NAVIGATION_CLASSNAME = 'gatsby-dnmcl-nav';

export const NAVIGATION_LIST_CLASSNAME = 'gatsby-dnmcl-nav-list';
export const NAVIGATION_LIST_ITEM_CLASSNAME = `${NAVIGATION_LIST_CLASSNAME}${ELEMENT_SEPARATOR}item`;

export const NAVIGATION_LINK_TO_PAGE_CLASSNAME = `${NAVIGATION_LINK_CLASSNAME}${MODIFIER_SEPARATOR}${TO_PAGE_MODIFIER}`;
export const HEAD_NAVIGATION_LINK_CLASSNAME = `${NAVIGATION_LINK_CLASSNAME}${MODIFIER_SEPARATOR}${HEAD_MODIFIER}`;

//further classNames

export const TARGET_CLASSNAME = 'target';
export const ACTIVE_CLASSNAME = 'active';
