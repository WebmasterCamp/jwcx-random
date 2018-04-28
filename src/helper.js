const groupsObject = {
  aprodrite: 1,
  ares: 2,
  demiter: 3,
  dionisus: 4,
  hades: 5,
  hestia: 6,
}

export function groupidToString(groupID) {
  const keys = Object.keys(groupsObject)
  const values = Object.values(groupsObject)
  return keys[values.indexOf(groupID)]
}

export const removed = [
  // groupsObject.aprodrite,
  // groupsObject.ares,
  // groupsObject.demiter,
  // groupsObject.dionisus,
  // groupsObject.hades,
  // groupsObject.hestia,
]
export const target = groupsObject.demiter
export const groups = groupsObject
