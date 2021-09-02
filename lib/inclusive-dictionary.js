// Source: https://docs.google.com/document/d/1QK__2vmuLcAnlat8OIVlZ4T0TDsoqpuayPjij2ID1fY/edit
// Object keys will be converted to RegExp
module.exports = {
  church: {
    category: "Culture and religion",
    reasoning:
      "Reinforces assumption of Christianity as the default religious belief",
    suggestions: "House of worship",
  },
  minorities: {
    category: "Culture and religion",
    reasoning:
      "Implies that a group is a lesser part of the whole and gives the power to the 'majority'",
    suggestions: "Underrepresented groups",
  },
  "master branch": {
    category: "Race and ethnicity",
    reasoning: "References slavery",
    suggestions: "Main branch or project specific branch",
  },
  "\\bmaster\\b": {
    category: "Race and ethnicity",
    reasoning: "References slavery",
    suggestions: "Primary/secondary or parent/child or main/client",
  },
  "\\bslave\\b": {
    category: "Race and ethnicity",
    reasoning: "References slavery",
    suggestions: "Primary/secondary or parent/child or main/client",
  },
  "whitelist|blacklist": {
    category: "Race and ethnicity",
    reasoning: "Implies white is 'good'/allowed",
    suggestions: "Allow/block or allowlist/blocklist",
  },
  "black and white": {
    category: "Race and ethnicity",
    reasoning:
      "Reinforces the concept that black and white are opposed and that one is good and the other evil",
    suggestions: "It's not that clear / it's not that straightforward",
  },
  tribe: {
    category: "Race and ethnicity",
    reasoning: "Term is ingrained in colonialism and racial derogatory views",
    suggestions: "Group, community",
  },
  "pow-wow": {
    category: "Race and ethnicity",
    reasoning:
      "Culturally insensitive references to sacred practices, rituals, or beliefs",
    suggestions: "Huddle, meet up",
  },
  "spirit animal": {
    category: "Race and ethnicity",
    reasoning:
      "Culturally insensitive references to sacred practices, rituals, or beliefs",
    suggestions: "What animal do you identify with the most?",
  },
  "sanity check": {
    category: "Ableism",
    reasoning: "Minimizes/alienates people who have mental illness",
    suggestions: "Completeness and/or clarity",
  },
  "healthy person": {
    category: "Ableism",
    reasoning:
      "Creates false definition of “normal” and alienates people with disabilities",
    suggestions:
      "Nondisabled person, sighted person, hearing person, person without disabilities, or neurotypical person",
  },
  "normal person": {
    category: "Ableism",
    reasoning:
      "Creates false definition of “normal” and alienates people with disabilities",
    suggestions:
      "Nondisabled person, sighted person, hearing person, person without disabilities, or neurotypical person",
  },
  handicap: {
    category: "Ableism",
    reasoning: "Negative descriptor that that emphasizes limitations",
    suggestions: "Accessible",
  },
  "cripples the system": {
    category: "Ableism",
    reasoning: "Derogatory toward people with disabilities",
    suggestions: "Poor user experience, slows down service",
  },
  "dummy variable": {
    category: "Ableism",
    reasoning:
      "Originates from term used to describe people who are unable to speak",
    suggestions: "Placeholder variable",
  },
  "dummy data": {
    category: "Ableism",
    reasoning:
      "Originates from term used to describe people who are unable to speak",
    suggestions: "Placeholder data",
  },
  mankind: {
    category: "Sexism",
    reasoning:
      "Not gender neutral, renders people who identify as women and non-binary invisible",
    suggestions: "Humanity, people",
  },
  manpower: {
    category: "Sexism",
    reasoning:
      "Not gender neutral, renders people who identify as women and non-binary invisible",
    suggestions: "Workforce",
  },
  "man hours": {
    category: "Sexism",
    reasoning:
      "Not gender neutral, renders people who identify as women and non-binary invisible",
    suggestions: "Person hours",
  },
  chairman: {
    category: "Sexism",
    reasoning:
      "Not gender neutral, renders people who identify as women and non-binary invisible",
    suggestions: "Chairperson",
  },
  housekeeping: {
    category: "Sexism",
    reasoning: "Has history of gendered connotations",
    suggestions: "Maintenance / clean up",
  },
  "wife|husband": {
    category: "Sexual orientation and gender identity",
    reasoning:
      "Reinforces the assumption that all relationships are heterosexual, and renders same-sex relationships invisible",
    suggestions: "Spouse or partner",
  },
  "girlfriend|boyfriend": {
    category: "Sexual orientation and gender identity",
    reasoning:
      "Reinforces the assumption that all relationships are heterosexual, and renders same-sex relationships invisible",
    suggestions: "Partner",
  },
  seniors: {
    category: "Ageism",
    reasoning: "Can be seen as limiting and de-emphasizing the individual",
    suggestions:
      "Older adults, aging population, mention the relationship of the person to other people (grandmother, great-uncle)",
  },
  "senior citizens": {
    category: "Ageism",
    reasoning: "Can be seen as limiting and de-emphasizing the individual",
    suggestions:
      "Older adults, aging population, mention the relationship of the person to other people (grandmother, great-uncle)",
  },
  elderly: {
    category: "Ageism",
    reasoning: "Can be seen as limiting and de-emphasizing the individual",
    suggestions:
      "Older adults, aging population, mention the relationship of the person to other people (grandmother, great-uncle)",
  },
  grandfathered: {
    category: "Ageism",
    reasoning: "Agist / references american south “grandfather clause”",
    suggestions: "Legacy",
  },
  "hobo|homeless": {
    category: "Socio-economic status",
    reasoning: "Defines individual by a singular experience",
    suggestions: "Person experiencing poverty",
  },
  "sold down the river": {
    category: "Socio-economic status",
    reasoning: "References slavery",
    suggestions: "Thrown under the bus",
  },
  landlord: {
    category: "Socio-economic status",
    reasoning: "Classist language",
    suggestions: "property owner",
  },
};
