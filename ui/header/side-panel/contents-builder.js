export function filterAuthenticationRequired (element, profile) {
  return profile || (element && !element.requiresAuthentication)
}

export function filterLegends (element, profile) {
  return !element.requiresLegendsActivation || 
    (profile && (!profile.config || !profile.config.hasDisabledLegends))
}

export function filterContents ({ contents, profile }) {
  return contents
    .filter((element) => filterLegends(element, profile)
      && filterAuthenticationRequired(element, profile))
}

export function profileCampaigns (profile) {
  return !!profile && !!profile.campaigns
    ? profile.campaigns
    : []
}

export function createContents ({ contentSegments, profile }) {
  return [
    ...contentSegments[0], 
    ...profileCampaigns(profile),
    ...contentSegments[1]
  ]
}

export function buildSidePanelContents ({ contentSegments, profile }) {
  return filterContents({
    contents: createContents({ contentSegments, profile }),
    profile
  })
}
