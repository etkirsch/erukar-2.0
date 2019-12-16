export function filterAuthenticationRequired ({ contents, profile }) {
  return (!profile)
    ? contents.filter((element) => !element.requiresAuthentication)
    : contents
}

export function filterLegends ({ contents, profile }) {
  return (!profile || profile.config.hasDisabledLegends)
    ? contents.filter((element) => !element.requiresLegendsActivation)
    : contents
}
